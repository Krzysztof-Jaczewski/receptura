import { ProtocolFormValues } from '@/lib/schemas/protocolSchema';
import { dosageFormTests } from '@/data/dosageForms';

const calculations = ['Obliczanie ilości wazeliny żółtej:', '50g - 5g = 45g'];

const execution = [
    '1. Do wytarowanej tuby odważam odpowiednią ilość wazeliny żółtej.',
    '2. Na wytarowanej podkładce pergaminowej odważam odpowiednią ilość kwasu salicylowego.',
    '3. Dodaję odważoną ilość kwasu salicylowego do tuby.',
    '4. Mieszam przez 2 minuty zaczynając od małych obrotów i stopniowo co 5 sekund zwiększając obroty.',
    '5. Po zakończeniu mieszania wyjmuję mieszadło, zamykam tubę, naklejam uzupełnioną etykietę.',
    '6. Sprzątam stanowisko pracy.',
];

export const acidiSalicyliciVaseliniFlaviRecipe: {
    id: string;
    name: string;
    formData: Partial<ProtocolFormValues>;
} = {
    id: 'acidi_salicylici_vaselini_flavi',
    name: 'Acidi salicylici + Vaselini flavi',

    formData: {
        dosageForm: 'ointment',
        totalAmount: 50,
        isSterile: false,

        ingredients: [
            {
                ingredientId: 'acidi_salicylici',
                amount: '5',
                producer: '',
                batch: '',
                expiryDate: '',
            },
            {
                ingredientId: 'vaselini_flavi',
                amount: 'ad 50',
                producer: '',
                batch: '',
                expiryDate: '',
            },
        ],

        extra: {
            packaging: 'tube_50',
            shelfLife: '30d',
            storage: 'roomTemperature',
            calculations: calculations.join('\n'),
            execution: execution.join('\n'),
            usage: 'Preparat o działaniu złuszczającym, odkażającym i natłuszczającym.',
            dosage: '1x2/db zewnętrznie',
            comment: '',
            tests: String(dosageFormTests['ointment']),
        },
    },
};
