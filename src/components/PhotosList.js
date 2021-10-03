import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetAlbumsList } from '../redux/actions/GetAlbumsList';
import { GetPhotosList } from '../redux/actions/GetPhotosList';
import { Link, useParams } from 'react-router-dom'

const PhotosList = () => {
    const { GetPhotosListResult, GetPhotosListLoading, GetPhotosListError } = useSelector((state) => state.Photo)
    const { GetAlbumsListResult, GetAlbumsListLoading, GetAlbumsListError } = useSelector((state) => state.Album)
    const dispatch = useDispatch();
    const params = useParams();

    useEffect(() => {
        dispatch(GetAlbumsList(params.userid))
        dispatch(GetPhotosList(params.albumid))
    }, [dispatch])
    console.log(GetAlbumsListResult)
    return (
        <div>
            <h1>{GetAlbumsListResult[params.albumid - 1]?.title}</h1>
            <hr />
            {GetPhotosListResult ? (
                GetPhotosListResult.map(photo => {
                    return (
                        <div key={photo.id}>
                            <p>{photo.title}</p>
                            <Link to={`/DetailPhoto/${photo.id}`} className="ui blue inverted button">View Photo</Link>
                            <hr />
                        </div>
                    )
                })
            ) : GetPhotosListLoading ? (
                <p>Loading.....</p>
            ) : (
                <p>{GetPhotosListError ? GetPhotosListError : "Data Kosong"}</p>
            )}
        </div>
    )
}

export { PhotosList }