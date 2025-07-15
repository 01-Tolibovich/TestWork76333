export const validateForm = (username: string, password: string) => {
  const errors: { username?: string; password?: string } = {};

  if (!username || username.trim().length < 3) {
    errors.username = 'Username must be at least 3 characters long';
  }

  if (!password || password.trim().length < 3) {
    errors.password = 'Password must be at least 3 characters long';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};
