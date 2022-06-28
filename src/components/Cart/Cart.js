import React from 'react';
import Card from '../Card/Card';
import CartItem from './CartItem/CartItem';

import styles from './Cart.module.css';

const Cart = () => {
  return (
    <Card className={styles.container}>
      {/* Headline */}
      <h2 className={styles.headline}>
        Your Shopping Cart
      </h2>
      {/* List */}
      <ul className={styles.list}>
        <CartItem
          item={{ title: 'Test Item', quantity: 3, total: 18, price: 6 }}
        />
      </ul>
    </Card>
  );
};

export default Cart;
