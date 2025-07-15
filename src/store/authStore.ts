import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { AuthState, LoginCredentials } from '../types';
import { authAPI } from '../services/api';

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      isAuthenticated: false,
      isLoading: false,

      login: async (credentials: LoginCredentials) => {
        try {
          set({ isLoading: true });
          const user = await authAPI.login(credentials);

          // Store token in localStorage
          if (typeof window !== 'undefined') {
            localStorage.setItem('token', user.token);
          }

          set({
            user,
            isAuthenticated: true,
            isLoading: false,
          });
        } catch (error) {
          set({ isLoading: false });
          throw error;
        }
      },

      logout: () => {
        if (typeof window !== 'undefined') {
          localStorage.removeItem('token');
        }
        set({
          user: null,
          isAuthenticated: false,
        });
      },

      checkAuth: () => {
        if (typeof window !== 'undefined') {
          const token = localStorage.getItem('token');
          if (token) {
            // In a real app, you'd verify the token with the server
            // For now, we'll just check if token exists
            set({ isAuthenticated: true });
          }
        }
      },
    }),
    {
      name: 'auth-storage',
      partialize: (state) => ({
        user: state.user,
        isAuthenticated: state.isAuthenticated,
      }),
    }
  )
);
