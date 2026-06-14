'use client';

import { UseFormRegister } from 'react-hook-form';
import { ClipboardList } from 'lucide-react';
import { ProtocolFormValues } from '@/lib/schemas/protocolSchema';
import { dosageForms } from '@/data/dosageForms';
import { durationOptions, storageOptions } from '@/data/protocolDetailsOptions';
import { containerOptions } from '@/data/containers';

type Props = {
    register: UseFormRegister<ProtocolFormValues>;
};

const section =
    'bg-white border rounded-xl p-4 shadow-sm space-y-3 text-[12px]';

const input =
    'border rounded-lg px-3 py-2 text-sm w-full focus:ring-2 focus:ring-blue-500 focus:outline-none';

const label = 'text-xs font-medium text-gray-600';

const ProtocolDetailsSection = ({ register }: Props) => {
    return (
        <div className={section}>
            <div className='flex items-center gap-2 font-semibold'>
                <ClipboardList className='text-orange-500 w-5 h-5' />
                Szczegóły recepty
            </div>

            <div className='grid grid-cols-3 gap-3'>
                {/* Numer recepty */}
                <div>
                    <p className={label}>Numer recepty</p>
                    <input
                        {...register('prescriptionNumber')}
                        className={input}
                    />
                </div>

                {/* Postać leku */}
                <div>
                    <p className={label}>Postać leku</p>
                    <select {...register('dosageForm')} className={input}>
                        {dosageForms.map((form) => (
                            <option key={form.value} value={form.value}>
                                {form.label}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Łączna ilość */}
                <div>
                    <p className={label}>Łączna ilość</p>
                    <input
                        type='number'
                        {...register('totalAmount', { valueAsNumber: true })}
                        className={input}
                    />
                </div>

                {/* DAWKOWANIE */}
                <div>
                    <p className={label}>Dawkowanie</p>
                    <input
                        type='text'
                        placeholder='np. 2x dziennie'
                        {...register('extra.dosing')}
                        className={input}
                    />
                </div>

                {/* PRZECHOWYWANIE */}
                <div>
                    <p className={label}>Przechowywanie</p>
                    <select {...register('extra.storage')} className={input}>
                        {storageOptions.map((opt) => (
                            <option key={opt.value} value={opt.value}>
                                {opt.label}
                            </option>
                        ))}
                    </select>
                </div>

                {/* TRWAŁOŚĆ */}
                <div>
                    <p className={label}>Trwałość</p>
                    <select {...register('extra.duration')} className={input}>
                        {durationOptions.map((opt) => (
                            <option key={opt.value} value={opt.value}>
                                {opt.label}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <p className={label}>Opakowanie</p>
                    <select {...register('extra.packaging')} className={input}>
                        {containerOptions.map((container) => (
                            <option
                                key={container.value}
                                value={container.value}
                            >
                                {container.label}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    );
};

export default ProtocolDetailsSection;
