import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { ProtocolFormValues } from '@/lib/schemas/protocolSchema';

interface ProtocolStore {
    formData: ProtocolFormValues | null;
    setFormData: (data: ProtocolFormValues) => void;
    clearFormData: () => void;
}

export const useProtocolStore = create<ProtocolStore>()(
    persist(
        (set) => ({
            formData: null,

            setFormData: (data) => set({ formData: data }),

            clearFormData: () => set({ formData: null }),
        }),
        {
            name: 'protocol-storage',
        },
    ),
);
