import { ProtocolFormValues } from '@/lib/schemas/protocolSchema';
import { dosageFormTests } from '@/data/dosageForms';

const calculations = [
    'Obliczanie ilości 1% roztworu kwasu borowego:',
    '200g - 80g - 60g - 20g = 40g',
];

const execution = [
    '1. Do wytarowanej tuby odważam odpowiednią ilość lanoliny oraz euceryny ',
    '2. Na wytarowanej podkładce pergaminowej odważam odpowiednią ilość  kwasu borowego.',
    '3. Do wytarowanej zlewki odważam odpowiednią ilość wody destylowanej i dodaję kwas borowy, mieszam do całkowitego rozpuszczenia.',
    '4. Roztwór ze zlewki dodaje do tuby z podłożami ',
    '5. Mieszam przez 2 minuty zaczynając od małych obrotów i stopniowo co 5 sekund zwiększając obroty ',
    '6. Po zakończeniu mieszania wyjmuje mieszadło, zakładam pokrywę i naklejam uzupełnioną etykietę i naklejkę przechowywać w lodówce',
    '7. Sprzątam stanowisko pracy .',
];

export const lanolinEucerinAquaRecipe: {
    id: string;
    name: string;
    formData: Partial<ProtocolFormValues>;
} = {
    id: 'lanolin_eucerin_aqua_boric',
    name: 'Lanolina + Euceryna + Aqua + Sol. Ac. borici 1%',

    formData: {
        dosageForm: 'ointment',
        totalAmount: 200,
        isSterile: false,

        ingredients: [
            {
                ingredientId: 'lanolini',
                amount: '80',
                batch: '',
                expiryDate: '',
            },
            {
                ingredientId: 'eucerini',
                amount: '60',
                batch: '',
                expiryDate: '',
            },
            {
                ingredientId: 'aquae_purificatae',
                amount: '20',
                batch: '',
                expiryDate: '',
            },
            {
                ingredientId: 'sol_ac_borici_1',
                amount: 'ad 200',
                batch: '',
                expiryDate: '',
            },
        ],

        extra: {
            packaging: 'tube_200',
            storage: 'fridge',
            shelfLife: '14d',
            calculations: calculations.join('\n'),
            execution: execution.join('\n'),
            usage: 'Preparat o działaniu ochronnym i nawilżającym.',
            dosage: '1x dziennie .',
            comment: '',
            tests: String(dosageFormTests['ointment']),
        },
    },
};
