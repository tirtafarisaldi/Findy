import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetUsersList } from '../redux/actions/GetUsersList';
import { Link } from 'react-router-dom'

function UserList() {
    const { GetUsersListResult, GetUsersListLoading, GetUsersListError } = useSelector((state) => state.User)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(GetUsersList())
    }, [dispatch])

    return (
        <div>
            {GetUsersListResult ? (
                GetUsersListResult.map(user => {
                    return (
                        <>
                            <p key={user.id}>{user.name}</p>
                            <Link to={`/PostsList/${user.id}`} className="ui blue inverted button">View Posts User</Link>
                            <Link to={`/AlbumsList/${user.id}`} className="ui violet inverted button">View Albums User</Link>
                            <hr />
                        </>

                    )
                })
            ) : GetUsersListLoading ? (
                <p>Loading.....</p>
            ) : (
                <p>{GetUsersListError ? GetUsersListError : "Data Kosong"}</p>
            )}
        </div>
    )
}

export { UserList }