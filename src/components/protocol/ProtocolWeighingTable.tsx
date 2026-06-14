import { resolveIngredient } from '@/lib/ingredients/resolveIngredient';
import { Ingredient } from '@/lib/schemas/protocolSchema';
interface ProtocolWeighingTableProps {
    ingredients: Ingredient[];
}

export const ProtocolWeighingTable = ({
    ingredients,
}: ProtocolWeighingTableProps) => {
    return (
        <table className='w-full border rounded-lg overflow-hidden text-[11px]'>
            <thead>
                <tr className='bg-gray-100 border-b'>
                    <th className='text-left p-2'>Składnik</th>
                    <th className='text-center p-2'>Ilość</th>
                    <th className='text-left p-2'>Producent</th>
                    <th className='text-center p-2'>Seria</th>
                    <th className='text-center p-2'>Data ważności</th>
                </tr>
            </thead>

            <tbody>
                {ingredients.flatMap((ingredient, index) => {
                    const resolved = resolveIngredient(
                        ingredient.ingredientId,
                        Number(ingredient.amount),
                    );

                    return resolved.map((r, i) => (
                        <tr
                            key={`${index}-${i}`}
                            className='border-b last:border-b-0'
                        >
                            <td className='p-2'>{r.name}</td>

                            <td className='p-2 text-center'>
                                {r.amount.toFixed(2)} g
                            </td>

                            <td className='p-2'>{ingredient.producer}</td>

                            <td className='p-2 text-center'>
                                {ingredient.batch}
                            </td>

                            <td className='p-2 text-center'>
                                {ingredient.expiryDate}
                            </td>
                        </tr>
                    ));
                })}
            </tbody>
        </table>
    );
};
