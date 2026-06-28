import { ReactNode } from 'react';

interface ProtocolSectionProps {
    title: string;
    children: ReactNode;
}

export const ProtocolSection = ({ title, children }: ProtocolSectionProps) => {
    return (
        <section className='border rounded-lg p-2 bg-white shadow-sm space-y-2'>
            <h2 className='text-xs font-semibold uppercase tracking-wide text-gray-600'>
                {title}
            </h2>

            {children}
        </section>
    );
};
