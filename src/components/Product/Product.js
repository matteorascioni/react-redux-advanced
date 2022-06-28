import React from 'react';
import ProductItem from './ProductItem/ProductItem';

import styles from './Product.module.css';

const DUMMY_PRODUCTS = [
  {
    id: 'p1',
    price: 6,
    title: 'My First Book',
    description: 'The first book I ever wrote',
  },
  {
    id: 'p2',
    price: 5,
    title: 'My Second Book',
    description: 'The second book I ever wrote',
  }
]

const Products = () => {
  return (
    <section>
      {/* Headline */}
      <h2 className={styles.headline}>Buy your favorite products</h2>
      {/* List */}
      <ul className={styles.list}>
        {DUMMY_PRODUCTS.map((product) => {
          return(
            <ProductItem
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              description={product.description}
            />
          )
        })}
      </ul>
    </section>
  );
};

export default Products;
