'use client';

import { UseFormRegister } from 'react-hook-form';
import { User, Stethoscope } from 'lucide-react';

import { ProtocolFormValues } from '@/lib/schemas/protocolSchema';

type Props = {
    register: UseFormRegister<ProtocolFormValues>;
};

const section =
    'bg-white border rounded-xl p-4 shadow-sm space-y-3 text-[12px]';

const input =
    'border rounded-lg px-3 py-2 text-sm w-full focus:ring-2 focus:ring-blue-500 focus:outline-none';

const label = 'text-xs font-medium text-gray-600';

const PatientDoctorSection = ({ register }: Props) => {
    return (
        <div className='grid grid-cols-2 gap-4'>
            {/* PACJENT */}
            <div className={section}>
                <div className='flex items-center gap-2 font-semibold'>
                    <User className='text-green-600 w-5 h-5' />
                    Dane pacjenta
                </div>

                <p className={label}>Imię i nazwisko pacjenta</p>
                <input {...register('patientName')} className={input} />
            </div>

            {/* LEKARZ */}
            <div className={section}>
                <div className='flex items-center gap-2 font-semibold'>
                    <Stethoscope className='text-blue-600 w-5 h-5' />
                    Dane lekarza
                </div>

                <p className={label}>Imię i nazwisko lekarza</p>
                <input {...register('doctorName')} className={input} />
            </div>
        </div>
    );
};

export default PatientDoctorSection;
