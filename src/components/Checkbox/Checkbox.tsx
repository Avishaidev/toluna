import React from 'react';
import styles from './Checkbox.module.css';

const Checkbox = () => (
  <div className={styles.Checkbox}>
    <label className={styles.Label}>
      <input type={'checkbox'} className={styles.Input} />
        <span className={styles.Rectangular} />
    </label>
  </div>
);

export default Checkbox;
