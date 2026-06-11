'use client';

import { UseFormSetValue, Control, useWatch } from 'react-hook-form';
import { FlaskConical } from 'lucide-react';

import Switch from '@/components/ui/Switch';
import { ProtocolFormValues } from '@/lib/schemas/protocolSchema';

type Props = {
    control: Control<ProtocolFormValues>;
    setValue: UseFormSetValue<ProtocolFormValues>;
};

const SterilitySwitch = ({ control, setValue }: Props) => {
    const isSterile = useWatch({
        control,
        name: 'isSterile',
    });

    return (
        <div className='flex justify-center'>
            <div className='flex items-center justify-between bg-white border rounded-xl px-5 py-3 shadow-sm w-full max-w-md'>
                <div className='flex items-center gap-2'>
                    <FlaskConical className='text-purple-600 w-5 h-5' />
                    <span className='font-medium text-sm'>Lek jałowy</span>
                </div>

                <Switch
                    value={isSterile}
                    onChange={(val: boolean) => setValue('isSterile', val)}
                />
            </div>
        </div>
    );
};

export default SterilitySwitch;
