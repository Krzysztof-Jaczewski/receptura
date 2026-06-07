import { z } from 'zod';

export const protocolSchema = z.object({
    patientName: z.string(),
    doctorName: z.string(),
    prescriptionNumber: z.string(),
    dosageForm: z.enum(['maść', 'płyn', 'krople']),
    totalAmount: z.number(),
    isSterile: z.boolean(),

    ingredients: z.array(
        z.object({
            name: z.string(),
            amount: z.number(),
            producer: z.string(),
            batch: z.string(),
            expiryDate: z.string(),
        }),
    ),

    extra: z
        .object({
            calculations: z.string(),
            packaging: z.string(),
            tests: z.string(),
            execution: z.string(),
            comment: z.string(),
            dosing: z.string(),
            duration: z.string(),
            storage: z.string(),
        })
        .optional(),
});

export type ProtocolFormValues = z.infer<typeof protocolSchema>;
