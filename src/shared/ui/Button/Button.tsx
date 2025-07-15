import { FC, ReactNode } from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string
}

export const Button: FC<ButtonProps> = ({ children, onClick, className }) => {
  return <button onClick={onClick} className={`${styles.button} ${className}`}>{children}</button>;
};
