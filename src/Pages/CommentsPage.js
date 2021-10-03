import React from 'react';
import { CommentsList } from '../components/CommentsList'
import { FormComment } from '../components/FormComment';

//Butuh komponen CommentList

const CommentsPage = () => {
    return (
        <div style={{ padding: "30px" }}>
            <CommentsList />
            <FormComment />
        </div>
    )
}

export default CommentsPage