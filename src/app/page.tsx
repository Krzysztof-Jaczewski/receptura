'use client';

import { useForm, useFieldArray, useWatch } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';

import {
    protocolSchema,
    ProtocolFormValues,
} from '@/lib/schemas/schemaProtocol';

import { useProtocolStore } from '@/store/protocolStore';

import {
    User,
    Stethoscope,
    ClipboardList,
    FlaskConical,
    Plus,
    FileText,
} from 'lucide-react';

import Switch from '@/components/ui/Switch';

export default function Home() {
    const router = useRouter();
    const setFormData = useProtocolStore((s) => s.setFormData);

    const form = useForm<ProtocolFormValues>({
        resolver: zodResolver(protocolSchema),
        defaultValues: {
            patientName: '',
            doctorName: '',
            prescriptionNumber: '',
            dosageForm: 'maść',
            totalAmount: 0,
            isSterile: false,
            ingredients: [
                {
                    name: '',
                    amount: 0,
                    producer: '',
                    batch: '',
                    expiryDate: '',
                },
            ],
            extra: {
                calculations: '',
                packaging: '',
                tests: '',
                execution: '',
                comment: '',
                dosing: '',
                duration: '',
                storage: '',
            },
        },
    });

    const { register, handleSubmit, control, setValue } = form;

    const { fields, append } = useFieldArray({
        control,
        name: 'ingredients',
    });

    const isSterile = useWatch({
        control,
        name: 'isSterile',
    });

    const onSubmit = (data: ProtocolFormValues) => {
        setFormData(data);
        router.push('/protocol');
    };

    const section =
        'bg-white border rounded-xl p-4 shadow-sm space-y-3 text-[12px]';

    const input =
        'border rounded-lg px-3 py-2 text-sm w-full focus:ring-2 focus:ring-blue-500 focus:outline-none';

    const label = 'text-xs font-medium text-gray-600';

    const iconBox =
        'p-2 rounded-lg bg-white border shadow-sm flex items-center justify-center';

    return (
        <div className='bg-gray-100 min-h-screen py-10'>
            <div className='max-w-5xl mx-auto space-y-6'>
                {/* HEADER */}
                <div className='flex items-center gap-2'>
                    <div className={iconBox}>
                        <FileText className='text-blue-600 w-5 h-5' />
                    </div>

                    <h1 className='text-2xl font-bold'>
                        Receptura – Formularz
                    </h1>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
                    {/* 🧪 STERYLNOŚĆ */}
                    <div className='flex justify-center'>
                        <div className='flex items-center justify-between bg-white border rounded-xl px-5 py-3 shadow-sm w-full max-w-md'>
                            <div className='flex items-center gap-2'>
                                <div className='p-2 rounded-lg bg-purple-50 border border-purple-100 shadow-sm'>
                                    <FlaskConical className='text-purple-600 w-5 h-5' />
                                </div>

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

                    {/* 👤 + 👨‍⚕️ */}
                    <div className='grid grid-cols-2 gap-4'>
                        {/* PACJENT */}
                        <div className={section}>
                            <div className='flex items-center gap-2 font-semibold'>
                                <div className='p-2 rounded-lg bg-green-50 border border-green-100 shadow-sm'>
                                    <User className='text-green-600 w-5 h-5' />
                                </div>
                                Dane pacjenta
                            </div>

                            <p className={label}>Imię i nazwisko pacjenta</p>
                            <input
                                {...register('patientName')}
                                className={input}
                            />
                        </div>

                        {/* LEKARZ */}
                        <div className={section}>
                            <div className='flex items-center gap-2 font-semibold'>
                                <div className='p-2 rounded-lg bg-blue-50 border border-blue-100 shadow-sm'>
                                    <Stethoscope className='text-blue-600 w-5 h-5' />
                                </div>
                                Dane lekarza
                            </div>

                            <p className={label}>Imię i nazwisko lekarza</p>
                            <input
                                {...register('doctorName')}
                                className={input}
                            />
                        </div>
                    </div>

                    {/* 📄 SZCZEGÓŁY (1 LINIA) */}
                    <div className={section}>
                        <div className='flex items-center gap-2 font-semibold'>
                            <div className='p-2 rounded-lg bg-orange-50 border border-orange-100 shadow-sm'>
                                <ClipboardList className='text-orange-500 w-5 h-5' />
                            </div>
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
                                <select
                                    {...register('dosageForm')}
                                    className={input}
                                >
                                    <option value='maść'>Maść</option>
                                    <option value='płyn'>Płyn</option>
                                    <option value='krople'>Krople</option>
                                </select>
                            </div>

                            <div>
                                <p className={label}>Łączna ilość</p>
                                <input
                                    type='number'
                                    {...register('totalAmount', {
                                        valueAsNumber: true,
                                    })}
                                    className={input}
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

                        <div className='grid grid-cols-5 gap-2 text-xs text-gray-500 font-semibold'>
                            <div>Substancja</div>
                            <div>Ilość</div>
                            <div>Producent</div>
                            <div>Seria</div>
                            <div>Data</div>
                        </div>

                        {fields.map((f, i) => (
                            <div key={f.id} className='grid grid-cols-5 gap-2'>
                                <input
                                    {...register(`ingredients.${i}.name`)}
                                    className={input}
                                />

                                <input
                                    type='number'
                                    {...register(`ingredients.${i}.amount`, {
                                        valueAsNumber: true,
                                    })}
                                    className={input}
                                />

                                <input
                                    {...register(`ingredients.${i}.producer`)}
                                    className={input}
                                />
                                <input
                                    {...register(`ingredients.${i}.batch`)}
                                    className={input}
                                />
                                <input
                                    type='date'
                                    {...register(`ingredients.${i}.expiryDate`)}
                                    className={input}
                                />
                            </div>
                        ))}
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

