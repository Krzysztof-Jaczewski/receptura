export interface IngredientOption {
    id: string;
    name: string;
    category: 'active' | 'base' | 'vehicle' | 'compound';

    compound?: {
        ingredientId: string;
        percentage: number;
    }[];
}

export type DosageForm = 'ointment' | 'solution' | 'emulsion' | 'drops';
