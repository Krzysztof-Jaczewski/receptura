'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';

import {
    protocolSchema,
    ProtocolFormValues,
} from '@/lib/schemas/protocolSchema';
import { useProtocolStore } from '@/store/protocolStore';
import { calculateAdIngredient } from '@/lib/calculations/calculatedAdIngredient';

import SterilitySwitch from '@/components/protocol-form/SterilitySwitch';
import PatientDoctorSection from '@/components/protocol-form/PatientDoctorSection';
import ProtocolDetailsSection from '@/components/protocol-form/ProtocolDetailsSection';
import IngredientsSection from '@/components/protocol-form/IngredientsSection';

import { FileText } from 'lucide-react';
import { protocolDefaultValues } from '@/data/protocolDefaults';
import RecipeTemplateSection from '@/components/protocol-form/RecipeTemplateSection';

export default function Home() {
    const router = useRouter();
    const setFormData = useProtocolStore((s) => s.setFormData);

    const form = useForm<ProtocolFormValues>({
        resolver: zodResolver(protocolSchema),
        defaultValues: protocolDefaultValues,
    });

    const { register, handleSubmit, control, setValue, reset } = form;

    const onSubmit = (data: ProtocolFormValues) => {
        console.log(data.totalAmount);
        const calculatedIngredients = calculateAdIngredient(
            data.totalAmount,
            data.ingredients,
        ) as ProtocolFormValues['ingredients'];
        console.log(calculatedIngredients);
        setFormData({
            ...data,
            ingredients: calculatedIngredients,
        });

        router.push('/protocol');
    };

    return (
        <div className='bg-gray-100 min-h-screen py-10'>
            <div className='max-w-5xl mx-auto space-y-6'>
                {/* HEADER */}
                <div className='flex items-center gap-2'>
                    <FileText className='text-blue-600 w-5 h-5' />
                    <h1 className='text-2xl font-bold'>
                        Receptura – Formularz
                    </h1>
                </div>

                {/* FORM */}
                <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
                    {/* SZABLONY RECEPTY */}
                    <RecipeTemplateSection reset={reset} />

                    {/* STERYLNOŚĆ */}
                    <SterilitySwitch control={control} setValue={setValue} />

                    {/* PACJENT + LEKARZ */}
                    <PatientDoctorSection register={register} />

                    {/* SZCZEGÓŁY RECEPTY */}
                    <ProtocolDetailsSection register={register} />

                    {/* SKŁADNIKI */}
                    <IngredientsSection control={control} register={register} />

                    {/* SUBMIT */}
                    <button
                        type='submit'
                        className='w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold transition'
                    >
                        Generuj protokół
                    </button>
                </form>
            </div>
        </div>
    );
}

