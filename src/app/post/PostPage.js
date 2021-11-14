import React from 'react';
import { PostList } from './components/PostList'
import { FormPost } from '../form/FormPost'
import { Layout } from '../layout/Layout'

function PostPage () {
    return (
            <Layout>
                <PostList />
                <br/>
                <FormPost/>
            </Layout>
    )
}

export default PostPage