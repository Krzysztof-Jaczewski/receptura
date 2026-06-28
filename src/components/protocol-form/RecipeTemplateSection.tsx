'use client';

import { BookOpen } from 'lucide-react';
import { UseFormReset } from 'react-hook-form';

import { ProtocolFormValues } from '@/lib/schemas/protocolSchema';
import { recipeTemplates } from '@/data/recipes';

type Props = {
    reset: UseFormReset<ProtocolFormValues>;
};

const section =
    'bg-white border rounded-xl p-4 shadow-sm space-y-3 text-[12px]';

const input =
    'border rounded-lg px-3 py-2 text-sm w-full focus:ring-2 focus:ring-blue-500 focus:outline-none';

const RecipeTemplateSection = ({ reset }: Props) => {
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const recipe = recipeTemplates.find((r) => r.id === e.target.value);

        if (recipe) {
            reset(recipe.formData);
        }
    };

    return (
        <div className={section}>
            <div className='flex items-center gap-2 font-semibold'>
                <BookOpen className='w-5 h-5 text-indigo-600' />
                Szablon receptury
            </div>

            <div>
                <p className='text-xs font-medium text-gray-600 mb-1'>
                    Wybierz gotową recepturę
                </p>

                <select
                    defaultValue=''
                    onChange={handleChange}
                    className={input}
                >
                    <option value=''>-- Wybierz recepturę --</option>

                    {recipeTemplates.map((recipe) => (
                        <option key={recipe.id} value={recipe.id}>
                            {recipe.name}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default RecipeTemplateSection;
