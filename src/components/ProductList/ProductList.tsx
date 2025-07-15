'use client';

import React from 'react';
import { useProducts } from '../../hooks/useProducts';
import styles from './ProductList.module.scss';
import { LoadingSpinner, ProductCard } from '@/features';

export const ProductList: React.FC = () => {
  const { products, loading, error, refetch } = useProducts(12);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return (
      <div className={styles.error}>
        <p>{error}</p>
        <button onClick={refetch} className={styles.retryBtn}>
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Products</h1>
      <div className={styles.grid}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
