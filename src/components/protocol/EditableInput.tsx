interface EditableInputProps {
    value: string;
    onChange: (value: string) => void;
    label?: string;
    placeholder?: string;
}

export const EditableInput = ({
    value,
    onChange,
    label,
    placeholder,
}: EditableInputProps) => {
    return (
        <div className='space-y-1'>
            {label && (
                <label className='text-xs font-medium text-gray-600'>
                    {label}
                </label>
            )}

            <input
                value={value}
                placeholder={placeholder}
                onChange={(e) => onChange(e.target.value)}
                className='w-full border rounded-lg px-3 py-2 text-xs'
            />
        </div>
    );
};
