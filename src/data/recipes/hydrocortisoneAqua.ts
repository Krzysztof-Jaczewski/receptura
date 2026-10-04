import { dosageFormTests } from '@/data/dosageForms';
import { ProtocolFormValues } from '@/lib/schemas/protocolSchema';

const calculations = [
    'Obliczanie ilości Maści cholesterolowej:',
    '100g - 20g - 1g = 79g',
];
const execution = [
    '1. Do wytarowanego pojemnika odważam odpowiednią ilość Maści cholesterolowej',
    '2. Na wytarowanej podkładce pergaminowej odważam odpowiadającą ilość składnika',
    '3. Do wytarowanej zlewki odważam odpowiednią ilość wody destylowanej.',
    '4. Wsypuje składnik do pojemnika z podłożem, dolewam wodę destylowaną i mieszam przez 2 minuty zaczynając od małych obrotów i stopniowo co 5 sekund zwiększając obroty ',
    '5. Po zakończeniu mieszania wyjmuje mieszadło, zakładam pokrywę i naklejam uzupełnioną etykietę i naklejkę przechowywać w lodówce .',
    '6. Sprzątam stanowisko pracy',
];

export const hydrocortisoneAquaRecipe: {
    id: string;
    name: string;
    formData: ProtocolFormValues;
} = {
    id: 'hydrocortisone_aqua',
    name: 'Hydrocortisoni + Aqua + Ung. cholesteroli',

    formData: {
        patientName: '',
        doctorName: '',
        prescriptionNumber: '',
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
                ingredientId: 'aquae_purificatae',
                amount: '20',
                batch: '',
                expiryDate: '',
            },
            {
                ingredientId: 'ung_cholesteroli',
                amount: 'ad 100',
                batch: '',
                expiryDate: '',
            },
        ],

        extra: {
            usage: 'Swędzenie, zaczerwienienie, nawilżenie, podrażnienie skóry',
            dosage: '1x dziennie',
            shelfLife: '14d',
            storage: 'fridge',
            packaging: 'tube_100',
            calculations: calculations.join('\n'),
            execution: execution.join('\n'),
            comment: '',
            tests: String(dosageFormTests['ointment']),
        },
    },
};
