import React from 'react';
import styles from './Button.module.css';

interface ButtonProps {
    label:string,
}

const Button:React.FC<ButtonProps> = ({ label }) => {
    return (
        <button className={styles.Button} type={"button"}>
            <span className={styles.Label}>{label}</span>
        </button>
    );
};

export default Button;
