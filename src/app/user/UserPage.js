import React from 'react';
import { UserList } from './components/UserList'
import { Layout } from '../layout/Layout'

function UserPage (){

    return (
        <Layout>
            <h1>User List</h1>
            <hr />
            <UserList />
        </Layout>
    )
}

export default UserPage