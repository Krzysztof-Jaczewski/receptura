import { ProtocolFormValues } from '@/lib/schemas/protocolSchema';
import { dosageFormTests } from '@/data/dosageForms';

const calculations = [
    'Obliczanie ilości Glycerolu:',
    '400g - 30g - 40g - 60g - 0.4g = 269.6g',
];

const execution = [
    '1. Do wytarowanej butelki odważam odpowiednią ilość Glycerolu.',
    '2. Do butelki odważam odpowiednią ilość Linomagu.',
    '3. Do butelki odważam odpowiednią ilość witaminy E.',
    '4. Do butelki odważam odpowiednią ilość witaminy A.',
    '5. Na wytarowanej podkładce pergaminowej odważam odpowiednią ilość mentholu i wsypuje do butelki.',
    '6. Mieszam do całkowitego rozpuszczenia rozpuszczenia mentolu.',
    '7. Naklejam uzupełnioną etykietę oraz naklejkę przechowywać w lodówce.',
    '8. Sprzątam stanowisko pracy.',
];

export const vitALinomagVitEGlyceroliMentholiRecipe: {
    id: string;
    name: string;
    formData: Partial<ProtocolFormValues>;
} = {
    id: 'vit_a_linomag_vit_e_glyceroli_mentholi',
    name: 'Vit. A liq + Vit. E liq + Linomagi + Mentholi + Glyceroli',

    formData: {
        dosageForm: 'solution',
        totalAmount: 400,
        isSterile: false,

        ingredients: [
            {
                ingredientId: 'vit_a_liq',
                amount: '30',
                producer: '',
                batch: '',
                expiryDate: '',
            },
            {
                ingredientId: 'vit_e_liq',
                amount: '40',
                producer: '',
                batch: '',
                expiryDate: '',
            },
            {
                ingredientId: 'linomagi',
                amount: '60',
                producer: '',
                batch: '',
                expiryDate: '',
            },
            {
                ingredientId: 'mentholi',
                amount: '0.4',
                producer: '',
                batch: '',
                expiryDate: '',
            },
            {
                ingredientId: 'glyceroli',
                amount: 'ad 400',
                producer: '',
                batch: '',
                expiryDate: '',
            },
        ],

        extra: {
            packaging: 'bottle_500',
            shelfLife: '30d',
            storage: 'fridge',
            calculations: calculations.join('\n'),
            execution: execution.join('\n'),
            usage: 'Preparat do stosowania zewnętrznego o działaniu natłuszczającym i pielęgnacyjnym.',
            dosage: '1x dziennie',
            comment: '',
            tests: String(dosageFormTests['solution']),
        },
    },
};
