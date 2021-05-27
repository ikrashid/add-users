import React from 'react';
import ReactDOM from 'react-dom';
import Card from '../Card/Card';
import Button from '../Button/Button';
import styles from './ErrorModal.module.css';

const BackDrop = (props) =>(
    <div className={styles.backdrop} onClick={props.onConfirm}></div>
)

const Overlay = (props) => (
    <Card className={styles.modal}>
            <header className={styles.header}>
                <h2>{props.title}</h2>
            </header>
            <div className={styles.content}>
                <p>{props.message}</p>
            </div>
            <footer className={styles.actions}><Button onClick={props.onConfirm}>OK</Button></footer>
    </Card>
)


const ErrorModal = (props) =>{
    return (
        <>
            {ReactDOM.createPortal(<BackDrop onConfirm={props.onConfirm}/>, document.getElementById('backdrop-root'))}
            
            {ReactDOM.createPortal(<Overlay title={props.title} message={props.message} onConfirm={props.onConfirm}/>, document.getElementById('overlay-root'))}
        </>
    )
}

export default ErrorModal;
