import React from 'react';
import { PhotosList } from './components/PhotosList';
import { Layout } from '../layout/Layout'

function PhotosPage () {
    return (
        <Layout>
            <PhotosList />
        </Layout>
    )
}

export default PhotosPage