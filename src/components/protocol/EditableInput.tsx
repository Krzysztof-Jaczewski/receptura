interface EditableInputProps {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
}

export const EditableInput = ({
    value,
    onChange,
    placeholder,
}: EditableInputProps) => {
    return (
        <input
            value={value}
            placeholder={placeholder}
            onChange={(e) => onChange(e.target.value)}
            className='w-full border rounded-lg px-3 py-2 text-sm'
        />
    );
};
