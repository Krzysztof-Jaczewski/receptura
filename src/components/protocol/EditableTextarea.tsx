interface EditableTextareaProps {
    value: string;
    onChange: (value: string) => void;
    rows?: number;
}

export const EditableTextarea = ({
    value,
    onChange,
    rows = 4,
}: EditableTextareaProps) => {
    return (
        <textarea
            rows={rows}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className='w-full border rounded-lg px-3 py-2 text-sm resize-none'
        />
    );
};
