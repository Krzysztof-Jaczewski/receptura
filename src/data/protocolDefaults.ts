import { ProtocolFormValues } from '@/lib/schemas/protocolSchema';

export const defaultExtra = {
    calculations: '',
    packaging: 'tube_100',
    tests: '',
    execution: '',
    usage: '',
    comment: '',
    dosage: '',
    shelfLife: '14d',
    storage: 'fridge',
    executionDate: new Date().toISOString().split('T')[0],
};

export const protocolDefaultValues: ProtocolFormValues = {
    patientName: '',
    doctorName: '',
    prescriptionNumber: '',
    dosageForm: 'ointment',
    totalAmount: 0,
    isSterile: false,
    ingredients: [
        {
            ingredientId: '',
            amount: '',
            producer: '',
            batch: '',
            expiryDate: '',
        },
    ],
    extra: {
        ...defaultExtra,
    },
};
