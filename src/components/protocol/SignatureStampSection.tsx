'use client';

export const SignatureStampSection = () => {
    return (
        <div className='flex w-1/2 ml-auto justify-center border rounded-lg p-1 pt-16'>
            <div className='flex flex-col items-end '>
                <div className='text-gray-400 text-sm tracking-widest'>
                    .....................................................
                </div>

                <div className='flex text-[10px] mt-1 pr-12'>
                    Podpis i Pieczątka osoby sporządzającej lek
                </div>
            </div>
        </div>
    );
};
