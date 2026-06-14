import { dosageFormTests } from '@/data/dosageForms';
import { DosageForm } from '@/types/types';

export const getTestsByDosageForm = (form: DosageForm) => {
    return dosageFormTests[form] ?? [];
};
