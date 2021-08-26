import React from 'react';
import styles from './TrashButton.module.css';
import {BsTrashFill} from "react-icons/bs";

interface TrashButtonProps {
    handleOnClick():void
}

const TrashButton:React.FC<TrashButtonProps> = ({ handleOnClick }) => {
    return (
        <button className={styles.TrashButton} type={'button'} onClick={handleOnClick}>
            <BsTrashFill className={styles.Icon}/>
        </button>
    );
};

export default TrashButton;
