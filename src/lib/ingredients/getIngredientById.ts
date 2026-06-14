import { ingredientOptions } from '@/data/ingredients';

export const getIngredientById = (id: string) => {
    return ingredientOptions.find((item) => item.id === id);
};
