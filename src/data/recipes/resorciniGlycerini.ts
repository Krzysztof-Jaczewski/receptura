import { ProtocolFormValues } from '@/lib/schemas/protocolSchema';
import { dosageFormTests } from '@/data/dosageForms';

const calculations = ['Obliczanie ilości Glyceriny:', '50g - 2g = 48g'];

const execution = [
    '1. Do wytarowanej zlewki odważam odpowiednią ilość Glyceryny.',
    '2. Na wytarowanej podkładce pergaminowej odważam odpowiednią ilość Resorcyny.',
    '3. Dodaję odpowiednią ilość Resorcyny do zlewki.',
    '4. Mieszam do całkowitego rozpuszczenia Resorcyny i przelewam do butelki.',
    '5. Po zakończeniu mieszania zamykam butelkę, naklejam uzupełnioną etykietę.',
    '6. Sprzątam stanowisko pracy.',
];

export const resorciniGlyceriniRecipe: {
    id: string;
    name: string;
    formData: Partial<ProtocolFormValues>;
} = {
    id: 'resorcini_glycerini',
    name: 'Resorcini + Glycerini',

    formData: {
        dosageForm: 'solution',
        totalAmount: 50,
        isSterile: false,

        ingredients: [
            {
                ingredientId: 'resorcini',
                amount: '2',
                producer: '',
                batch: '',
                expiryDate: '',
            },
            {
                ingredientId: 'glycerini',
                amount: 'ad 50',
                producer: '',
                batch: '',
                expiryDate: '',
            },
        ],

        extra: {
            packaging: 'bottle_100',
            shelfLife: '30d',
            storage: 'roomTemperature',
            calculations: calculations.join('\n'),
            execution: execution.join('\n'),
            usage: 'Preparat o działaniu przeciwłojotokowym, odkażającym i głęboko nawilżającym.',
            dosage: '2x2g',
            comment: '',
            tests: String(dosageFormTests['solution']),
        },
    },
};
