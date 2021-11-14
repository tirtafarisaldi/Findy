import React from 'react';
import { AlbumsList } from './components/AlbumsList'
import { Layout } from '../layout/Layout'

function AlbumsPage() {
    return (
        <Layout>
            <AlbumsList/>
        </Layout>
    )
}

export default AlbumsPage