import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { sendCartData, fetchCartData } from './store/cart/cart-actions';
import Notification from './components/Notification/Notification';
import Cart from './components/Cart/Cart'
import Layout from './components/Layout/Layout';
import Products from './components/Product/Product';

let isInitial = true;

const App = () => {
  const dispatch = useDispatch();
  const cart = useSelector (state => state.cart);
  const showCart = useSelector(state => state.ui.cartIsVisible);
  const notification = useSelector(state => state.ui.notification);

  useEffect(() => {
    dispatch(fetchCartData());
  }, []);

  useEffect(() => {
      if(isInitial) {
        isInitial = false;
        return;
      }

      if(cart.changed) {
        dispatch(sendCartData(cart));
      }
  }, [cart, dispatch]);

  return (
    <>
      {notification && (
        <Notification 
          status={notification.status}
          title={notification.title} 
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
