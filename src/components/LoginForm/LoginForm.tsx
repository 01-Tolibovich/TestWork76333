'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../hooks/useAuth';
import { validateForm } from '../../utils/validation';
import styles from './LoginForm.module.scss';
import { LoadingSpinner } from '@/features';

export const LoginForm: React.FC = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [errors, setErrors] = useState<{
    username?: string;
    password?: string;
    general?: string;
  }>({});
  
  const { login, isLoading } = useAuth();
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear specific field error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const validation = validateForm(formData.username, formData.password);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setErrors({});
    const result = await login(formData);
    
    if (result.success) {
      router.push('/');
    } else {
      setErrors({ general: result.error || 'Login failed' });
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h1 className={styles.title}>Login</h1>
        {errors.general && (
          <div className={styles.errorMessage}>
            {errors.general}
          </div>
        )}
        
        <div className={styles.field}>
          <label htmlFor="username" className={styles.label}>
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className={`${styles.input} ${errors.username ? styles.inputError : ''}`}
            disabled={isLoading}
            placeholder="Enter your username"
          />
          {errors.username && (
            <span className={styles.fieldError}>{errors.username}</span>
          )}
        </div>
        
        <div className={styles.field}>
          <label htmlFor="password" className={styles.label}>
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className={`${styles.input} ${errors.password ? styles.inputError : ''}`}
            disabled={isLoading}
            placeholder="Enter your password"
          />
          {errors.password && (
            <span className={styles.fieldError}>{errors.password}</span>
          )}
        </div>
        
        <button
          type="submit"
          disabled={isLoading}
          className={styles.submitBtn}
        >
          {isLoading ? <LoadingSpinner className={styles.loading} /> : 'Login'}
        </button>
        
        <div className={styles.testCredentials}>
          <p>Test credentials:</p>
          <p><strong>Username: </strong>emilys</p>
          <p><strong>Password: </strong>emilyspass</p>
        </div>
      </form>
    </div>
  );
};
