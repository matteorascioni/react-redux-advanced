import React from 'react';
import ProductItem from './ProductItem/ProductItem';

import styles from './Product.module.css';

const Products = () => {
  return (
    <section>
      {/* Headline */}
      <h2 className={styles.headline}>Buy your favorite products</h2>
      {/* List */}
      <ul className={styles.list}>
        <ProductItem
          title='Test'
          price={6}
          description='This is a first product - amazing!'
        />
      </ul>
    </section>
  );
};

export default Products;
