import { dosageFormTests } from '@/data/dosageForms';
import { ProtocolFormValues } from '@/lib/schemas/protocolSchema';

const calculations = ['Obliczanie ilości podłoża:', '100g - 1g = 99g'];

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
                producer: '',
                batch: '',
                expiryDate: '',
            },
            {
                ingredientId: 'ung_cholesteroli',
                amount: 'ad100',
                producer: '',
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
            execution: '',
            comment: '',
            tests: String(dosageFormTests['ointment']),
            executionDate: new Date().toISOString().split('T')[0],
        },
    },
};
