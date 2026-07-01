import { ProtocolFormValues } from '@/lib/schemas/protocolSchema';
import { dosageFormTests } from '@/data/dosageForms';

const calculations = ['Obliczanie ilości substancji:', '100g : 3 = 33,333g'];

const execution = [
    '1. Do wytarowanej tuby odważam odpowiednią ilość lanoliny, wazeliny oraz parafiny ciekłej.',
    '2. Mieszam przez 2 minuty zaczynając od małych obrotów i stopniowo zwiększając je co 5 sekund do uzyskania jednorodnej maści.',
    '3. Po zakończeniu mieszania wyjmuję mieszadło, zamykam tubę i naklejam uzupełnioną etykietę.',
    '4. Sprzątam stanowisko pracy.',
];

export const lanolinVaselineParaffinRecipe: {
    id: string;
    name: string;
    formData: Partial<ProtocolFormValues>;
} = {
    id: 'lanolin_vaselin_paraffin',
    name: 'Lanolini + Vaselini + Parafini aa ad 100',

    formData: {
        dosageForm: 'ointment',
        totalAmount: 100,
        isSterile: false,

        ingredients: [
            {
                ingredientId: 'lanolini',
                amount: '',
                calculatedAmount: 33.333,
                producer: 'Fagron',
                batch: '',
                expiryDate: '',
            },
            {
                ingredientId: 'vaselini_albi',
                amount: '',
                calculatedAmount: 33.333,
                producer: 'Fagron',
                batch: '',
                expiryDate: '',
            },
            {
                ingredientId: 'parafini_liquidi',
                amount: 'aa ad 100',
                calculatedAmount: 33.334,
                producer: 'Fagron',
                batch: '',
                expiryDate: '',
            },
        ],

        extra: {
            packaging: 'tube_100',
            shelfLife: '30d',
            storage: 'roomTemperature',
            calculations: calculations.join('\n'),
            execution: execution.join('\n'),
            usage: 'Podłoże maściowe do stosowania zewnętrznego.',
            dosage: '',
            comment: '',
            tests: String(dosageFormTests['ointment']),
            executionDate: new Date().toISOString().split('T')[0],
        },
    },
};
