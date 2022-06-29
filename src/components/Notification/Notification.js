import React from 'react';

import styles from './Notification.module.css';

const Notification = ({headline, message, status,}) => {
  let specialClasses = '';

  if (status === 'error') {
    specialClasses = styles.error;
  }
  if (status === 'success') {
    specialClasses = styles.success;
  }

  const cssClasses = `${styles.notification} ${specialClasses}`;

  return (
    <section className={cssClasses}>
        {/* Headline */}
        <h2 className={styles.headline}>
            {headline}
        </h2>
        {/* Message */}
        <p className={styles.message}>
            {message}
        </p>
    </section>
  );
};

export default Notification;