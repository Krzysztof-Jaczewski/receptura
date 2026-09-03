import { ProtocolFormValues } from '@/lib/schemas/protocolSchema';
import { dosageFormTests } from '@/data/dosageForms';

const calculations = [
    'Obliczanie ilości Ung. cholesteroli:',
    '50g - 1g - 2g = 47g',
];

const execution = [
    '1. Do wytarowanej tuby odważam odpowiednią ilość Ung. cholesteroli.',
    '2. Do tuby odważam odpowiednią ilość Linomagu.',
    '3. Do tuby odważam odpowiednią ilość witaminy E.',
    '4. Mieszam przez 2 minuty zaczynając od małych obrotów i stopniowo co 5 sekund zwiększając obroty.',
    '5. Po zakończeniu mieszania wyjmuję mieszadło, zamykam tubę, naklejam uzupełnioną etykietę.',
    '6. Sprzątam stanowisko pracy.',
];

export const vitELinomagUngCholesteroliRecipe: {
    id: string;
    name: string;
    formData: Partial<ProtocolFormValues>;
} = {
    id: 'vit_e_linomag_ung_cholesteroli',
    name: 'Vit. E liq + Linomagi + Ung. cholesteroli',

    formData: {
        dosageForm: 'ointment',
        totalAmount: 50,
        isSterile: false,

        ingredients: [
            {
                ingredientId: 'vit_e_liq',
                amount: '1',
                producer: '',
                batch: '',
                expiryDate: '',
            },
            {
                ingredientId: 'linomagi',
                amount: '2',
                producer: '',
                batch: '',
                expiryDate: '',
            },
            {
                ingredientId: 'ung_cholesteroli',
                amount: 'ad 50',
                producer: '',
                batch: '',
                expiryDate: '',
            },
        ],

        extra: {
            packaging: 'tube_50',
            shelfLife: '30d',
            storage: 'room_temperature',
            calculations: calculations.join('\n'),
            execution: execution.join('\n'),
            usage: 'Preparat o działaniu natłuszczającym, regenerującym i łagodzącym.',
            dosage: '2x dziennie rano i wieczorem',
            comment: '',
            tests: String(dosageFormTests['ointment']),
        },
    },
};
