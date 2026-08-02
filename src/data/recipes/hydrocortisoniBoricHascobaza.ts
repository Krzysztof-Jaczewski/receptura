import { ProtocolFormValues } from '@/lib/schemas/protocolSchema';
import { dosageFormTests } from '@/data/dosageForms';

const calculations = ['Obliczanie ilości Hascobazy:', '100g - 1g - 30g = 69g'];

const execution = [
    '1. Do wytarowanej tuby odważam odpowiednią ilość Hascobazy.',
    '2. Na wytarowanej podkładce pergaminowej odważam odpowiednią ilość Hydrocortisonu i wsypuje do podłoża.',
    '3. Na wytarowanej podkładce pergaminowej odważam odpowiednią ilość kwasu borowego.',
    '4. Do wytarowanej zlewki odważam odpowiednią ilość wody destylowanej.',
    '5. Wodę destylowaną podgrzewam na łaźni wodnej i rozpuszczam w niej kwas borowy.',
    '6. Do tuby dodaję roztwór kwasu borowego i Mieszam przez 2 minuty zaczynając od małych obrotów i stopniowo co 5 sekund zwiększając obroty  ',
    '7. Po zakończeniu mieszania wyjmuję mieszadło, zamykam tubę i naklejam uzupełnioną etykietę i naklejkę przechowywać w lodówce .',
    '8. Sprzątam stanowisko pracy.',
];

export const hydrocortisoniBoricHascobazaRecipe: {
    id: string;
    name: string;
    formData: Partial<ProtocolFormValues>;
} = {
    id: 'hydrocortisoni_boric_hascobaza',
    name: 'Hydrocortisoni + 3% Sol. Ac. borici + Hascobaza',

    formData: {
        dosageForm: 'ointment',
        totalAmount: 100,
        isSterile: false,

        ingredients: [
            {
                ingredientId: 'hydrocortisoni',
                amount: '1',
                batch: '',
                expiryDate: '',
            },
            {
                ingredientId: 'sol_ac_borici_3',
                amount: '30',
                batch: '',
                expiryDate: '',
            },
            {
                ingredientId: 'hascobaza',
                amount: 'ad 100',
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
            usage: 'Preparat o działaniu przeciwzapalnym, przeciwświądowym, przeciwobrzękowym, odkażającym i ściągającym.',
            dosage: '3x dziennie',
            comment: '',
            tests: String(dosageFormTests['ointment']),
        },
    },
};
