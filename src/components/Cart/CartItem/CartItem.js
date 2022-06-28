import React from 'react';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../../store/cart-slice';
import Button from '../../Button/Button';

import styles from './CartItem.module.css';

const CartItem = (props) => {
  const { title, quantity, total, price, id} = props.item;
  const dispatch = useDispatch();

  const removeItemHandler = () => {
    dispatch(cartActions.removeItemFromCart(id));
  }

  const addItemHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        title,
        price,
    }));
  }

  return (
    <li className={styles.container}>
      <div>
        {/* title */}
        <h3 className={styles.title}>{title}</h3>
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
          <Button 
            onClick={removeItemHandler} 
            className={styles.button}
          >
            -
          </Button>
          <Button 
            onClick={addItemHandler} 
            className={styles.button}
          >
            +
          </Button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
