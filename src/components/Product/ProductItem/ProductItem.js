import { useDispatch } from 'react-redux';
import { cartActions } from '../../../store/cart/cart-slice';
import Card from '../../Card/Card';
import Button from '../../Button/Button';

import styles from './ProductItem.module.css';

const ProductItem = ({id, title, price, description}) => {  
  const dispatch = useDispatch();  

  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        title,
        price, 
    }));
  }
  
  return (
    <li className={styles.container}>
      <Card>
        {/* title and price container */}
        <div className={styles.titleAndPriceContainer}>
          <h3>{title}</h3>
          {/* Price */}
          <div className={styles.price}>${price.toFixed(2)}</div>
        </div>
        {/* Description */}
        <p className={styles.description}>{description}</p>
        {/* Button container */}
        <div className={styles.buttonContainer}>
          <Button onClick={addToCartHandler}>
            Add to Cart
          </Button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
