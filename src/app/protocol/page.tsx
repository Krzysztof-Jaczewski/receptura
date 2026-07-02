'use client';

import { useState } from 'react';

import { useProtocolStore } from '@/store/protocolStore';
import { ProtocolFormValues } from '@/lib/schemas/protocolSchema';

import { ProtocolSection } from '@/components/protocol/ProtocolSection';
import { EditableInput } from '@/components/protocol/EditableInput';
import { EditableTextarea } from '@/components/protocol/EditableTextarea';
import { defaultExtra } from '@/data/protocolDefaults';
import { ProtocolWeighingTable } from '@/components/protocol/ProtocolWeighingTable';
import { SignatureStampSection } from '@/components/protocol/SignatureStampSection';
import { getIngredientById } from '@/lib/ingredients/getIngredientById';
import { getPreparation } from '@/lib/preparations/getPreparation';
import { getTestsByDosageForm } from '@/lib/ingredients/getTestsByDosageForm';
import { durationOptions, storageOptions } from '@/data/protocolDetailsOptions';
import { dosageForms } from '@/data/dosageForms';
import { containerOptions } from '@/data/containers';
import { DisplayField } from '@/components/protocol/DisplayField';

export default function ProtocolPage() {
    const data = useProtocolStore((state) => state.formData);

    const [draft, setDraft] = useState<ProtocolFormValues | null>(data ?? null);

    if (!draft) {
        return (
            <div className='min-h-screen flex items-center justify-center text-gray-500'>
                Brak danych protokołu
            </div>
        );
    }

    const extra = draft.extra ?? defaultExtra;

    const updateExtra = <
        K extends keyof NonNullable<ProtocolFormValues['extra']>,
    >(
        field: K,
        value: string,
    ) => {
        setDraft((prev) => {
            if (!prev) return prev;

            return {
                ...prev,
                extra: {
                    ...(prev.extra ?? defaultExtra),
                    [field]: value,
                },
            };
        });
    };

    const tests = getTestsByDosageForm(draft.dosageForm);
    const preparation = getPreparation(draft.isSterile);

    return (
        <div className='bg-gray-100 min-h-screen py-6 flex justify-center'>
            <div className='bg-white w-[210mm] min-h-[297mm] shadow-xl rounded-lg p-6 text-[12px] text-gray-900 space-y-3'>
                {/* HEADER */}
                <div className='border-b pb-2'>
                    <h1 className='text-lg font-bold uppercase tracking-wider text-center'>
                        Protokół wykonania leku recepturowego
                    </h1>
                </div>

                {/* 1 */}
                <ProtocolSection title='1. Dane podstawowe'>
                    <div className='grid grid-cols-3 gap-3'>
                        <DisplayField
                            label='Nr recepty/Nr kontrolny'
                            value={draft.prescriptionNumber}
                        />

                        <DisplayField
                            label='Imię i nazwisko pacjenta'
                            value={draft.patientName}
                        />

                        <DisplayField
                            label='Imię i nazwisko lekarza'
                            value={draft.doctorName}
                        />
                    </div>

                    <div className='grid grid-cols-3 gap-3'>
                        <DisplayField
                            label='Przechowywanie'
                            value={
                                storageOptions.find(
                                    (opt) => opt.value === extra.storage,
                                )?.label
                            }
                        />

                        <DisplayField
                            label='Postać farmaceutyczna'
                            value={
                                dosageForms.find(
                                    (form) => form.value === draft.dosageForm,
                                )?.label
                            }
                        />

                        <DisplayField
                            label='Sterylność'
                            value={draft.isSterile ? 'Jałowy' : 'Niejałowy'}
                        />
                    </div>

                    <div className='grid grid-cols-3 gap-3'>
                        <DisplayField
                            label='Data wykonania'
                            value={extra.executionDate}
                        />

                        <DisplayField
                            label='Trwałość'
                            value={
                                durationOptions.find(
                                    (opt) => opt.value === extra.shelfLife,
                                )?.label
                            }
                        />
                    </div>
                </ProtocolSection>

                {/* 2 */}
                <ProtocolSection title='2. Skład recepty'>
                    <div
                        contentEditable
                        suppressContentEditableWarning
                        className='border rounded-lg p-3 bg-gray-50 '
                    >
                        {draft.ingredients.map((ingredient, index) => {
                            const ing = getIngredientById(
                                ingredient.ingredientId,
                            );

                            return (
                                <div key={index}>
                                    {ing?.name}{' '}
                                    {!ingredient.amount.includes('ad')
                                        ? Number(ingredient.amount).toFixed(1)
                                        : ingredient.amount}{' '}
                                    g
                                </div>
                            );
                        })}
                    </div>
                </ProtocolSection>

                {/*3 */}
                <ProtocolSection title='3. Dawkowanie i zastosowanie'>
                    <EditableInput
                        value={extra.dosage}
                        onChange={(value) => updateExtra('dosage', value)}
                        label='Dawkowanie'
                    />
                    <EditableInput
                        value={extra.usage}
                        onChange={(value) => updateExtra('usage', value)}
                        label='Zastosowanie'
                    />
                </ProtocolSection>

                {/* 4 */}
                <ProtocolSection title='4. Obliczenia składników'>
                    <EditableTextarea
                        value={extra.calculations}
                        onChange={(value) => updateExtra('calculations', value)}
                        rows={4}
                    />
                </ProtocolSection>

                {/* 5  */}
                <ProtocolSection title='5. Opakowanie leku'>
                    <EditableTextarea
                        value={`${draft.isSterile ? 'Sterylny' : ''} ${
                            containerOptions.find(
                                (opt) => opt.value === extra.packaging,
                            )?.label || ''
                        }`}
                        onChange={(value) => updateExtra('packaging', value)}
                        rows={1}
                    />
                </ProtocolSection>

                {/* 6 */}
                <ProtocolSection title='6. Odważanie składników'>
                    <ProtocolWeighingTable ingredients={draft.ingredients} />
                </ProtocolSection>

                {/* 7 */}

                <ProtocolSection title='7. Przygotowanie pomieszczenia i personelu'>
                    <div className='space-y-3'>
                        <div>
                            <div className='font-semibold mb-1'>
                                Pomieszczenie
                            </div>
                            <div className='space-y-1 text-xs'>
                                {preparation.room.map((item, i) => (
                                    <div key={i}>• {item}</div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <div className='font-semibold mb-1'>Personel</div>
                            <div className='space-y-1 text-xs'>
                                {preparation.staff.map((item, i) => (
                                    <div key={i}>• {item}</div>
                                ))}
                            </div>
                        </div>
                    </div>
                </ProtocolSection>
                {/* 8 */}

                <ProtocolSection title='8. Opis wykonania'>
                    <EditableTextarea
                        value={extra.execution}
                        onChange={(value) => updateExtra('execution', value)}
                        rows={8}
                    />{' '}
                </ProtocolSection>
                {/* 9 */}
                <ProtocolSection title='9.Badania po sporządzeniu'>
                    <div className='space-y-1'>
                        {tests.map((test, index) => (
                            <div key={index} className='text-xs'>
                                • {test}
                            </div>
                        ))}
                    </div>
                </ProtocolSection>

                {/*10 */}
                <ProtocolSection title='10. Komentarz'>
                    <EditableTextarea
                        value={extra.comment}
                        onChange={(value) => updateExtra('comment', value)}
                        rows={1}
                    />
                </ProtocolSection>

                <SignatureStampSection />
            </div>
        </div>
    );
}
