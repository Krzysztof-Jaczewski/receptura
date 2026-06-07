type SwitchProps = {
    value: boolean;
    onChange: (val: boolean) => void;
};

const Switch = ({ value, onChange }: SwitchProps) => {
    return (
        <button
            type='button'
            onClick={() => onChange(!value)}
            className={`w-12 h-6 flex items-center rounded-full p-1 transition ${
                value ? 'bg-green-500' : 'bg-gray-300'
            }`}
        >
            <div
                className={`w-4 h-4 bg-white rounded-full shadow transform transition ${
                    value ? 'translate-x-6' : 'translate-x-0'
                }`}
            />
        </button>
    );
};

export default Switch;
