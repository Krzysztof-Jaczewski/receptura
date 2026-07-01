import { ProtocolFormValues } from '@/lib/schemas/protocolSchema';
import { dosageFormTests } from '@/data/dosageForms';

const calculations = [
    'Obliczanie ilości euceryny:',
    '100g - 5g - 5g - 5g - 6g - 10g = 69g',
    '',
    'Obliczanie ilości składników w 10g 3% Sol. Ac. borici:',
    'Acidi borici: 10g × 3% = 0,3g',
    'Aquae purificatae: 10g - 0,3g = 9,7g',
];

const execution = [
    '1. Do wytarowanej tuby odważam odpowiednią ilość euceryny.',
    '2. Do tuby odważam odpowiednią ilość Linomagu ',
    '3. Do tuby odważam witaminę E oraz Devikap.',
    '4. Na wytarowanej podkładce pergaminowej odważam odpowiednią ilość kwasu borowego.',
    '5. Do wytarowanej zlewki odważam odpowiednią ilość wody destylowanej.',
    '6. Wodę destylowaną podgrzewam na łaźni wodnej do temperatury 40-50°C i rozpuszczam w niej kwas borowy.',
    '7. Dodaję 3% roztwór kwasu borowego i mieszam przez 2 minuty zaczynając od małych obrotów i stopniowo zwiększając je co 5 sekund do uzyskania jednorodnej maści.',
    '8. do tuby dodaję odpowiednią ilość witaminy A. i mieszam przez 1 minutę na małych obrotach ',
    '9. Po zakończeniu mieszania wyjmuję mieszadło, zamykam tubę i naklejam uzupełnioną etykietę.',
    '10. Sprzątam stanowisko pracy.',
];

export const vitaminOintmentRecipe: {
    id: string;
    name: string;
    formData: Partial<ProtocolFormValues>;
} = {
    id: 'vitamin_boric_eucerin',
    name: 'Vit. A + Devikap + Vit. E + Linoamg + Sol. Ac. borici',

    formData: {
        dosageForm: 'ointment',
        totalAmount: 100,
        isSterile: false,

        ingredients: [
            {
                ingredientId: 'vit_a_liq',
                amount: '5',
                producer: 'Hasco',
                batch: '',
                expiryDate: '',
            },
            {
                ingredientId: 'devikap',
                amount: '5',
                producer: 'Polfarma',
                batch: '',
                expiryDate: '',
            },
            {
                ingredientId: 'vit_e_liq',
                amount: '5',
                producer: 'Medana',
                batch: '',
                expiryDate: '',
            },
            {
                ingredientId: 'linomag',
                amount: '6',
                producer: 'Ziołolek',
                batch: '',
                expiryDate: '',
            },
            {
                ingredientId: 'sol_ac_borici_3',
                amount: '10',
                producer: 'Fagron',
                batch: '',
                expiryDate: '',
            },
            {
                ingredientId: 'eucerini',
                amount: 'ad 100',
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
            usage: 'Preparat o działaniu regenerującym, natłuszczającym i ochronnym.',
            dosage: '2x dziennie.',
            comment: '',
            tests: String(dosageFormTests['ointment']),
            executionDate: new Date().toISOString().split('T')[0],
        },
    },
};
