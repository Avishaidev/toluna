import React, {useEffect} from 'react';
import styles from './App.module.css';
import Header from "./components/Header/Header";
import Question from "./components/Question/Question";
import tolunaLogo from './assets/imgs/toluna-logo.png';
import { useAppSelector, useAppDispatch } from './app/hooks'
import {initData, appStatus} from "./app/questionRedeucer";
import BackButton from "./components/BackButton/BackButton";
import Button from "./components/Button/Button";

const App:React.FC<any> = () => {
    const status = useAppSelector(appStatus);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (status === 'init') {
            dispatch(initData());
        }
    }, [status, dispatch]);

    return (
        <div className={styles.App}>
            {status === 'loading' && <div >Loading...</div>}

            {
                status === 'loaded' && (
                    <>
                        <Header />
                        <div className={styles.Content}>
                            <Question />
                        </div>
                        <footer className={styles.Footer}>
                            <img src={tolunaLogo} className={styles.TolunaLogo} alt={'Toluna'}/>
                            <div className={styles.FooterButtons}>
                                <BackButton />
                                <Button label={'NEXT'} />
                            </div>
                        </footer>
                    </>
                )
            }

            {status === 'error' && (
                <div>Error, the backend moved to the dark side.</div>
            )}

        </div>
    );
}

export default App;