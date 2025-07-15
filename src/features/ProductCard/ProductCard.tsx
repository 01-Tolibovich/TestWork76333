import React from 'react';
import Image from 'next/image';
import { Product } from '../../types';
import { useAuthStore } from '../../store/authStore';
import styles from './ProductCard.module.scss';
import { Button } from '@/shared/ui';
import { useProductStore } from '@/store/useProductStore';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { isAuthenticated } = useAuthStore();
  const addProduct = useProductStore(state => state.addProduct);

  const handleAddToCart = () => {
    addProduct(product);
  };

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image
          src={product.thumbnail}
          alt={product.title}
          width={300}
          height={200}
          className={styles.image}
        />
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{product.title}</h3>
        <p className={styles.category}>{product.category}</p>
        <div className={styles.price}>${product.price}</div>

        {isAuthenticated && (
          <Button onClick={handleAddToCart} className={styles.addToCartBtn}>Add to cart</Button>
        )}
      </div>
    </div>
  );
};
