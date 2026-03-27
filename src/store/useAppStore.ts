import { create } from 'zustand';

interface AppState {
  isSidebarOpen: boolean;
  patientViewMode: 'grid' | 'list';
  notificationsEnabled: boolean;
  toggleSidebar: () => void;
  setPatientViewMode: (mode: 'grid' | 'list') => void;
  setNotificationsEnabled: (enabled: boolean) => void;
}

export const useAppStore = create<AppState>((set) => ({
  isSidebarOpen: true,
  patientViewMode: 'grid',
  notificationsEnabled: false,
  toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
  setPatientViewMode: (mode) => set({ patientViewMode: mode }),
  setNotificationsEnabled: (enabled) => set({ notificationsEnabled: enabled }),
}));
