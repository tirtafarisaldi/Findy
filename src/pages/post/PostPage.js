import React from 'react';
import { PostList } from '../../components/post/PostList'
import { FormPost } from '../../components/post/FormPost'

function PostPage () {
    return (
        <div>
            <div style={{ padding: "30px" }}>
                <PostList />
                <br/>
                <FormPost/>
            </div>
        </div>
    )
}

export default PostPage