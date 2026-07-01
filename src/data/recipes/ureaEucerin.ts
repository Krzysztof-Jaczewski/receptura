import { ProtocolFormValues } from '@/lib/schemas/protocolSchema';
import { dosageFormTests } from '@/data/dosageForms';

const calculations = ['Obliczanie ilości euceryny:', '100g - 10g - 10g = 80g'];

const execution = [
    '1. Do wytarowanej tuby odważam odpowiednią ilość euceryny.',
    '2. Na wytarowanej podkładce pergaminowej odważam odpowiednią ilość mocznika.',
    '3. Do wytarowanej zlewki odważam wodę destylowaną.',
    '4. Wodę destylowaną podgrzewam na łaźni wodnej w celu ułatwienia rozpuszczenia mocznika.',
    '5. Dodaję mocznik do podgrzanej wody i mieszam do całkowitego rozpuszczenia.',
    '6. Dodaję przygotowany roztwór do euceryny i mieszam przez 2 minuty zaczynając od małych obrotów i stopniowo zwiększając je co 5 sekund do uzyskania jednorodnej maści.',
    '7. Po zakończeniu mieszania wyjmuję mieszadło, zamykam tubę i naklejam uzupełnioną etykietę.',
    '8. Sprzątam stanowisko pracy.',
];

export const ureaEucerinRecipe: {
    id: string;
    name: string;
    formData: Partial<ProtocolFormValues>;
} = {
    id: 'urea_eucerin',
    name: 'Urea + Aqua destillata + Eucerini',

    formData: {
        dosageForm: 'ointment',
        totalAmount: 100,
        isSterile: false,

        ingredients: [
            {
                ingredientId: 'urea',
                amount: '10',
                producer: 'Fagron',
                batch: '',
                expiryDate: '',
            },
            {
                ingredientId: 'aquae_purificatae',
                amount: '10',
                producer: 'Actifarm',
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
            usage: 'Preparat o działaniu nawilżającym i zmiękczającym.',
            dosage: '1x dziennie.',
            comment: '',
            tests: String(dosageFormTests['ointment']),
            executionDate: new Date().toISOString().split('T')[0],
        },
    },
};
