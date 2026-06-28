import { dosageFormTests } from '@/data/dosageForms';
import { ProtocolFormValues } from '@/lib/schemas/protocolSchema';

const calculations = ['Obliczanie ilości podłoża:', '100g - 1g = 99g'];
const execution = [
    '1. Do wytarowanego pojemnika odważam odpowiednią ilość podłoża',
    '2. Na wytarowanej podkładce pergaminowej odważam odpowiadającą ilość składnika',
    '3. Wsypuje składnik do pojemnika z podłożem i mieszam przez 2 minuty zaczynając od małych obrotów i stopniowo co 5 sekund zwiększając je ',
    '4. Po zakończeniu mieszania wyjmuje mieszadło, zakłada pokrywę i naklejam uzupełnioną etykietę',
    '5. Sprzątam stanowisko pracy',
];

export const hydrocortisoneRecipe: {
    id: string;
    name: string;
    formData: ProtocolFormValues;
} = {
    id: 'hydrocortisone_1',
    name: 'Hydrocortisoni 1% maść',

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
                producer: 'Fargon',
                batch: '',
                expiryDate: '',
            },
            {
                ingredientId: 'ung_cholesteroli',
                amount: 'ad 100',
                producer: 'Galfarm',
                batch: '',
                expiryDate: '',
            },
        ],

        extra: {
            usage: 'Swędzenie, zaczerwienienie, podrażnienie skóry',
            dosage: '2x dziennie',
            shelfLife: '30d',
            storage: 'roomTemperature',
            packaging: 'tube_100',
            calculations: calculations.join('\n'),
            execution: execution.join('\n'),
            comment: '',
            tests: String(dosageFormTests['ointment']),
            executionDate: new Date().toISOString().split('T')[0],
        },
    },
};
