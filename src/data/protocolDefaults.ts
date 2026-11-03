import {
    packagingEnum,
    shelfLifeEnum,
    storageEnum,
    ProtocolFormValues,
} from '@/lib/schemas/protocolSchema';

export const defaultExtra = {
    calculations: '',
    packaging: packagingEnum.parse('bottle_100'),
    tests: '',
    execution: '',
    usage: '',
    comment: '',
    dosage: '',
    shelfLife: shelfLifeEnum.parse('14d'),
    storage: storageEnum.parse('fridge'),
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
