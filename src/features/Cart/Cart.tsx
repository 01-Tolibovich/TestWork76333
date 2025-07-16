'use client'

import { ShoppingCart } from 'lucide-react';
import styles from './Cart.module.scss';
import { useState } from 'react';
import { Button } from '@/shared/ui';
import { useProductStore } from '@/store/useProductStore';

export const Cart = () => {
  const [dropDown, setDropDown] = useState<boolean>(false);
  const products = useProductStore(state => state.products);

  console.log('products in cart store', products);
  

  return (
    <div className={styles.container}>
      <Button onClick={() => setDropDown(!dropDown)} className={styles.cart}>
        {products.length !== 0 && <small className={styles.count}>{products.length}</small>}
        <ShoppingCart />
      </Button>
    </div>
  );
};
