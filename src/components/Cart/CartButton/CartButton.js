import React from 'react';
import styles from './CartButton.module.css';

const CartButton = () => {
  return (
    <button className={styles.container}>
      {/* Title */}
      <span className={styles.title}>My Cart</span>
      {/* Badge */}
      <span className={styles.badge}>1</span>
    </button>
  );
};

export default CartButton;
