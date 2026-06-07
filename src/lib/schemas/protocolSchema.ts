import { z } from 'zod';

export const protocolSchema = z.object({
    patientName: z.string(),
    doctorName: z.string(),
    prescriptionNumber: z.string(),
    dosageForm: z.enum(['maść', 'płyn', 'krople']),
    totalAmount: z.coerce.number(),
    isSterile: z.boolean(),
    ingredients: z.array(
        z.object({
            name: z.string(),
            amount: z.coerce.number(),
            producer: z.string(),
            batch: z.string(),
            expiryDate: z.string(),
        }),
    ),
});

export type ProtocolFormValues = z.infer<typeof protocolSchema>;
