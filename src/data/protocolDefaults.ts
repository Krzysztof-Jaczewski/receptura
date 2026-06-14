import { ProtocolFormValues } from '@/lib/schemas/protocolSchema';

export const defaultExtra = {
    calculations: '',
    packaging: '',
    tests: '',
    execution: '',
    comment: '',
    dosing: '',
    duration: '',
    storage: '',
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
