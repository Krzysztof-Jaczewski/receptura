import { IngredientOption } from '@/types/types';

export const ingredientOptions: IngredientOption[] = [
    {
        id: 'acidi_borici',
        name: 'Acidi borici',
        category: 'active',
        producer: 'Fagron',
    },
    {
        id: 'acidi_salicylici',
        name: 'Acidi salicylici',
        category: 'active',
        producer: 'Fagron',
    },
    {
        id: 'anaesthesini',
        name: 'Anaesthesini',
        category: 'active',
        producer: 'Fagron',
    },
    {
        id: 'aquae_purificatae',
        name: 'Aquae purificatae',
        category: 'vehicle',
        producer: 'Actifarm',
    },
    {
        id: 'detreomycini',
        name: 'Chloramfenicol',
        category: 'active',
        producer: 'Fagron',
    },
    {
        id: 'devikap',
        name: 'Devikap sol.',
        category: 'active',
        producer: 'Polfarma',
    },

    {
        id: 'ethanoli_70',
        name: 'Ethanoli 70%',
        category: 'vehicle',
        producer: 'Amara',
    },
    {
        id: 'ethanoli_96',
        name: 'Ethanoli 96%',
        category: 'vehicle',
        producer: 'Amara',
    },
    {
        id: 'encortoloni',
        name: 'Prednisoloni',
        category: 'base',
        producer: 'Fagron',
    },
{
        id: 'erythromycini',
        name: 'Erythromycini',
        category: 'base',
        producer: 'Amara',
    },
    {
        id: 'eucerini',
        name: 'Eucerini',
        category: 'base',
        producer: 'Fagron',
    },
    {
        id: 'glyceroli',
        name: 'Glyceroli',
        category: 'vehicle',
        producer: 'Fagron',
    },
    {
        id: 'glycerini',
        name: 'Glyceryni',
        category: 'vehicle',
        producer: 'Fagron',
    },
    {
        id: 'hascobaza',
        name: 'Hascobaza',
        category: 'base',
        producer: 'Hacso',
    },
    {
        id: 'hydrocortisoni',
        name: 'Hydrocortisoni',
        category: 'active',
        producer: 'Fagron',
    },
    {
        id: 'lanolini',
        name: 'Lanolini',
        category: 'base',
        producer: 'Fagron',
    },
    {
        id: 'lekobaza',
        name: 'Lekobaza',
        category: 'base',
        producer: 'Fagron',
    },
    {
        id: 'lidoposterini',
        name: 'Lidoposterini',
        category: 'base',
        producer: 'Dr. Kade',
    },
    {
        id: 'linomag',
        name: 'Linomag sol',
        category: 'base',
        producer: 'Ziołolek',
    },
    {
        id: 'mentholi',
        name: 'Mentholi',
        category: 'active',
        producer: 'Fagron',
    },
{
        id: 'metronidazoli',
        name: 'Metronidazoli',
        category: 'active',
        producer: 'Amara',
    },
    {
        id: 'neomycini_sulfatis',
        name: 'Neomycini sulfatis',
        category: 'active',
        producer: 'Fagron',
    },
    {
        id: 'nystatini',
        name: 'Nystatini',
        category: 'active',
        producer: 'Fagron',
    },
    {
        id: 'oleum_menthae_piperitae',
        name: 'Oleum menthae pip. gtt',
        category: 'active',
        producer: 'Fagron',
    },
    {
        id: 'parafini_liquidi',
        name: 'Parafini liquidi',
        category: 'vehicle',
        producer: 'Fagron',
    },
    {
        id: 'talci_veneti',
        name: 'Talci veneti',
        category: 'active',
        producer: 'Fagron',
    },
    {
        id: 'urea',
        name: 'Urea',
        category: 'active',
        producer: 'Fagron',
    },
    {
        id: 'ung_cholesteroli',
        name: 'Ung. cholesteroli',
        category: 'base',
        producer: 'Fagron',
    },
    {
        id: 'ung_nitrocardi',
        name: 'Ung. Nitrocardi',
        category: 'base',
        producer: 'Chema',
    },
    {
        id: 'vaselini_albi',
        name: 'Vaselini albi',
        category: 'base',
        producer: 'Fagron',
    },
    {
        id: 'vaselini_flavi',
        name: 'Vaselini flavi',
        category: 'base',
        producer: 'Fagron',
    },
    {
        id: 'vit_a',
        name: 'Vit. A',
        category: 'active',
        producer: 'Fagron',
    },
    {
        id: 'vit_e',
        name: 'Vit. E',
        category: 'active',
        producer: 'Fagron',
    },
    {
        id: 'vit_a_liq',
        name: 'Vit. A liq.',
        category: 'active',
        producer: 'Hasco',
    },
    {
        id: 'vit_e_liq',
        name: 'Vit. E liq.',
        category: 'active',
        producer: 'Polfarma',
    },
    {
        id: 'zinci_oxydi',
        name: 'Zinci oxydi',
        category: 'active',
        producer: 'Fagron',
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
