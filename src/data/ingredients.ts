import { IngredientOption } from '@/types/types';

export const ingredientOptions: IngredientOption[] = [
    {
        id: 'acidi_borici',
        name: 'Acidi borici',
        category: 'active',
    },
    {
        id: 'acidi_salicylici',
        name: 'Acidi salicylici',
        category: 'active',
    },
    {
        id: 'anaesthesini',
        name: 'Anaesthesini',
        category: 'active',
    },
    {
        id: 'aquae_purificatae',
        name: 'Aquae purificatae',
        category: 'vehicle',
    },
    {
        id: 'detreomycini',
        name: 'Detreomycini',
        category: 'active',
    },
    {
        id: 'ethanoli_70',
        name: 'Ethanoli 70%',
        category: 'vehicle',
    },
    {
        id: 'ethanoli_96',
        name: 'Ethanoli 96%',
        category: 'vehicle',
    },
    {
        id: 'eucerini',
        name: 'Eucerini',
        category: 'base',
    },
    {
        id: 'glyceroli',
        name: 'Glyceroli',
        category: 'vehicle',
    },
    {
        id: 'hydrocortisoni',
        name: 'Hydrocortisoni',
        category: 'active',
    },
    {
        id: 'lanolini',
        name: 'Lanolini',
        category: 'base',
    },
    {
        id: 'mentholi',
        name: 'Mentholi',
        category: 'active',
    },
    {
        id: 'neomycini_sulfatis',
        name: 'Neomycini sulfatis',
        category: 'active',
    },
    {
        id: 'nystatini',
        name: 'Nystatini',
        category: 'active',
    },
    {
        id: 'parafini_liquidi',
        name: 'Parafini liquidi',
        category: 'vehicle',
    },
    {
        id: 'talci_veneti',
        name: 'Talci veneti',
        category: 'active',
    },
    {
        id: 'urea',
        name: 'Urea',
        category: 'active',
    },
    {
        id: 'ung_cholesteroli',
        name: 'Ung. cholesteroli',
        category: 'base',
    },
    {
        id: 'vaselini_albi',
        name: 'Vaselini albi',
        category: 'base',
    },
    {
        id: 'vaselini_flavi',
        name: 'Vaselini flavi',
        category: 'base',
    },
    {
        id: 'vit_a_liq',
        name: 'Vit. A liq.',
        category: 'active',
    },
    {
        id: 'vit_e_liq',
        name: 'Vit. E liq.',
        category: 'active',
    },
    {
        id: 'zinci_oxydi',
        name: 'Zinci oxydi',
        category: 'active',
    },
    {
        id: 'sol_ac_borici_1',
        name: '1% Sol. Ac. borici',
        category: 'compound',
        compound: [
            {
                ingredientId: 'acidi_borici',
                percentage: 1,
            },
            {
                ingredientId: 'aquae_purificatae',
                percentage: 99,
            },
        ],
    },
    {
        id: 'sol_ac_borici_3',
        name: '3% Sol. Ac. borici',
        category: 'compound',
        compound: [
            {
                ingredientId: 'acidi_borici',
                percentage: 3,
            },
            {
                ingredientId: 'aquae_purificatae',
                percentage: 97,
            },
        ],
    },
];
