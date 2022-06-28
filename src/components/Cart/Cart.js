import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../Card/Card';
import CartItem from './CartItem/CartItem';

import styles from './Cart.module.css';

const Cart = () => {
  const cartItems = useSelector(state => state.cart.items);

  return (
    <Card className={styles.container}>
      {/* Headline */}
      <h2 className={styles.headline}>
        Your Shopping Cart
      </h2>
      {/* List */}
      <ul className={styles.list}>
        {cartItems.map((item) => {
          return(
            <CartItem
              key={item.id}
              item={{ 
                id: item.id,
                title: item.name,
                quantity: item.quantity,
                total: item.totalPrice,
                price: item.price,
              }}
            />
          )
        })}
      </ul>
    </Card>
  );
};

export default Cart;
