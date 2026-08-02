import { ProtocolFormValues } from '@/lib/schemas/protocolSchema';
import { dosageFormTests } from '@/data/dosageForms';

const calculations = ['Obliczanie ilości Lekobazy:', '200g - 5g = 195g'];

const execution = [
    '1. Do wytarowanej tuby odważam odpowiednią ilość Lekobazy.',
    '2. Do wytarowanej zlewki odważam odpowiednią ilość wody destylowanej i dolewam do tuby.',
    '3. Mieszam przez 2 minuty zaczynając od małych obrotów i stopniowo co 5 sekund zwiększając obroty.',
    '5. Po zakończeniu mieszania wyjmuję mieszadło, zamykam tubę, naklejam uzupełnioną etykietę oraz naklejkę przechowywać w lodówce.',
    '6. Sprzątam stanowisko pracy.',
];

export const lekobazaAquaRecipe: {
    id: string;
    name: string;
    formData: Partial<ProtocolFormValues>;
} = {
    id: 'lekobaza_aqua',
    name: 'Aqua purificata + Lekobaza',

    formData: {
        dosageForm: 'ointment',
        totalAmount: 200,
        isSterile: false,

        ingredients: [
            {
                ingredientId: 'aquae_purificatae',
                amount: '5',
                batch: '',
                expiryDate: '',
            },
            {
                ingredientId: 'lekobaza',
                amount: 'ad 200',
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
        },
    },
};
