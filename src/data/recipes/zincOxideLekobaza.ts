import { ProtocolFormValues } from '@/lib/schemas/protocolSchema';
import { dosageFormTests } from '@/data/dosageForms';

const calculations = ['Obliczanie ilości Lekobazy:', '100g - 4g - 30g = 66g'];

const execution = [
    '1. Do wytarowanej tuby odważam odpowiednią ilość Lekobazy.',
    '2. Na wytarowanej podkładce pergaminowej odważam odpowiednią ilość tlenku cynku.',
    '3. Do wytarowanej zlewki odważam wodę destylowaną.',
    '4. Przenoszę składniki do tuby z podłożem i mieszam przez 2 minuty zaczynając od małych obrotów i stopniowo zwiększając je co 5 sekund do uzyskania jednorodnej maści.',
    '5. Po zakończeniu mieszania wyjmuję mieszadło, zamykam tubę i naklejam uzupełnioną etykietę.',
    '6. Sprzątam stanowisko pracy.',
];

export const zincOxideLekobazaRecipe: {
    id: string;
    name: string;
    formData: Partial<ProtocolFormValues>;
} = {
    id: 'zinc_oxide_lekobaza',
    name: 'Zinci oxydi + Aqua destillata + Lekobaza',

    formData: {
        dosageForm: 'ointment',
        totalAmount: 100,
        isSterile: false,

        ingredients: [
            {
                ingredientId: 'zinci_oxydi',
                amount: '4',
                producer: 'Fagron',
                batch: '',
                expiryDate: '',
            },
            {
                ingredientId: 'aquae_purificatae',
                amount: '30',
                producer: 'Actifarm',
                batch: '',
                expiryDate: '',
            },
            {
                ingredientId: 'lekobaza',
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
            usage: 'Preparat o działaniu ochronnym i wysuszającym.',
            dosage: '2x dziennie.',
            comment: '',
            tests: String(dosageFormTests['ointment']),
            executionDate: new Date().toISOString().split('T')[0],
        },
    },
};
