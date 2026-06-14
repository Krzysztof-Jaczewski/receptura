import { preparationSteps } from '@/data/preparations';

export const getPreparation = (isSterile: boolean) => {
    return isSterile ? preparationSteps.sterile : preparationSteps.nonSterile;
};
