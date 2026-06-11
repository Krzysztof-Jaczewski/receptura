import { ProtocolFormValues } from '@/lib/schemas/protocolSchema';
import { create } from 'zustand';

type Store = {
    formData: ProtocolFormValues | null;
    setFormData: (data: ProtocolFormValues) => void;
};

export const useProtocolStore = create<Store>((set) => ({
    formData: null,
    setFormData: (data) => set({ formData: data }),
}));
