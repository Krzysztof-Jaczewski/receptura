import { dosageForms } from '@/data/dosageForms';

export interface IngredientOption {
    id: string;
    name: string;
    category: 'active' | 'base' | 'vehicle' | 'compound';

    compound?: {
        ingredientId: string;
        percentage: number;
    }[];
}

export type DosageForm = (typeof dosageForms)[number]['value'];
