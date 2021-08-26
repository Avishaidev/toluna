import React from 'react';
import styles from './BackButton.module.css';
import {AiOutlineLeft} from 'react-icons/ai';

const BackButton = () => (
  <button className={styles.BackButton} type={'button'}>
    <div className={styles.ButtonContent}>
        <svg width="0" height="0">
            <linearGradient id="gradient-color" x1="100%" y1="100%" x2="0%" y2="0%">
                <stop stopColor="#6dd5ed" offset="0%" />
                <stop stopColor="#2193b0" offset="100%" />
            </linearGradient>
        </svg>
        <AiOutlineLeft className={styles.Icon} />
    </div>
  </button>
);

export default BackButton;
