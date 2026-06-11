'use client';

import { useState } from 'react';

import { useProtocolStore } from '@/store/protocolStore';
import { ProtocolFormValues } from '@/lib/schemas/protocolSchema';

import { ProtocolSection } from '@/components/protocol/ProtocolSection';
import { EditableInput } from '@/components/protocol/EditableInput';
import { EditableTextarea } from '@/components/protocol/EditableTextarea';
import { defaultExtra } from '@/data/protocolDefaults';
import { ProtocolWeighingTable } from '@/components/protocol/ProtocolWeighingTable';

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

    return (
        <div className='bg-gray-100 min-h-screen py-6 flex justify-center'>
            <div className='bg-white w-[210mm] min-h-[297mm] shadow-xl rounded-lg p-6 text-[12px] text-gray-900 space-y-3'>
                {/* HEADER */}
                <div className='border-b pb-2'>
                    <h1 className='text-lg font-bold uppercase tracking-wider'>
                        Protokół wykonania leku recepturowego
                    </h1>

                    <p className='text-[11px] text-gray-500'>
                        Dokument wewnętrzny apteki
                    </p>
                </div>

                {/* 1 */}
                <ProtocolSection title='1. Dane podstawowe'>
                    <div className='grid grid-cols-2 gap-3'>
                        <EditableInput
                            value={draft.prescriptionNumber}
                            onChange={(value) =>
                                updateField('prescriptionNumber', value)
                            }
                            placeholder='Numer recepty'
                        />

                        <EditableInput
                            value={draft.patientName}
                            onChange={(value) =>
                                updateField('patientName', value)
                            }
                            placeholder='Pacjent'
                        />
                    </div>
                </ProtocolSection>

                {/* 2 */}
                <ProtocolSection title='2. Skład recepty'>
                    <div className='space-y-1'>
                        {draft.ingredients.map((ingredient, index) => (
                            <div
                                key={index}
                                className='flex items-center gap-3 border rounded-lg px-3 py-2 bg-gray-50'
                            >
                                <div className='font-medium flex-1'>
                                    {ingredient.name}
                                </div>

                                <div className='font-semibold text-blue-700 whitespace-nowrap'>
                                    {Number(ingredient.amount).toFixed(1)} g
                                </div>
                            </div>
                        ))}
                    </div>
                </ProtocolSection>

                {/* 3 */}
                <ProtocolSection title='3. Postać farmaceutyczna'>
                    <div className='font-medium capitalize'>
                        {draft.dosageForm}
                    </div>
                </ProtocolSection>

                {/* 4 */}
                <ProtocolSection title='4. Działanie i zastosowanie'>
                    <EditableTextarea
                        value={extra.comment}
                        onChange={(value) => updateExtra('comment', value)}
                        rows={3}
                    />
                </ProtocolSection>

                {/* 5 */}
                <ProtocolSection title='5. Dane osoby wystawiającej receptę'>
                    <EditableInput
                        value={draft.doctorName}
                        onChange={(value) => updateField('doctorName', value)}
                    />
                </ProtocolSection>

                {/* 6 */}
                <ProtocolSection title='6. Obliczenia składników'>
                    <EditableTextarea
                        value={extra.calculations}
                        onChange={(value) => updateExtra('calculations', value)}
                        rows={4}
                    />
                </ProtocolSection>

                {/* 7 */}
                <ProtocolSection title='7. Opakowanie leku'>
                    <EditableTextarea
                        value={extra.packaging}
                        onChange={(value) => updateExtra('packaging', value)}
                        rows={2}
                    />
                </ProtocolSection>

                {/* 8 */}
                <ProtocolSection title='8. Odważanie składników'>
                    <ProtocolWeighingTable ingredients={draft.ingredients} />
                </ProtocolSection>

                {/* 9 */}
                <ProtocolSection title='9. Badania'>
                    <EditableTextarea
                        value={extra.tests}
                        onChange={(value) => updateExtra('tests', value)}
                        rows={3}
                    />
                </ProtocolSection>

                {/* 10 */}
                <ProtocolSection title='10. Opis wykonania'>
                    <EditableTextarea
                        value={extra.execution}
                        onChange={(value) => updateExtra('execution', value)}
                        rows={5}
                    />
                </ProtocolSection>

                {/* 11 */}
                <ProtocolSection title='11. Komentarz'>
                    <EditableTextarea
                        value={extra.comment}
                        onChange={(value) => updateExtra('comment', value)}
                        rows={3}
                    />
                </ProtocolSection>

                {/* 12 */}
                <ProtocolSection title='12. Dawkowanie / trwałość / przechowywanie'>
                    <div className='grid grid-cols-3 gap-2'>
                        <EditableInput
                            value={extra.dosing}
                            onChange={(value) => updateExtra('dosing', value)}
                            placeholder='Dawkowanie'
                        />

                        <EditableInput
                            value={extra.duration}
                            onChange={(value) => updateExtra('duration', value)}
                            placeholder='Trwałość'
                        />

                        <EditableInput
                            value={extra.storage}
                            onChange={(value) => updateExtra('storage', value)}
                            placeholder='Przechowywanie'
                        />
                    </div>
                </ProtocolSection>
            </div>
        </div>
    );
}
