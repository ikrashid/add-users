import React from 'react';
import Card from '../../UI/Card/Card';
import styles from './UsersList.module.css';

const UsersList = (props) =>{

    return (
        <Card className={ props.users.length > 0 ? styles.users : ''}>
            <ul>
                {props.users.map((user, id) =>                   
                    <li key = {id}>{user.username} ({user.age} years old)</li>
                )}
            </ul>
        </Card>
    )
}

export default UsersList;