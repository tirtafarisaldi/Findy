import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
<<<<<<< HEAD:src/components/Users/UserList.js
import { GetUsersList } from '../../redux/actions/user/GetUsersList';
=======
import { GetUsersList } from '../redux/actions/GetUsersList';
>>>>>>> parent of d125edf (Folder Restructure):src/components/UserList.js
import { Link } from 'react-router-dom'
import { ListGroup, Button } from 'react-bootstrap'

function UserList() {
    const { GetUsersListResult, GetUsersListLoading, GetUsersListError } = useSelector((state) => state.User)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(GetUsersList())
    }, [dispatch])

    return (
        <ListGroup>
            {GetUsersListResult ? (
                GetUsersListResult.map(user => {
                    return (
                        <ListGroup.Item>
                            <h5 key={user.id}>{user.name} (@{user.username})</h5>
                            <br />
                            <p class="blockquote-footer">{user.email}</p>
                            <Link to={`/PostsList/${user.id}`}><Button variant="outline-primary">View Posts User</Button></Link>
                            {" "}
                            <Link to={`/AlbumsList/${user.id}`}><Button variant="outline-success">View Albums User</Button></Link>
                        </ListGroup.Item>

                    )
                })
            ) : GetUsersListLoading ? (
                <p>Loading.....</p>
            ) : (
                <p>{GetUsersListError ? GetUsersListError : "Data Kosong"}</p>
            )}
        </ListGroup>
    )
}

export { UserList }