import { ProtocolFormValues } from '@/lib/schemas/protocolSchema';
import { dosageFormTests } from '@/data/dosageForms';

const execution = [
    '1. Do wytarowanej tuby odważam odpowiednią ilość Wazeliny białej.',
    '2. Do wytarowanej tuby wyciskam z tubki odpowiadającą ilość Nitrocardu.',
    '3. Do wytarowanej tuby wyciskam z pełną tubkę Lidoposterinu.',
    '4. Na wytarowanej podkładce pergaminowej odważam odpowiednią ilość zmikronizowanej Benzocainy i wsypuję do tuby z pozostałymi składnikami.',
    '5. Mieszam przez 2 minuty zaczynając od małych obrotów i stopniowo co 5 sekund zwiększając obroty.',
    '6. Po zakończeniu mieszania wyjmuję mieszadło,zakładam pokrywę i naklejam uzupełnioną etykietę.',
    '7. Sprzątam stanowisko pracy.',
];

export const ungNitrocardiRecipe: {
    id: string;
    name: string;
    formData: Partial<ProtocolFormValues>;
} = {
    id: 'ung_nitrocardi',
    name: 'Ung. nitrocardi + Lidoposterini + Anaestesini',
    formData: {
        dosageForm: 'ointment',
        totalAmount: 100,
        isSterile: false,

        ingredients: [
            {
                ingredientId: 'ung_nitrocardi',
                amount: '10',
                batch: '',
                expiryDate: '',
            },
            {
                ingredientId: 'lidoposterini',
                amount: '25',
                batch: '',
                expiryDate: '',
            },
            {
                ingredientId: 'vaselini_albi',
                amount: '60',
                batch: '',
                expiryDate: '',
            },
            {
                ingredientId: 'anaesthesini',
                amount: '5',
                batch: '',
                expiryDate: '',
            },
        ],

        extra: {
            packaging: 'tube_100',
            shelfLife: '30d',
            storage: 'roomTemperature',
            calculations: '',
            execution: execution.join('\n'),
            usage: 'Preparat o działaniu znieczulającym, przeciwbólowym oraz rozluźniającym mięśnie gładkie ',
            dosage: '3x1 do 45 dni.',
            comment: '',
            tests: String(dosageFormTests['ointment']),
        },
    },
};
