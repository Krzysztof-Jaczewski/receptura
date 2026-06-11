import { ProtocolFormValues } from '@/lib/schemas/protocolSchema';

export const protocolDefaultValues: ProtocolFormValues = {
    patientName: '',
    doctorName: '',
    prescriptionNumber: '',
    dosageForm: 'maść',
    totalAmount: 0,
    isSterile: false,
    ingredients: [
        {
            name: '',
            amount: '',
            producer: '',
            batch: '',
            expiryDate: '',
        },
    ],
    extra: {
        calculations: '',
        packaging: '',
        tests: '',
        execution: '',
        comment: '',
        dosing: '',
        duration: '',
        storage: '',
    },
};

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
