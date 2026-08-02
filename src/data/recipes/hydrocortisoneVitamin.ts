import { ProtocolFormValues } from '@/lib/schemas/protocolSchema';
import { dosageFormTests } from '@/data/dosageForms';

const calculations = [
    'Obliczanie ilości Vit.A liq:',
    '3.333ml x 1.14g/ml = 3.8g',

    'Obliczanie ilości Vit.E liq:',
    '0.6ml : 0.3g/ml = 2ml',
    '2ml x 0.93g/ml = 1.86g',

    'Obliczanie ilości Hascobazy:',
    '100g - 1g - 3,8g - 1,86g - 20g = 73,34g',
];

const execution = [
    '1. Do wytarowanej tuby odważam odpowiednią ilość Hascobazy.',
    '2. Dodaję odpowiednią ilość wody destylowanej.',
    '3. Na wytarowanej podkładce pergaminowej odważam odpowiednią ilość hydrokortyzonu.',
    '5. Dodaję odważony hydrokortyzon.',
    '4. Do tuby dodaję odpowiednią ilość witaminy E.',
    '6. Mieszam przez 2 minuty zaczynając od małych obrotów i stopniowo zwiększając je co 5 sekund do uzyskania jednorodnej maści.',
    '7. do tuby dodaję odpowiednią ilość witaminy A. i mieszam przez 1 minutę na małych obrotach ',
    '8. Po zakończeniu mieszania wyjmuję mieszadło, zamykam tubę, naklejam uzupełnioną etykietę i naklejkę przechowywać w lodówce.',
    '9. Sprzątam stanowisko pracy.',
];

export const hydrocortisoneVitaminRecipe: {
    id: string;
    name: string;
    formData: Partial<ProtocolFormValues>;
} = {
    id: 'hydrocortisoni_vitamins',
    name: 'Hydrocortisoni + Vit. A + Vit. E',

    formData: {
        dosageForm: 'ointment',
        totalAmount: 100,
        isSterile: false,

        ingredients: [
            {
                ingredientId: 'hydrocortisoni',
                amount: '1',
                producer: 'Fagron',
                batch: '',
                expiryDate: '',
            },
            {
                ingredientId: 'vit_a_liq',
                amount: '150000',
                calculatedAmount: 3.8,
                producer: 'Hasco',
                batch: '',
                expiryDate: '',
            },
            {
                ingredientId: 'vit_e_liq',
                amount: '0.6',
                calculatedAmount: 1.86,
                producer: 'Medana',
                batch: '',
                expiryDate: '',
            },
            {
                ingredientId: 'aquae_purificatae',
                amount: '20',
                producer: 'Actifarm',
                batch: '',
                expiryDate: '',
            },
            {
                ingredientId: 'hascobaza',
                amount: 'ad 100',
                producer: 'Hasco',
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
            usage: 'Preparat o działaniu przeciwzapalnym, regenerującym i natłuszczającym.',
            dosage: 'Stosować 2 razy dziennie rano i wieczorem.',
            comment: '',
            tests: String(dosageFormTests['ointment']),
        },
    },
};
