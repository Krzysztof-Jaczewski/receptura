'use client';

import { Control, UseFormRegister, useFieldArray } from 'react-hook-form';
import { Plus } from 'lucide-react';

import { ProtocolFormValues } from '@/lib/schemas/protocolSchema';

type Props = {
    control: Control<ProtocolFormValues>;
    register: UseFormRegister<ProtocolFormValues>;
};

const section =
    'bg-white border rounded-xl p-4 shadow-sm space-y-3 text-[12px]';

const input =
    'border rounded-lg px-3 py-2 text-sm w-full focus:ring-2 focus:ring-blue-500 focus:outline-none';

const IngredientsSection = ({ control, register }: Props) => {
    const { fields, append } = useFieldArray({
        control,
        name: 'ingredients',
    });

    return (
        <div className={section}>
            <div className='flex items-center justify-between'>
                <div className='font-semibold'>Składniki</div>

                <button
                    type='button'
                    onClick={() =>
                        append({
                            name: '',
                            amount: '',
                            producer: '',
                            batch: '',
                            expiryDate: '',
                        })
                    }
                    className='flex items-center gap-1 bg-blue-600 text-white px-3 py-2 rounded-lg text-sm'
                >
                    <Plus size={16} />
                    Dodaj
                </button>
            </div>

            {/* HEADER */}
            <div className='grid grid-cols-5 gap-2 text-xs text-gray-500 font-semibold'>
                <div>Substancja</div>
                <div>Ilość</div>
                <div>Producent</div>
                <div>Seria</div>
                <div>Data</div>
            </div>

            {/* ROWS */}
            {fields.map((field, index) => (
                <div key={field.id} className='grid grid-cols-5 gap-2'>
                    <input
                        {...register(`ingredients.${index}.name`)}
                        className={input}
                    />

                    <input
                        {...register(`ingredients.${index}.amount`)}
                        className={input}
                    />

                    <input
                        {...register(`ingredients.${index}.producer`)}
                        className={input}
                    />

                    <input
                        {...register(`ingredients.${index}.batch`)}
                        className={input}
                    />

                    <input
                        type='date'
                        {...register(`ingredients.${index}.expiryDate`)}
                        className={input}
                    />
                </div>
            ))}
        </div>
    );
};

export default IngredientsSection;
