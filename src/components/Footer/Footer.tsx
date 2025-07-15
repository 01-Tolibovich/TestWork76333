'use client';

import React from 'react';
import { useAuthStore } from '../../store/authStore';
import styles from './Footer.module.scss';

export const Footer: React.FC = () => {
  const { isAuthenticated, user } = useAuthStore();
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.text}>
          {currentYear}
          {isAuthenticated && user && <span> • Logged as {user.email}</span>}
        </p>
      </div>
    </footer>
  );
};
