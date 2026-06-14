import { getIngredientById } from './getIngredientById';

export const resolveIngredient = (id: string, amount: number) => {
    const ingredient = getIngredientById(id);

    if (!ingredient) return [];

    // normalny składnik
    if (ingredient.category !== 'compound') {
        return [
            {
                name: ingredient.name,
                amount,
            },
        ];
    }

    // compound → rozbicie
    return (
        ingredient.compound?.map((part) => {
            const sub = getIngredientById(part.ingredientId);

            return {
                name: sub?.name ?? part.ingredientId,
                amount: (amount * part.percentage) / 100,
            };
        }) ?? []
    );
};
