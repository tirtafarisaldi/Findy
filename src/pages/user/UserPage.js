import React from 'react';
import { UserList } from '../../components/user/UserList'

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