'use client';

import { useForm, useFieldArray, useWatch } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';

import {
    protocolSchema,
    ProtocolFormValues,
} from '@/lib/schemas/protocolSchema';

import { useProtocolStore } from '@/store/protocolStore';

import {
    FlaskConical,
    User,
    FileText,
    Plus,
    Trash2,
    Stethoscope,
    ClipboardList,
} from 'lucide-react';
import Switch from '@/components/ui/Switch';

export default function Home() {
    const router = useRouter();
    const setFormData = useProtocolStore((state) => state.setFormData);

    const form = useForm<ProtocolFormValues>({
        resolver: zodResolver(protocolSchema),
        defaultValues: {
            patientName: '',
            doctorName: '',
            prescriptionNumber: '',
            dosageForm: 'maść',
            totalAmount: 0,
            isSterile: false,
            ingredients: [],
        },
    });

    const { register, handleSubmit, control, setValue } = form;

    const { fields, append, remove } = useFieldArray({
        control,
        name: 'ingredients',
    });

    const onSubmit = (data: ProtocolFormValues) => {
        setFormData(data);
        router.push('/protocol');
    };

    const isSterile = useWatch({
        control,
        name: 'isSterile',
    });

    const inputClass =
        'border rounded-lg px-3 py-2 text-sm w-full focus:ring-2 focus:ring-blue-500 focus:outline-none';

    const labelClass = 'text-xs font-medium text-gray-600';

    const section = 'bg-white border rounded-xl p-4 space-y-3 shadow-sm';

    return (
        <div className='min-h-screen bg-gray-50 py-10 px-4'>
            <div className='max-w-5xl mx-auto space-y-6'>
                {/* HEADER */}
                <div className='flex items-center gap-2'>
                    <FileText className='text-blue-600' />
                    <h1 className='text-2xl font-bold'>
                        Receptura – Protokół leku
                    </h1>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
                    {/* 🧪 JAŁOWOŚĆ */}
                    <div className='flex justify-center'>
                        <div className='bg-white border rounded-xl px-5 py-4 flex items-center justify-between w-full max-w-md shadow-sm'>
                            <div className='flex items-center gap-2'>
                                <FlaskConical className='text-purple-600' />
                                <span className='font-medium text-sm'>
                                    Lek jałowy
                                </span>
                            </div>

                            <Switch
                                value={isSterile}
                                onChange={(val) => setValue('isSterile', val)}
                            />
                        </div>
                    </div>

                    {/* 🧑 PACJENT */}
                    <div className={section}>
                        <div className='flex items-center gap-2 font-semibold'>
                            <User className='text-green-600' />
                            Dane pacjenta
                        </div>

                        <div>
                            <p className={labelClass}>
                                Imię i nazwisko pacjenta
                            </p>
                            <input
                                {...register('patientName')}
                                className={inputClass}
                            />
                        </div>
                    </div>

                    {/* 👨‍⚕️ LEKARZ */}
                    <div className={section}>
                        <div className='flex items-center gap-2 font-semibold'>
                            <Stethoscope className='text-blue-600' />
                            Dane lekarza
                        </div>

                        <div>
                            <p className={labelClass}>
                                Imię i nazwisko lekarza
                            </p>
                            <input
                                {...register('doctorName')}
                                className={inputClass}
                            />
                        </div>
                    </div>

                    {/* 📄 SZCZEGÓŁY RECEPTY */}
                    <div className={section}>
                        <div className='flex items-center gap-2 font-semibold'>
                            <ClipboardList className='text-orange-500' />
                            Szczegóły recepty
                        </div>

                        <div className='grid grid-cols-3 gap-3'>
                            <div>
                                <p className={labelClass}>Numer recepty</p>
                                <input
                                    {...register('prescriptionNumber')}
                                    className={inputClass}
                                />
                            </div>

                            <div>
                                <p className={labelClass}>Postać leku</p>
                                <select
                                    {...register('dosageForm')}
                                    className={inputClass}
                                >
                                    <option value='maść'>Maść</option>
                                    <option value='płyn'>Płyn</option>
                                    <option value='krople'>Krople</option>
                                </select>
                            </div>

                            <div>
                                <p className={labelClass}>Łączna ilość</p>
                                <input
                                    type='number'
                                    {...register('totalAmount', {
                                        valueAsNumber: true,
                                    })}
                                    className={inputClass}
                                />
                            </div>
                        </div>
                    </div>

                    {/* 🧾 SKŁADNIKI */}
                    <div className={section}>
                        <div className='flex items-center justify-between'>
                            <div className='font-semibold'>Składniki</div>

                            <button
                                type='button'
                                onClick={() =>
                                    append({
                                        name: '',
                                        amount: 0,
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

                        <div className='grid grid-cols-12 gap-2 text-xs text-gray-500 font-semibold'>
                            <div className='col-span-4'>Substancja</div>
                            <div className='col-span-2'>Ilość</div>
                            <div className='col-span-2'>Producent</div>
                            <div className='col-span-2'>Seria</div>
                            <div className='col-span-2'>Data</div>
                        </div>

                        <div className='space-y-2'>
                            {fields.map((field, index) => (
                                <div
                                    key={field.id}
                                    className='grid grid-cols-12 gap-2 items-center bg-gray-50 p-2 rounded-lg'
                                >
                                    <input
                                        {...register(
                                            `ingredients.${index}.name`,
                                        )}
                                        className={inputClass + ' col-span-4'}
                                    />

                                    <input
                                        type='number'
                                        {...register(
                                            `ingredients.${index}.amount`,
                                            {
                                                valueAsNumber: true,
                                            },
                                        )}
                                        className={inputClass + ' col-span-2'}
                                    />

                                    <input
                                        {...register(
                                            `ingredients.${index}.producer`,
                                        )}
                                        className={inputClass + ' col-span-2'}
                                    />

                                    <input
                                        {...register(
                                            `ingredients.${index}.batch`,
                                        )}
                                        className={inputClass + ' col-span-2'}
                                    />

                                    <div className='col-span-2 flex gap-2'>
                                        <input
                                            type='date'
                                            {...register(
                                                `ingredients.${index}.expiryDate`,
                                            )}
                                            className={inputClass}
                                        />

                                        <button
                                            type='button'
                                            onClick={() => remove(index)}
                                            className='text-red-500'
                                        >
                                            <Trash2 size={16} />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* SUBMIT */}
                    <button
                        type='submit'
                        className='w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold'
                    >
                        Generuj protokół
                    </button>
                </form>
            </div>
        </div>
    );
}

