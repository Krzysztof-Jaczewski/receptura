'use client';

import {
    Control,
    UseFormRegister,
    UseFormSetValue,
    UseFormWatch,
    useFieldArray,
} from 'react-hook-form';
import { Plus, FlaskConical, Trash2 } from 'lucide-react';

import { ProtocolFormValues } from '@/lib/schemas/protocolSchema';
import { ingredientOptions } from '@/data/ingredients';

type Props = {
    control: Control<ProtocolFormValues>;
    register: UseFormRegister<ProtocolFormValues>;
    watch: UseFormWatch<ProtocolFormValues>;
    setValue: UseFormSetValue<ProtocolFormValues>;
};

const section =
    'bg-white border rounded-xl p-4 shadow-sm space-y-3 text-[12px]';

const input =
    'border rounded-lg px-3 py-2 text-sm w-full focus:ring-2 focus:ring-blue-500 focus:outline-none';

const IngredientsSection = ({ control, register, watch, setValue }: Props) => {
    const { fields, append, remove } = useFieldArray({
        control,
        name: 'ingredients',
    });

    return (
        <div className={section}>
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-2 font-semibold'>
                    <FlaskConical className='w-5 h-5 text-blue-600' />
                    Składniki
                </div>

                <button
                    type='button'
                    onClick={() =>
                        append({
                            ingredientId: '',
                            amount: '',
                            producer: '',
                            batch: '',
                            expiryDate: '',
                        })
                    }
                    className='flex items-center gap-1 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg text-sm transition'
                >
                    <Plus size={16} />
                    Dodaj
                </button>
            </div>

            {/* HEADER */}
            <div className='grid grid-cols-[2fr_1fr_1.5fr_1fr_1.5fr_auto] gap-2 items-center'>
                <div>Substancja</div>
                <div>Ilość</div>
                <div>Producent</div>
                <div>Seria</div>
                <div>Data ważności</div>
                <div className='w-8 h-8'></div>
            </div>

            {/* ROWS */}
            {fields.map((field, index) => (
                <div
                    key={field.id}
                    className='grid grid-cols-[2fr_1fr_1.5fr_1fr_1.5fr_auto] gap-2 items-center'
                >
                    <select
                        {...register(`ingredients.${index}.ingredientId`)}
                        className={input}
                        value={watch(`ingredients.${index}.ingredientId`)}
                        onChange={(e) => {
                            const ingredientId = e.target.value;

                            setValue(
                                `ingredients.${index}.ingredientId`,
                                ingredientId,
                            );

                            const ingredient = ingredientOptions.find(
                                (i) => i.id === ingredientId,
                            );

                            setValue(
                                `ingredients.${index}.producer`,
                                ingredient?.producer ?? '',
                            );
                        }}
                    >
                        <option value='' disabled>
                            Wybierz składnik
                        </option>

                        {ingredientOptions.map(({ id, name }) => (
                            <option key={id} value={id}>
                                {name}
                            </option>
                        ))}
                    </select>

                    <input
                        {...register(`ingredients.${index}.amount`)}
                        className={input}
                        placeholder='g'
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
                        {...register(`ingredients.${index}.expiryDate`)}
                        className={input}
                    />
                    <button
                        type='button'
                        disabled={fields.length === 1}
                        onClick={() => remove(index)}
                        className='w-8 h-8 flex items-center justify-center rounded-md bg-red-400 text-white hover:bg-red-600 transition disabled:opacity-40 disabled:cursor-not-allowed'
                        title='Usuń składnik'
                    >
                        <Trash2 size={14} />
                    </button>
                </div>
            ))}
        </div>
    );
};

export default IngredientsSection;
