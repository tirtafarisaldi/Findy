import React from 'react';
import { CommentsList } from './components/CommentsList'
import { FormComment } from '../form/FormComment'

function CommentsPage() {
    return (
        <div style={{ padding: "30px" }}>
            <CommentsList />
            <br/>
            <FormComment/>
        </div>
    )
}

export default CommentsPage