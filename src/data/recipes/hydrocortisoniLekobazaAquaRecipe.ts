import { ProtocolFormValues } from '@/lib/schemas/protocolSchema';
import { dosageFormTests } from '@/data/dosageForms';

const calculations = ['Obliczanie ilości Lekobazy:', '200g - 2g - 30g = 168g'];

const execution = [
    '1. Do wytarowanej tuby odważam odpowiednią ilość Lekobazy.',
    '2. Na wytarowanej podkładce pergaminowej odważam odpowiednią ilość Hydrocortisonu i dodaje go do tuby.',
    '3. Do wytarowanej zlewki odważam odpowiednią ilość wody destylowanej i dolewam ją do tuby.',
    '4. Mieszam przez 2 minuty zaczynając od małych obrotów co 5 sekund zwiększając obroty.',
    '5. Po zakończeniu mieszania wyjmuję mieszadło, zamykam tubę, naklejam uzupełnioną etykietę oraz naklejkę przechowywać w lodówce.',
    '6. Sprzątam stanowisko pracy.',
];

export const hydrocortisoniLekobazaAquaRecipe: {
    id: string;
    name: string;
    formData: Partial<ProtocolFormValues>;
} = {
    id: 'hydrocortisoni_lekobaza_aqua',
    name: 'Hydrocortisoni + Aqua purificata + Lekobaza',

    formData: {
        dosageForm: 'ointment',
        totalAmount: 200,
        isSterile: false,

        ingredients: [
            {
                ingredientId: 'hydrocortisoni',
                amount: '2',
                batch: '',
                expiryDate: '',
            },
            {
                ingredientId: 'aquae_purificatae',
                amount: '30',
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
            usage: 'Preparat o działaniu przeciwzapalnym, przeciwalergicznym, przeciwświądowym oraz intensywnie nawilżającym.',
            dosage: '1x dziennie',
            comment: '',
            tests: String(dosageFormTests['ointment']),
        },
    },
};
