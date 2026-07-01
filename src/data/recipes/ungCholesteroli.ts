import { ProtocolFormValues } from '@/lib/schemas/protocolSchema';
import { dosageFormTests } from '@/data/dosageForms';

const calculations = [
    'Obliczanie ilości Ung. cholesteroli:',
    '200g - 40g = 160g',
];

const execution = [
    '1. Do wytarowanej tuby odważam odpowiednią ilość Ung. cholesteroli.',
    '2. Dodaję odpowiednią ilość wody destylowanej.',
    '3. Mieszam przez 2 minuty zaczynając od małych obrotów i stopniowo zwiększając je co 5 sekund do uzyskania jednorodnej maści.',
    '4. Po zakończeniu mieszania wyjmuję mieszadło, zamykam tubę i naklejam uzupełnioną etykietę.',
    '5. Sprzątam stanowisko pracy.',
];

export const ungCholesteroliRecipe: {
    id: string;
    name: string;
    formData: Partial<ProtocolFormValues>;
} = {
    id: 'ung_cholesteroli_aqua',
    name: 'Ung. cholesteroli + Aqua destillata',

    formData: {
        dosageForm: 'ointment',
        totalAmount: 200,
        isSterile: false,

        ingredients: [
            {
                ingredientId: 'aquae_purificatae',
                amount: '40',
                producer: 'Actifarm',
                batch: '',
                expiryDate: '',
            },
            {
                ingredientId: 'ung_cholesteroli',
                amount: 'ad 200',
                producer: 'Fagron',
                batch: '',
                expiryDate: '',
            },
        ],

        extra: {
            packaging: 'tube_200',
            shelfLife: '14d',
            storage: 'fridge',
            calculations: calculations.join('\n'),
            execution: execution.join('\n'),
            usage: 'Preparat o działaniu nawilżającym i natłuszczającym.',
            dosage: '1x dziennie',
            comment: '',
            tests: String(dosageFormTests['ointment']),
            executionDate: new Date().toISOString().split('T')[0],
        },
    },
};
