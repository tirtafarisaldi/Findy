import React from 'react';
import { PostList } from '../../components/Posts/PostList'
import { FormPost } from '../../components/Posts/FormPost'

const PostPage = () => {
    return (
        <div>
            <div style={{ padding: "30px" }}>
                <PostList />
            </div>
        </div>
    )
}

export default PostPage