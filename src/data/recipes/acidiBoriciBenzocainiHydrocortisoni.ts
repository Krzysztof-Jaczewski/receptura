import { dosageFormTests } from '@/data/dosageForms';
import { ProtocolFormValues } from '@/lib/schemas/protocolSchema';

const calculations = [
    'Obliczanie ilości wazeliny białej:',
    '40g - 0.6g - 0.6g - 0.6g = 38.2g',
];

const execution = [
    '1. Do wytarowanej tuby odważam odpowiednią ilość wazeliny białej.',
    '2. Na wytarowanej podkładce pergaminowej odważam odpowiednią ilość kwasu borowego i rozcieram go na drobny proszek.',
    '3. Na wytarowanej podkładce pergaminowej odważam odpowiednią ilość zmikronizowanej benzokainy (anaesthesinum).',
    '4. Na wytarowanej podkładce pergaminowej odważam odpowiednią ilość hydrocortisonu.',
    '5. Odważone substancje dodaję do tuby z wazeliną białą.',
    '6. Mieszam przez 2 minuty zaczynając od małych obrotów i stopniowo co 5 sekund zwiększając obroty.',
    '7. Po zakończeniu mieszania wyjmuję mieszadło, zamykam tubę, naklejam uzupełnioną etykietę.',
    '8. Sprzątam stanowisko pracy.',
];

export const acidiBoriciBenzocainiHydrocortisoniRecipe: {
    id: string;
    name: string;
    formData: Partial<ProtocolFormValues>;
} = {
    id: 'acidi_borici_benzocaini_hydrocortisoni',
    name: 'Acidi borici + Benzocaini + Hydrocortisoni + Vaselini albi',

    formData: {
        dosageForm: 'ointment',
        totalAmount: 40,
        isSterile: false,

        ingredients: [
            {
                ingredientId: 'acidi_borici',
                amount: '0.6',
                batch: '',
                expiryDate: '',
            },
            {
                ingredientId: 'anaesthesini',
                amount: '0.6',
                batch: '',
                expiryDate: '',
            },
            {
                ingredientId: 'hydrocortisoni',
                amount: '0.6',
                batch: '',
                expiryDate: '',
            },
            {
                ingredientId: 'vaselini_albi',
                amount: 'ad 40',
                batch: '',
                expiryDate: '',
            },
        ],

        extra: {
            packaging: 'tube_50',
            shelfLife: '30d',
            storage: 'roomTemperature',
            calculations: calculations.join('\n'),
            execution: execution.join('\n'),
            usage: 'Preparat o działaniu przeciwzapalnym, przeciwbólowym i antyseptycznym do stosowania na skórę.',
            dosage: '2x dziennie',
            comment: '',
            tests: String(dosageFormTests['ointment']),
        },
    },
};
