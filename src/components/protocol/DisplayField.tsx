interface DisplayFieldProps {
    value?: React.ReactNode;
    label?: string;
    placeholder?: string;
}

export const DisplayField = ({
    value,
    label,
    placeholder = '—',
}: DisplayFieldProps) => {
    return (
        <div
            contentEditable
            suppressContentEditableWarning
            className='space-y-1'
        >
            {label && (
                <label className='text-xs font-medium text-gray-600'>
                    {label}
                </label>
            )}

            <div className='min-h-10 w-full rounded-lg border bg-gray-50 px-3 py-2 text-xs flex items-center'>
                {value || <span>{placeholder}</span>}
            </div>
        </div>
    );
};
