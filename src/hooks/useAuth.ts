import { useAuthStore } from '../store/authStore';
import { LoginCredentials } from '../types';

export const useAuth = () => {
  const { user, isAuthenticated, isLoading, login, logout } = useAuthStore();

  const handleLogin = async (credentials: LoginCredentials) => {
    try {
      await login(credentials);
      return { success: true };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Login failed',
      };
    }
  };

  return {
    user,
    isAuthenticated,
    isLoading,
    login: handleLogin,
    logout,
  };
};
