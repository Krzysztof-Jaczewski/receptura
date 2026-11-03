import { z } from 'zod';

export const packagingEnum = z.enum([
    'tube_20',
    'tube_50',
    'tube_100',
    'tube_200',
    'bottle_40',
    'bottle_100',
    'bottle_125',
    'bottle_200',
    'bottle_250',
    'bottle_500',
]);

export const shelfLifeEnum = z.enum(['7d', '14d', '30d']);
export const storageEnum = z.enum(['fridge', 'roomTemperature']);

const ingredientSchema = z.object({
    ingredientId: z.string(),
    amount: z.string(),
    calculatedAmount: z.number().optional(),
    producer: z.string().optional(),
    batch: z.string(),
    expiryDate: z.string(),
});

export const protocolSchema = z.object({
    patientName: z.string(),
    doctorName: z.string(),
    prescriptionNumber: z.string(),
    dosageForm: z.enum(['ointment', 'solution', 'emulsion', 'drops']),
    totalAmount: z.number().positive(),
    isSterile: z.boolean(),
    ingredients: z.array(ingredientSchema),
    extra: z
        .object({
            calculations: z.string(),
            packaging: packagingEnum,
            tests: z.string(),
            execution: z.string(),
            usage: z.string(),
            comment: z.string(),
            dosage: z.string(),
            shelfLife: shelfLifeEnum,
            storage: storageEnum,
        })
        .optional(),
});

export type Ingredient = z.infer<typeof ingredientSchema>;
export type ProtocolFormValues = z.infer<typeof protocolSchema>;
