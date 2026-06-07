import { create } from 'zustand';
import { ProtocolFormValues } from '@/types/types';

type Store = {
    formData: ProtocolFormValues | null;
    setFormData: (data: ProtocolFormValues) => void;
};

export const useProtocolStore = create<Store>((set) => ({
    formData: null,
    setFormData: (data) => set({ formData: data }),
}));
