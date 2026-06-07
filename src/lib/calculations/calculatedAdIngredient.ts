export const calculateAdIngredient = (
    ingredients: {
        amount: string;
    }[],
) => {
    const adIngredient = ingredients.find((i) => /^ad/i.test(i.amount));

    if (!adIngredient) return ingredients;

    const target = Number(adIngredient.amount.replace(/^ad\s*/i, ''));

    const sumOthers = ingredients
        .filter((i) => i !== adIngredient)
        .reduce((sum, i) => sum + Number(i.amount), 0);

    const adAmount = target - sumOthers;

    return ingredients.map((i) =>
        i === adIngredient
            ? { ...i, calculatedAmount: adAmount }
            : { ...i, calculatedAmount: Number(i.amount) },
    );
};
