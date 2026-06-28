export const calculateAdIngredient = (
    totalAmount: number,
    ingredients: {
        amount: string;
        calculatedAmount?: number;
    }[],
) => {
    const adIngredient = ingredients.find((i) => i.amount.includes('ad'));

    if (!adIngredient) return ingredients;

    const sumOthers = ingredients
        .filter((i) => i !== adIngredient)
        .reduce((sum, i) => sum + Number(i.calculatedAmount ?? i.amount), 0);

    const adAmount = totalAmount - sumOthers;

    return ingredients.map((i) =>
        i === adIngredient
            ? { ...i, calculatedAmount: adAmount }
            : {
                  ...i,
                  calculatedAmount: Number(i.calculatedAmount ?? i.amount),
              },
    );
};
