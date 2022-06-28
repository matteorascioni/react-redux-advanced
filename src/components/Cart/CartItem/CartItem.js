import React from 'react';
import Button from '../../Button/Button';

import styles from './CartItem.module.css';

const CartItem = (props) => {
  const { headline, quantity, total, price } = props.item;
  return (
    <li className={styles.container}>
      <div>
        {/* Headline */}
        <h3 className={styles.headline}>{headline}</h3>
        {/* Price */}
        <div className={styles.price}>
          ${total.toFixed(2)}{' '}
          {/* ItemPrice */}
          <span className={styles.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </div>
      {/* Details */}
      <div className={styles.details}>
        {/* Quantity */}
        <div className={styles.quantity}>
          {/* Quantity Span */}
          x <span className={styles.quantitySpan}>{quantity}</span>
        </div>
        {/* Buttons Container */}
        <div className={styles.buttonsContainer}>
          <Button className={styles.button}>-</Button>
          <Button className={styles.button}>+</Button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
