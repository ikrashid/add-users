import React, {useState} from 'react';
import Card from '../.././UI/Card/Card';
import Button from '../../UI/Button/Button';
import ErrorModal from '../../UI/ErrorModal/ErrorModal';
import styles from './AddUser.module.css';

const AddUser = props => {
    const [username, setUsername] = useState('');
    const [age, setAge] = useState('');
    const [error, setError] = useState('');

    const addUserHandler = (event) =>{
        event.preventDefault();
        if(username.trim().length < 1){
            setError({title: 'Invalid input', message: 'Please enter a valid name'});
            return;
        }
        if(age < 1){
            setError({title: 'Invalid age', message: 'Please enter a valid age ( > 0)'});
            return;
        }
        props.onAddUser({username, age});
        setUsername('');
        setAge('');
    }

    const setUsernameHandler = (event) => {
        setUsername(event.target.value);
    }
    const setAgeHandler = (event) => {
        setAge(event.target.value);
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
                <input id="username" type="text" onChange={setUsernameHandler} value={username}/>
                <label htmlFor="age">Age (Years)</label>
                <input id="age" type="number" onChange={setAgeHandler} value={age}/>
                <Button type="submit">Add User</Button>
                </form>
            </Card>
         </div>
    )
}

export default AddUser;