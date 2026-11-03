import { dosageFormTests } from '@/data/dosageForms';
import { ProtocolFormValues } from '@/lib/schemas/protocolSchema';

const calculations = [
    'Obliczanie ilości Lekobazy:',
    '100g - 1g - 1g - 15g - 25g = 58g',
];

const execution = [
    '1. Do wytarowanej tuby odważam odpowiednią ilość Lekobazy.',
    '2. Na wytarowanej podkładce pergaminowej odważam odpowiednią ilość hydrocortisonu.',
    '3. Na wytarowanej podkładce pergaminowej odważam odpowiednią ilość tlenku cynku.',
    '4. Do wytarowanej zlewki odważam odpowiednią ilość gliceryny oraz wody destylowanej.',
    '5. Do tuby z Lekobazą dodaję odważony hydrocortison oraz tlenek cynku.',
    '6. Następnie do tuby dolewam przygotowaną mieszaninę gliceryny i wody destylowanej.',
    '7. Mieszam przez 2 minuty zaczynając od małych obrotów i stopniowo co 5 sekund zwiększając obroty, do uzyskania jednorodnej maści.',
    '8. Po zakończeniu mieszania wyjmuję mieszadło, zamykam tubę, naklejam uzupełnioną etykietę i naklejkę przechowywać w lodówce.',
    '9. Sprzątam stanowisko pracy.',
];

export const hydrocortisoniZinciGlyceriniLekobazaRecipe: {
    id: string;
    name: string;
    formData: Partial<ProtocolFormValues>;
} = {
    id: 'hydrocortisoni_zinci_glycerini_lekobaza',
    name: 'Hydrocortisoni + Zinci oxydi + Glycerini + Aqua purificata + Lekobaza',

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
                ingredientId: 'zinci_oxydi',
                amount: '1',
                batch: '',
                expiryDate: '',
            },
            {
                ingredientId: 'glycerini',
                amount: '15',
                batch: '',
                expiryDate: '',
            },
            {
                ingredientId: 'aquae_purificatae',
                amount: '25',
                batch: '',
                expiryDate: '',
            },
            {
                ingredientId: 'lekobaza',
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
            usage: 'Preparat o działaniu przeciwzapalnym, przeciwświądowym, wysuszającym i łagodzącym podrażnienia skóry.',
            dosage: '1x dziennie',
            comment: '',
            tests: String(dosageFormTests['ointment']),
        },
    },
};
