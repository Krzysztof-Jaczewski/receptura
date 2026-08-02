import { ProtocolFormValues } from '@/lib/schemas/protocolSchema';
import { dosageFormTests } from '@/data/dosageForms';

const calculations = [
    'Obliczanie ilości Eucerini:',
    '100g - 0.25g - 5g - 5g - 10g = 79.75g',
    '',
    'Obliczanie ilości składników w 10g 3% Sol. Ac. borici:',
    'Acidi borici: 10g × 3% = 0.3g',
    'Aquae purificatae: 10g - 0.3g = 9.7g',
];

const execution = [
    '1. Do wytarowanej tuby odważam odpowiednią ilość euceryny.',
    '2. Do tuby odważam odpowiednią ilość Prednisolonu.',
    '3. Na wytarowanej podkładce pergaminowej odważam odpowiednią ilość kwasu borowego.',
    '4. Do wytarowanej zlewki odważam odpowiednią ilość wody destylowanej.',
    '5. Wodę destylowaną podgrzewam na łaźni wodnej i rozpuszczam w niej kwas borowy.',
    '6. Do tuby odważam odpowiednią ilość witaminy E.',
    '7. Mieszam przez 2 minuty zaczynając od małych obrotów i stopniowo co 5 sekund zwiększając obroty.',
    '8. Do tuby dodaję odpowiednią ilość witaminy A i mieszam przez 1 minutę na małych obrotach.',
    '9. Po zakończeniu mieszania wyjmuję mieszadło, zamykam tubę, naklejam uzupełnioną etykietę i naklejkę przechowywać w lodówce.',
    '10. Sprzątam stanowisko pracy.',
];

export const encortoloniVitAEBoricRecipe: {
    id: string;
    name: string;
    formData: Partial<ProtocolFormValues>;
} = {
    id: 'encortoloni_vit_a_e_boric',
    name: 'Encortoloni + Vit. A + Vit. E + 3% Sol. Ac. borici + Eucerini',

    formData: {
        dosageForm: 'ointment',
        totalAmount: 100,
        isSterile: false,

        ingredients: [
            {
                ingredientId: 'encortoloni',
                amount: '0.25',
                batch: '',
                expiryDate: '',
            },
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
                amount: '10',
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
            usage: 'Preparat o działaniu przeciwzapalnym, regenerującym, natłuszczającym i ochronnym.',
            dosage: '1x dziennie wieczorem',
            comment: '',
            tests: String(dosageFormTests['ointment']),
        },
    },
};
