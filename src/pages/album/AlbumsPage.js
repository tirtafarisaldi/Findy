import React, { useState } from 'react';
import { AlbumsList } from '../../components/album/AlbumsList'

function AlbumsPage() {
    return (
        <div style={{ padding: "30px" }}>
            <AlbumsList/>
        </div>
    )
}

export default AlbumsPage