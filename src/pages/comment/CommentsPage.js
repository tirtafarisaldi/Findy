import React from 'react';
import { CommentsList } from '../../components/comment/CommentsList'
import { FormComment } from '../../components/comment/FormComment'

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