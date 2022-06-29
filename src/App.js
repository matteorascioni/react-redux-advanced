import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {uiActions} from './store/ui-slice';
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
    const sendCartData = async () => {
      dispatch(
        uiActions.showNotification({
          status: 'pending',
          title: 'Sending...',
          message: 'Sending cart data!',
        })
      );
      const response = await fetch(
        'https://react-redux-advanced-c3a9c-default-rtdb.firebaseio.com/cart.json',
        {
          method: 'PUT',
          body: JSON.stringify(cart),
        }
      );

      if (!response.ok) {
        throw new Error('Sending cart data failed.');
      }

      dispatch(
        uiActions.showNotification({
          status: 'success',
          title: 'Success!',
          message: 'Sent cart data successfully!',
        })
      );
    };

    if(isInitial) {
      isInitial = false;
      return;
    }

    sendCartData().catch(() => {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Sending cart data failed!',
        })
      );
    });
  }, [cart, dispatch,]);

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
