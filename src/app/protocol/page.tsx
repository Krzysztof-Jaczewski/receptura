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
                <div>
                    <div className=' text-center'>
                        Apteka Dbam o Zdrowie <br />
                        04-713 Warszawa, Żegańska 22 E <br />
                        REGON 001375127, BDO 000114189
                        <br />
                        NIP 5210083087
                    </div>
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

                    <div className='grid grid-cols-4 gap-3'>
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
                        <DisplayField
                            label='Trwałość od daty wykonania'
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
                        className='border rounded-lg p-2 bg-gray-50 '
                    >
                        {draft.ingredients.map((ingredient, index) => {
                            const ing = getIngredientById(
                                ingredient.ingredientId,
                            );

                            const amount = Number(ingredient.amount);
                            return (
                                <div key={index}>
                                    {ing?.name}{' '}
                                    {Number.isFinite(amount)
                                        ? amount.toFixed(1)
                                        : ingredient.amount}
                                    g
                                </div>
                            );
                        })}
                    </div>

                    {/*3 */}
                </ProtocolSection>
                <ProtocolSection title='3. Etapy realizacji'>
                    <div
                        contentEditable
                        suppressContentEditableWarning
                        className='border rounded-lg p-2 bg-gray-50 '
                    ></div>
                </ProtocolSection>

                {/*4 */}
                <ProtocolSection title='4. Dawkowanie i zastosowanie'>
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

                {/* 5 */}
                <ProtocolSection title='5. Obliczenia składników'>
                    <EditableTextarea
                        value={extra.calculations}
                        onChange={(value) => updateExtra('calculations', value)}
                        rows={7}
                    />
                </ProtocolSection>

                {/* 6  */}
                <ProtocolSection title='6. Opakowanie leku'>
                    <EditableTextarea
                        value={extra.packaging}
                        onChange={(value) => updateExtra('packaging', value)}
                        rows={1}
                    />
                </ProtocolSection>

                {/* 7 */}
                <ProtocolSection title='7. Odważanie składników'>
                    <ProtocolWeighingTable ingredients={draft.ingredients} />
                </ProtocolSection>

                {/* 8 */}

                <ProtocolSection title='8. Przygotowanie pomieszczenia i personelu'>
                    <div className='space-y-2'>
                        <div>
                            <div className='font-semibold '>Pomieszczenie</div>
                            <div className='text-[11px]'>
                                {preparation.room.map((item, i) => (
                                    <div key={i}>
                                        {i + 1}. {item}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <div className='font-semibold '>Personel</div>
                            <div className=' text-[11px]'>
                                {preparation.staff.map((item, i) => (
                                    <div key={i}>
                                        {' '}
                                        {i + 1}. {item}
                                    </div>
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
                        rows={10}
                    />{' '}
                </ProtocolSection>
                {/* 10 */}
                <ProtocolSection title='10.Badania po sporządzeniu'>
                    <div className='space-y-1'>
                        {tests.map((test, index) => (
                            <div key={index} className='text-xs'>
                                • {test}
                            </div>
                        ))}
                    </div>
                </ProtocolSection>

                {/*11 */}
                <ProtocolSection title='11. Komentarz'>
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
