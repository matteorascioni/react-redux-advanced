import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../../store/ui-slice';

import styles from './CartButton.module.css';

const CartButton = () => {
  const dispatch = useDispatch();
  const cartQuantity = useSelector(state => state.cart.totalQuantity);

  const toggleCartHandler = () => {
    dispatch(uiActions.toggle());
  }

  return (
    <button
      className={styles.container}
      onClick={toggleCartHandler}
    >
      {/* Title */}
      <span className={styles.title}>My Cart</span>
      {/* Badge */}
      <span className={styles.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
