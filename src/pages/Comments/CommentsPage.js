import React from 'react';
import { CommentsList } from '../../components/Comments/CommentsList'
import { FormComment } from '../../components/Comments/FormComment';

//Butuh komponen CommentList

const CommentsPage = () => {
    return (
        <div style={{ padding: "30px" }}>
            <CommentsList />
        </div>
    )
}

export default CommentsPage