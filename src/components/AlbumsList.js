import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
<<<<<<< HEAD:src/components/Albums/AlbumsList.js
import { GetUsersList } from '../../redux/actions/user/GetUsersList';
import { GetAlbumsList } from '../../redux/actions/album/GetAlbumsList';
=======
import { GetUsersList } from '../redux/actions/GetUsersList';
import { GetAlbumsList } from '../redux/actions/GetAlbumsList';
>>>>>>> parent of d125edf (Folder Restructure):src/components/AlbumsList.js
import { Link, useParams } from 'react-router-dom'
import { Card, Button, Row } from 'react-bootstrap'

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
        <Row>
            <h1>{GetUsersListResult[params.userid - 1]?.name}'s Albums</h1>
            <hr />
            {GetAlbumsListResult ? (
                GetAlbumsListResult.map(album => {
                    return (
                        <Card style={{ width: '18rem', margin: '5px' }} key={album.id}>
                            <Card.Header as="h6">{album.title}</Card.Header>
                            <br />
                            <Link to={`/PhotosList/${params.userid}/${album.id}`}><Button>View Photos List</Button></Link>
                        </Card>

                    )
                })
            ) : GetAlbumsListLoading ? (
                <p>Loading.....</p>
            ) : (
                <p>{GetAlbumsListError ? GetAlbumsListError : "Data Kosong"}</p>
            )}
        </Row>
    )
}

export { AlbumsList }