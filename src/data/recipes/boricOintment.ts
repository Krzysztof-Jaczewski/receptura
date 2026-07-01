import { ProtocolFormValues } from '@/lib/schemas/protocolSchema';
import { dosageFormTests } from '@/data/dosageForms';

const calculations = [
    'Obliczanie ilości składników:',
    '100g / 4 = 25g',
    '',
    'Obliczanie ilości składników w 10g 3% Sol. Ac. borici:',
    'Acidi borici: 25g × 3% = 0.75g',
    'Aquae purificatae: 25g - 0.75g = 24.25g',
];

const execution = [
    '1. Do wytarowanej tuby odważam odpowiednią ilość lanoliny, wazeliny białej oraz parafiny ciekłej.',
    '2. Na wytarowanej podkładce pergaminowej odważam odpowiednią ilość kwasu borowego.',
    '3. Do wytarowanej zlewki odważam odpowiednią ilość wody destylowanej.',
    '4. Wodę destylowaną podgrzewam na łaźni wodnej do temperatury 40-50°C i rozpuszczam w niej kwas borowy.',
    '5. Do tuby z podłożem dodaję roztwór kwasu borowego i mieszam przez 2 minuty zaczynając od małych obrotów i stopniowo zwiększając je co 5 sekund do uzyskania jednorodnej maści.',
    '6. Po zakończeniu mieszania wyjmuję mieszadło, zamykam tubę i naklejam uzupełnioną etykietę.',
    '7. Sprzątam stanowisko pracy.',
];

export const boricOintmentRecipe: {
    id: string;
    name: string;
    formData: Partial<ProtocolFormValues>;
} = {
    id: 'boric_ointment_base',
    name: '3% Sol. Ac. borici + Vaselini + Parafini + Lanolini',

    formData: {
        dosageForm: 'ointment',
        totalAmount: 100,
        isSterile: false,

        ingredients: [
            {
                ingredientId: 'sol_ac_borici_3',
                amount: '',
                calculatedAmount: 25,
                producer: 'Fagron',
                batch: '',
                expiryDate: '',
            },
            {
                ingredientId: 'vaselini_albi',
                amount: '',
                calculatedAmount: 25,
                producer: 'Fagron',
                batch: '',
                expiryDate: '',
            },
            {
                ingredientId: 'parafini_liquidi',
                amount: '',
                calculatedAmount: 25,
                producer: 'Fagron',
                batch: '',
                expiryDate: '',
            },
            {
                ingredientId: 'lanolini',
                amount: 'aa ad 100',
                calculatedAmount: 25,
                producer: 'Fagron',
                batch: '',
                expiryDate: '',
            },
        ],

        extra: {
            packaging: 'tube_100',
            shelfLife: '14d',
            storage: 'fridge',
            calculations: calculations.join('\n'),
            execution: execution.join('\n'),
            usage: 'Preparat do stosowania zewnętrznego o działaniu ochronnym.',
            dosage: '1x dziennie',
            comment: '',
            tests: String(dosageFormTests['ointment']),
            executionDate: new Date().toISOString().split('T')[0],
        },
    },
};
