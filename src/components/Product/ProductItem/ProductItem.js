import Card from '../../Card/Card';
import Button from '../../Button/Button';

import styles from './ProductItem.module.css';

const ProductItem = ({title, price, description}) => {
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
          <Button>Add to Cart</Button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
