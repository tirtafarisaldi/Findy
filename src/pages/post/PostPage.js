import React from 'react';
import { PostList } from '../../components/post/PostList'
import { FormPost } from '../../components/post/FormPost'

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