import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
<<<<<<< HEAD:src/components/Photos/DetailPhoto.js
import { GetDetailPhoto } from '../../redux/actions/photo/GetDetailPhoto';
=======
import { GetDetailPhoto } from '../redux/actions/GetDetailPhoto';
>>>>>>> parent of d125edf (Folder Restructure):src/components/DetailPhoto.js
import { Link, useParams } from 'react-router-dom'

const DetailPhoto = () => {
    const { GetDetailPhotoResult, GetDetailPhotoLoading, GetDetailPhotoError } = useSelector((state) => state.Photo)
    const dispatch = useDispatch();
    const params = useParams();

    useEffect(() => {
        dispatch(GetDetailPhoto(params.photoid))
    }, [dispatch])

    console.log(params.photoid)
    return (

        <div>
            {GetDetailPhotoResult ? (
                <div>
                    <h1>{GetDetailPhotoResult.title}</h1>
                    <img src={GetDetailPhotoResult.url}></img>
                    <hr />
                </div>
            ) : GetDetailPhotoLoading ? (
                <p>Loading.....</p>
            ) : (
                <p>{GetDetailPhotoError ? GetDetailPhotoError : "Data Kosong"}</p>
            )}
        </div>
    )
}

export { DetailPhoto }