import React from 'react';
import styles from './Header.module.css';
import {useAppSelector} from "../../app/hooks";
import {headerImg} from "../../app/questionRedeucer";

const Header = () => {
    const headerImage = useAppSelector(headerImg);

    return (
        <header className={styles.Header}>
            <img alt={'spider man'} src={headerImage} className={styles.Img}/>
            <div className={styles.Title}>Gaming Habits Among Teenagers</div>
        </header>
    )
};

export default Header;
