'use client';

import { UseFormRegister } from 'react-hook-form';
import { ClipboardList } from 'lucide-react';

import { ProtocolFormValues } from '@/lib/schemas/protocolSchema';

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
                <div>
                    <p className={label}>Numer recepty</p>
                    <input
                        {...register('prescriptionNumber')}
                        className={input}
                    />
                </div>

                <div>
                    <p className={label}>Postać leku</p>
                    <select {...register('dosageForm')} className={input}>
                        <option value='maść'>Maść</option>
                        <option value='płyn'>Płyn</option>
                        <option value='krople'>Krople</option>
                    </select>
                </div>

                <div>
                    <p className={label}>Łączna ilość</p>
                    <input
                        type='number'
                        {...register('totalAmount', { valueAsNumber: true })}
                        className={input}
                    />
                </div>
            </div>
        </div>
    );
};

export default ProtocolDetailsSection;
