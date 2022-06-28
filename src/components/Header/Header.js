import React from 'react';
import CartButton from '../Cart/CartButton/CartButton';

import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.container}>
      {/* Headline */}
      <h1 className={styles.headline}>ReduxCart</h1>
      <nav>
        {/* List */}
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <CartButton />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
