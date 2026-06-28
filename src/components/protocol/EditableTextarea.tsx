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
            className='w-full border h-auto rounded-lg px-3 py-1 text-xs  resize-y'
        />
    );
};
