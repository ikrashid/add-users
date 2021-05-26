import React from 'react';
import Card from '../Card/Card';
import Button from '../Button/Button';
import styles from './ErrorModal.module.css';

const ErrorModal = (props) =>{
    return (
    <div className={styles.backdrop} onClick={props.onConfirm}>
        <Card className={styles.modal}>
            <header className={styles.header}>
                <h2>{props.title}</h2>
            </header>
            <div className={styles.content}>
                <p>{props.message}</p>
            </div>
            <footer className={styles.actions}><Button onClick={props.onConfirm}>OK</Button></footer>
        </Card>
    </div>
    )
}

export default ErrorModal;
