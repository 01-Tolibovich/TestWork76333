import React from 'react';
import styles from './LoadingSpinner.module.scss';

interface LoadingSpinnerProps {
  className?: string;
}
export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  className,
}) => {
  return (
    <div className={`${styles.spinner} ${className}`}>
      <div className={styles.loader}></div>
    </div>
  );
};
