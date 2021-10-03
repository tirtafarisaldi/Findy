import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetUsersList } from '../redux/actions/GetUsersList';
import { GetAlbumsList } from '../redux/actions/GetAlbumsList';
import { Link, useParams } from 'react-router-dom'

const AlbumsList = () => {
    const { GetAlbumsListResult, GetAlbumsListLoading, GetAlbumsListError } = useSelector((state) => state.Album)
    const { GetUsersListResult, GetUsersListLoading, GetUsersListError } = useSelector((state) => state.User)
    const dispatch = useDispatch()
    const params = useParams()

    useEffect(() => {
        dispatch(GetUsersList())
        dispatch(GetAlbumsList(params.userid))
    }, [dispatch])
    return (
        <div>
            <h1>{GetUsersListResult[params.userid - 1]?.name}</h1>
            <hr />
            {GetAlbumsListResult ? (
                GetAlbumsListResult.map(album => {
                    return (
                        <div key={album.id}>
                            <p>{album.title}</p>
                            <Link to={`/PhotosList/${params.userid}/${album.id}`} className="ui blue inverted button">View Photos List</Link>
                            <hr />
                        </div>

                    )
                })
            ) : GetAlbumsListLoading ? (
                <p>Loading.....</p>
            ) : (
                <p>{GetAlbumsListError ? GetAlbumsListError : "Data Kosong"}</p>
            )}
        </div>
    )
}

export { AlbumsList }