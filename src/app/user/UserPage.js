import React from 'react';
import { UserList } from './components/UserList'

function UserPage (){

    return (
        <div style={{ padding: "30px" }}>
            <h1>User List</h1>
            <hr />
            <UserList />
        </div>
    )
}

export default UserPage