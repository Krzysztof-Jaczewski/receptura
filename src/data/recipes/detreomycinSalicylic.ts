import { ProtocolFormValues } from '@/lib/schemas/protocolSchema';
import { dosageFormTests } from '@/data/dosageForms';

const calculations = [
    'Obliczanie ilości spirytusu 70%:',
    '100g - 4g - 2g - 5g = 89g',
];

const execution = [
    '1. W wyjałowionej wytarowanej zlewce doważam odpowiednią ilość spirytusu 70%',
    '2. Odważam kwas salicylowy pod lożą laminarną na podkładce pergaminowej, wsypuje do zlewki ze spirytusem. i mieszam do całkowitego rozpuszczenia.',
    '3. Odważam Detreomycynę pod lożą laminarną na podkładce pergaminowej i wsypuje do zlewki i mieszam do całkowitego rozpuszczenia .',
    '4. Do zlewki odważam odpowiednią ilość gliceryny i mieszam do całkowitego rozpuszczenia.',
    '5. Przenoszę preparat do jałowej butelki, szczelnie zamykam i naklejam uzupełnioną etykietę.',
    '6. Sprzątam stanowisko pracy zgodnie z procedurą.',
];
export const detreomycinSalicylicRecipe: {
    id: string;
    name: string;
    formData: Partial<ProtocolFormValues>;
} = {
    id: 'detreomycin_salicylic_solution',
    name: 'Detreomycyna + kwas salicylowy',

    formData: {
        dosageForm: 'solution',
        totalAmount: 100,
        isSterile: true,

        ingredients: [
            {
                ingredientId: 'detreomycini',
                amount: '4',
                producer: 'Fagron',
                batch: '',
                expiryDate: '',
            },
            {
                ingredientId: 'acidi_salicylici',
                amount: '2',
                producer: 'Fagron',
                batch: '',
                expiryDate: '',
            },
            {
                ingredientId: 'glycerini',
                amount: '5',
                producer: 'Fagron',
                batch: '',
                expiryDate: '',
            },
            {
                ingredientId: 'ethanoli_70',
                amount: 'ad 100',
                producer: 'Amara',
                batch: '',
                expiryDate: '',
            },
        ],

        extra: {
            packaging: 'bottle_100',
            shelfLife: '30d',
            storage: 'fridge',
            calculations: calculations.join('\n'),
            execution: execution.join('\n'),
            usage: 'Preparat do stosowania na skórę o działaniu przeciwbakteryjnym i keratolitycznym.',
            dosage: '1 x dziennie rano.',
            comment: '',
            tests: String(dosageFormTests['solution']),
            executionDate: new Date().toISOString().split('T')[0],
        },
    },
};
