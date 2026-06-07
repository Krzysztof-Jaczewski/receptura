'use client';

import { useState } from 'react';
import { useProtocolStore } from '@/store/protocolStore';
import { ProtocolFormValues } from '@/lib/schemas/protocolSchema';

export default function ProtocolPage() {
    const data = useProtocolStore((state) => state.formData);
    const [draft, setDraft] = useState<ProtocolFormValues | null>(data ?? null);

    if (!draft) {
        return (
            <div className='min-h-screen flex items-center justify-center text-gray-500 text-sm'>
                Brak danych protokołu
            </div>
        );
    }

    const extra = draft.extra ?? {
        calculations: '',
        packaging: '',
        tests: '',
        execution: '',
        comment: '',
        dosing: '',
        duration: '',
        storage: '',
    };

    const updateField = <K extends keyof ProtocolFormValues>(
        field: K,
        value: ProtocolFormValues[K],
    ) => {
        setDraft((prev) => (prev ? { ...prev, [field]: value } : prev));
    };

    const updateExtra = <
        K extends keyof NonNullable<ProtocolFormValues['extra']>,
    >(
        field: K,
        value: string,
    ) => {
        setDraft((prev) =>
            prev
                ? {
                      ...prev,
                      extra: {
                          ...(prev.extra ?? {
                              calculations: '',
                              packaging: '',
                              tests: '',
                              execution: '',
                              comment: '',
                              dosing: '',
                              duration: '',
                              storage: '',
                          }),
                          [field]: value,
                      },
                  }
                : prev,
        );
    };

    const section = 'border rounded-xl p-4 bg-white shadow-sm space-y-2';

    const title =
        'text-[12px] font-semibold uppercase tracking-wide text-gray-600';

    const input =
        'w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400';

    return (
        <div className='bg-gray-100 min-h-screen py-10 flex justify-center'>
            {/* A4 SHEET */}
            <div className='bg-white w-[210mm] min-h-[297mm] shadow-xl rounded-md p-10 text-[12px] text-gray-900 space-y-6'>
                {/* HEADER */}
                <div className='border-b pb-3'>
                    <h1 className='text-lg font-bold uppercase tracking-wider'>
                        Protokół wykonania leku recepturowego
                    </h1>
                    <p className='text-[11px] text-gray-500 mt-1'>
                        Dokument wewnętrzny apteki
                    </p>
                </div>

                {/* 1 */}
                <div className={section}>
                    <div className={title}>1. Dane podstawowe</div>

                    <input
                        className={input}
                        value={draft.prescriptionNumber}
                        onChange={(e) =>
                            updateField('prescriptionNumber', e.target.value)
                        }
                        placeholder='Numer recepty'
                    />

                    <input
                        className={input}
                        value={draft.patientName}
                        onChange={(e) =>
                            updateField('patientName', e.target.value)
                        }
                        placeholder='Pacjent'
                    />
                </div>

                {/* 2 */}
                <div className={section}>
                    <div className={title}>2. Skład recepty</div>

                    <div className='space-y-2'>
                        {draft.ingredients.map((i, idx) => (
                            <div key={idx} className='grid grid-cols-2 gap-2'>
                                <div className='border rounded-lg px-3 py-2 bg-gray-50'>
                                    {i.name || '—'}
                                </div>

                                <div className='border rounded-lg px-3 py-2 text-right bg-gray-50'>
                                    {i.amount.toFixed(1)} g
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 3 */}
                <div className={section}>
                    <div className={title}>3. Postać farmaceutyczna</div>
                    <div className='text-sm mt-1'>{draft.dosageForm}</div>
                </div>

                {/* 4 */}
                <div className={section}>
                    <div className={title}>4. Działanie i zastosowanie</div>
                    <div className='min-h-10' />
                </div>

                {/* 5 */}
                <div className={section}>
                    <div className={title}>5. Lekarz</div>

                    <input
                        className={input}
                        value={draft.doctorName}
                        onChange={(e) =>
                            updateField('doctorName', e.target.value)
                        }
                    />
                </div>

                {/* 6 */}
                <div className={section}>
                    <div className={title}>6. Obliczenia</div>

                    <textarea
                        className={input + ' min-h-17.5'}
                        value={extra.calculations}
                        onChange={(e) =>
                            updateExtra('calculations', e.target.value)
                        }
                    />
                </div>

                {/* 7 */}
                <div className={section}>
                    <div className={title}>7. Opakowanie</div>

                    <textarea
                        className={input + ' min-h-12.5'}
                        value={extra.packaging}
                        onChange={(e) =>
                            updateExtra('packaging', e.target.value)
                        }
                    />
                </div>

                {/* 8 */}
                <div className={section}>
                    <div className={title}>8. Odważanie składników</div>

                    <div className='space-y-1 text-[11px]'>
                        {draft.ingredients.map((i, idx) => (
                            <div
                                key={idx}
                                className='flex justify-between border-b py-1'
                            >
                                <span>{i.name}</span>
                                <span>{i.amount.toFixed(1)} g</span>
                                <span>{i.producer}</span>
                                <span>{i.batch}</span>
                                <span>{i.expiryDate}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 9 */}
                <div className={section}>
                    <div className={title}>9. Badania</div>

                    <textarea
                        className={input + ' min-h-15'}
                        value={extra.tests}
                        onChange={(e) => updateExtra('tests', e.target.value)}
                    />
                </div>

                {/* 10 */}
                <div className={section}>
                    <div className={title}>10. Opis wykonania</div>

                    <textarea
                        className={input + ' min-h-22.5'}
                        value={extra.execution}
                        onChange={(e) =>
                            updateExtra('execution', e.target.value)
                        }
                    />
                </div>

                {/* 11 */}
                <div className={section}>
                    <div className={title}>11. Komentarz</div>

                    <textarea
                        className={input + ' min-h-15'}
                        value={extra.comment}
                        onChange={(e) => updateExtra('comment', e.target.value)}
                    />
                </div>

                {/* 12 */}
                <div className={section}>
                    <div className={title}>
                        12. Dawkowanie / trwałość / przechowywanie
                    </div>

                    <div className='grid grid-cols-3 gap-2'>
                        <input
                            className={input}
                            value={extra.dosing}
                            onChange={(e) =>
                                updateExtra('dosing', e.target.value)
                            }
                        />
                        <input
                            className={input}
                            value={extra.duration}
                            onChange={(e) =>
                                updateExtra('duration', e.target.value)
                            }
                        />
                        <input
                            className={input}
                            value={extra.storage}
                            onChange={(e) =>
                                updateExtra('storage', e.target.value)
                            }
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
