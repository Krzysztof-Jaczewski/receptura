import { ProtocolFormValues } from '@/lib/schemas/protocolSchema';
import { dosageFormTests } from '@/data/dosageForms';

const calculations = [
    'Obliczanie ilości olejku miętowego:',
    '5 * 0,019g = 0,095g',
    'Obliczanie ilości podłoża:',
    '200g - 0,095g - 20g - 20g = 159,905g',
];

const execution = [
    '1. Do wytarowanej butelki odważam odpowiednią ilość gliceryny',
    '2. Następnie dolewam odpowiednią ilość witaminy E i witaminy A ',
    '3. Na koniec wkraplam odpowiednią ilość olejku miętowego ',
    '4. Zakręcam butelkę i wstrząsam do całkowitego wymieszania składników i naklejam uzupełnioną etykietę oraz nalepkę wstrząsnąć przed użyciem',
    '5. Sprzątam stanowisko pracy',
];

export const vitaminRinseRecipe: {
    id: string;
    name: string;
    formData: Partial<ProtocolFormValues>;
} = {
    id: 'vitamin_rinse',
    name: 'Płukanka witaminowa',

    formData: {
        dosageForm: 'emulsion',
        totalAmount: 200,
        isSterile: false,

        ingredients: [
            {
                ingredientId: 'vit_a_liq',
                amount: '20',
                producer: 'Hasco',
                batch: '',
                expiryDate: '',
            },
            {
                ingredientId: 'vit_e_liq',
                amount: '20',
                producer: 'Medana',
                batch: '',
                expiryDate: '',
            },
            {
                ingredientId: 'oleum_menthae_piperitae',
                amount: '5',
                calculatedAmount: 0.095,
                producer: '',
                batch: '',
                expiryDate: '',
            },
            {
                ingredientId: 'glycerini',
                amount: 'ad 200',
                producer: '',
                batch: '',
                expiryDate: '',
            },
        ],

        extra: {
            packaging: 'bottle_200',
            shelfLife: '30d',
            storage: 'fridge',
            calculations: calculations.join('\n'),
            execution: execution.join('\n'),
            usage: 'nawilżanie, regeneracja oraz łagodzenie podrażnień błon śluzowych',
            dosage: '3 razy dziennie po łyżce na pól szklanki wody, do płukania gardła',
            comment: '',
            tests: String(dosageFormTests['emulsion']),
            executionDate: new Date().toISOString().split('T')[0],
        },
    },
};
