import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetAlbumsList } from '../../redux/actions/album/GetAlbumsList';
import { GetPhotosList } from '../../redux/actions/photo/GetPhotosList';
import { Link, useParams } from 'react-router-dom'
import { Card, Button, Row, Container } from 'react-bootstrap'

const PhotosList = React.memo(() => {

    const { GetPhotosListResult, 
            GetPhotosListLoading, 
            GetPhotosListError 
        } = useSelector((state) => state.Photo)

    const { GetAlbumsListResult, 
            GetAlbumsListLoading, 
            GetAlbumsListError 
        } = useSelector((state) => state.Album)

    const dispatch = useDispatch();
    const params = useParams();

    useEffect(() => {
        dispatch(GetAlbumsList(params.userid))
        dispatch(GetPhotosList(params.albumid))
    }, [dispatch])
    
    return (
        <Container>
            <Row>
                <h1>{GetAlbumsListResult[params.albumid - 1]?.title}</h1>
                <hr />
                {GetPhotosListResult ? (
                    GetPhotosListResult.map(photo => {
                        return (
                            <Card style={{ width: '18rem', margin: '20px' }} key={photo.id}>
                                <Card.Img variant="top" src={photo.thumbnailUrl} alt={photo.title} />
                                <Card.Body>
                                    <Card.Title>{photo.title}</Card.Title>
                                    <Link to={`/DetailPhoto/${photo.id}`}><Button variant="primary">View Photo</Button></Link>
                                </Card.Body>
                            </Card>
                        )
                    })
                ) : GetPhotosListLoading ? (
                    <p>Loading.....</p>
                ) : (
                    <p>{GetPhotosListError ? GetPhotosListError : "Data Kosong"}</p>
                )}
            </Row>
        </Container>
    )
})

export { PhotosList }