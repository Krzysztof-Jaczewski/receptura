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

    const updateField = <K extends keyof ProtocolFormValues>(
        field: K,
        value: ProtocolFormValues[K],
    ) => {
        setDraft((prev) =>
            prev
                ? {
                      ...prev,
                      [field]: value,
                  }
                : prev,
        );
    };

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
                        <EditableInput
                            value={draft.prescriptionNumber}
                            onChange={(value) =>
                                updateField('prescriptionNumber', value)
                            }
                            label='Numer recepty'
                        />

                        <EditableInput
                            value={draft.patientName}
                            onChange={(value) =>
                                updateField('patientName', value)
                            }
                            label='Imie i nazwisko pacjenta'
                        />
                        <EditableInput
                            value={draft.doctorName}
                            onChange={(value) =>
                                updateField('doctorName', value)
                            }
                            label='Imie i nazwisko lekarza'
                        />
                    </div>
                    <div className='grid grid-cols-3 gap-2'>
                        <EditableInput
                            value={extra.dosing}
                            onChange={(value) => updateExtra('dosing', value)}
                            label='Dawkowanie'
                        />

                        <EditableInput
                            value={
                                storageOptions.find(
                                    (opt) => opt.value === extra.storage,
                                )?.label || ''
                            }
                            onChange={(value) => updateExtra('storage', value)}
                            label='Przechowywanie'
                        />
                        <EditableInput
                            label='Postać farmaceutyczna'
                            value={
                                dosageForms.find(
                                    (form) => form.value === draft.dosageForm,
                                )?.label || ''
                            }
                            onChange={(value) =>
                                updateField('patientName', value)
                            }
                        />
                    </div>
                    <div className='grid grid-cols-3 gap-2'>
                        <EditableInput
                            label='Data wykonania'
                            value={extra.executionDate}
                            onChange={(value) =>
                                updateField('patientName', value)
                            }
                        />
                        <EditableInput
                            value={
                                durationOptions.find(
                                    (opt) => opt.value === extra.duration,
                                )?.label || ''
                            }
                            onChange={(value) => updateExtra('duration', value)}
                            label='Trwałość'
                        />
                    </div>
                </ProtocolSection>

                {/* 2 */}
                <ProtocolSection title='2. Skład recepty'>
                    <div className='space-y-1'>
                        {draft.ingredients.map((ingredient, index) => {
                            const ing = getIngredientById(
                                ingredient.ingredientId,
                            );

                            return (
                                <div
                                    key={index}
                                    className='flex items-center gap-3 border rounded-lg px-3 py-2 bg-gray-50'
                                >
                                    <div className='font-medium flex-1'>
                                        {ing?.name}
                                    </div>

                                    <div className='font-semibold text-blue-700 whitespace-nowrap'>
                                        {Number(ingredient.amount).toFixed(1)} g
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </ProtocolSection>

                {/*3 */}
                <ProtocolSection title='3. Działanie i zastosowanie'>
                    <EditableTextarea
                        value={extra.comment}
                        onChange={(value) => updateExtra('comment', value)}
                        rows={1}
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
                        value={extra.packaging}
                        onChange={(value) => updateExtra('packaging', value)}
                        rows={1}
                    />
                </ProtocolSection>

                {/* 6 */}
                <ProtocolSection title='6. Odważanie składników'>
                    <ProtocolWeighingTable ingredients={draft.ingredients} />
                </ProtocolSection>

                {/* 7 */}
                <ProtocolSection title='7.Badania po sporządzeniu'>
                    <div className='space-y-1'>
                        {tests.map((test, index) => (
                            <div key={index} className='text-sm'>
                                • {test}
                            </div>
                        ))}
                    </div>
                </ProtocolSection>
                {/* 8 */}
                <ProtocolSection title='8. Przygotowanie pomieszczenia i personelu'>
                    <div className='space-y-3'>
                        <div>
                            <div className='font-semibold mb-1'>
                                Pomieszczenie
                            </div>
                            <div className='space-y-1 text-sm'>
                                {preparation.room.map((item, i) => (
                                    <div key={i}>• {item}</div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <div className='font-semibold mb-1'>Personel</div>
                            <div className='space-y-1 text-sm'>
                                {preparation.staff.map((item, i) => (
                                    <div key={i}>• {item}</div>
                                ))}
                            </div>
                        </div>
                    </div>
                </ProtocolSection>

                {/* 9 */}
                <ProtocolSection title='9. Opis wykonania'>
                    <EditableTextarea
                        value={extra.execution}
                        onChange={(value) => updateExtra('execution', value)}
                        rows={5}
                    />{' '}
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
