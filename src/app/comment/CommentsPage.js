import React from 'react';
import { CommentsList } from './components/CommentsList'
import { FormComment } from '../form/FormComment'
import { Layout } from '../layout/Layout'

function CommentsPage() {
    return (
        <Layout>
            <CommentsList />
            <br/>
            <FormComment/>
        </Layout>
    )
}

export default CommentsPage