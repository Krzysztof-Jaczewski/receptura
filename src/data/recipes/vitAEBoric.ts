import { ProtocolFormValues } from '@/lib/schemas/protocolSchema';
import { dosageFormTests } from '@/data/dosageForms';

const calculations = [
    'Obliczanie ilości Eucerini:',
    '100g  - 5g - 5g - 30g = 60g',
    '',
    'Obliczanie ilości składników w 10g 3% Sol. Ac. borici:',
    'Acidi borici: 30g × 3% = 0.9g',
    'Aquae purificatae: 30g - 0.9g = 29.1g',
];

const execution = [
    '1. Do wytarowanej tuby odważam odpowiednią ilość euceryny.',
    '2. Na wytarowanej podkładce pergaminowej odważam odpowiednią ilość kwasu borowego.',
    '3. Do wytarowanej zlewki odważam odpowiednią ilość wody destylowanej.',
    '4. Wodę destylowaną podgrzewam na łaźni wodnej i rozpuszczam w niej kwas borowy.',
    '5. Do tuby odważam odpowiednią ilość witaminy E.',
    '6. Mieszam przez 2 minuty zaczynając od małych obrotów i stopniowo co 5 sekund zwiększając obroty.',
    '7. Do tuby dodaję odpowiednią ilość witaminy A i mieszam przez 1 minutę na małych obrotach.',
    '8. Po zakończeniu mieszania wyjmuję mieszadło, zamykam tubę, naklejam uzupełnioną etykietę i naklejkę przechowywać w lodówce.',
    '9. Sprzątam stanowisko pracy.',
];

export const vitAEBoricRecipe: {
    id: string;
    name: string;
    formData: Partial<ProtocolFormValues>;
} = {
    id: 'vit_a_e_boric',
    name: 'Vit. A + Vit. E + 3% Sol. Ac. borici + Eucerini',

    formData: {
        dosageForm: 'ointment',
        totalAmount: 100,
        isSterile: false,

        ingredients: [
            {
                ingredientId: 'vit_a_liq',
                amount: '5',
                batch: '',
                expiryDate: '',
            },
            {
                ingredientId: 'vit_e_liq',
                amount: '5',
                batch: '',
                expiryDate: '',
            },
            {
                ingredientId: 'sol_ac_borici_3',
                amount: '30',
                batch: '',
                expiryDate: '',
            },
            {
                ingredientId: 'eucerini',
                amount: 'ad 100',
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
            usage: 'Preparat o działaniu regenerującym, odżywczym, łagodzącym i ochronnym.',
            dosage: '1x dziennie rano',
            comment: '',
            tests: String(dosageFormTests['ointment']),
        },
    },
};
