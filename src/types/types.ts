export type Ingredient = {
    name: string;
    amount: string;
    calculatedAmount?: number;
    producer: string;
    batch: string;
    expiryDate: string;
};

export type ProtocolFormValues = {
    patientName: string;
    doctorName: string;
    prescriptionNumber: string;
    dosageForm: 'maść' | 'płyn' | 'krople';
    totalAmount: number;
    isSterile: boolean;
    ingredients: Ingredient[];

    extra?: {
        calculations: string;
        packaging: string;
        tests: string;
        execution: string;
        comment: string;
        dosing: string;
        duration: string;
        storage: string;
    };
};
