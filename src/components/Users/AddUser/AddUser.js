import React, {useState, useRef} from 'react';
import Card from '../.././UI/Card/Card';
import Button from '../../UI/Button/Button';
import ErrorModal from '../../UI/ErrorModal/ErrorModal';
import styles from './AddUser.module.css';

const AddUser = props => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();

    const [error, setError] = useState('');

    const addUserHandler = (event) =>{
        event.preventDefault();
        const name = nameInputRef.current.value;
        const age = ageInputRef.current.value
        if(name.trim().length < 1){
            setError({title: 'Invalid input', message: 'Please enter a valid name'});
            return;
        }
        if(age < 1){
            setError({title: 'Invalid age', message: 'Please enter a valid age ( > 0)'});
            return;
        }
        props.onAddUser({name, age});
        // actual dom node 
        // should rarely directly manipulate the dom like this
        nameInputRef.current.value = '';
        ageInputRef.current.value = '';
    }


    const errorHandler = () =>{
        setError(null);
    }
    
    return (
        <div>
            { error ? (<ErrorModal onConfirm={errorHandler} title={error.title} message={error.message}/>) : ''}
            <Card className={styles.input}>
                <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input id="username" 
                    type="text" 
                    ref = {nameInputRef}
                />
                <label htmlFor="age">Age (Years)</label>
                <input id="age" 
                    type="number" 
                    ref={ageInputRef}
                />
                <Button type="submit">Add User</Button>
                </form>
            </Card>
         </div>
    )
}

export default AddUser;