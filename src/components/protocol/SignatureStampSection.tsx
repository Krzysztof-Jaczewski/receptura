'use client';

interface SignatureStampSectionProps {
    label?: string;
}

export const SignatureStampSection = ({
    label = '',
}: SignatureStampSectionProps) => {
    return (
        <div className='flex w-1/2 ml-auto justify-center border rounded-lg p-1 pt-12'>
            <div className='flex flex-col items-center'>
                <div className='text-gray-400 text-sm tracking-widest'>
                    .....................................................
                </div>

                <div className='flex text-[10px] mt-1'>{label}</div>
            </div>
        </div>
    );
};
