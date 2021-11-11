import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetPostsList } from '../../redux/actions/GetPostsList';
import { GetCommentsList } from '../../redux/actions/GetCommentsList';
import { DeleteComment } from '../../redux/actions/DeleteComment';
import { DetailComment } from '../../redux/actions/DetailComment';
import { Link, useParams } from 'react-router-dom'
import { ListGroup, Button } from 'react-bootstrap'

function CommentsList() {
    const { GetCommentsListResult, GetCommentsListLoading, GetCommentsListError } = useSelector((state) => state.Comment)
    const { GetPostsListResult, GetPostsListLoading, GetPostsListError } = useSelector((state) => state.Post)
    const dispatch = useDispatch();
    const params = useParams();

    useEffect(() => {
        dispatch(GetPostsList(params.userid))
        dispatch(GetCommentsList(params.postid))
    }, [dispatch])

    console.log(GetPostsListResult)

    return (
        <ListGroup>
            <h1>{GetPostsListResult[params.postid - 1]?.title}</h1>
            <p>{GetPostsListResult[params.postid - 1]?.body}</p>
            <hr />
            {GetCommentsListResult ? (
                GetCommentsListResult.map(comment => {
                    return (
                        <ListGroup.Item key={comment.id}>
                            <h6>{comment.name}</h6>
                            <br />
                            <p class="blockquote-footer">{comment.email}</p>
                            <p>{comment.body}</p>
                            <Button variant="outline-primary" type="button" onClick={() => dispatch(DetailComment(comment))}>Edit</Button>{" "}
                            <Button variant="outline-success" type="button" onClick={() => {
                                window.location.reload(true)
                                return (
                                    dispatch(DeleteComment(comment.id))
                                )
                            }}>Delete</Button>
                            {/* <Link to={`/Post/${user.id}`} className="ui blue inverted button">View Posts User</Link>
                            <Link to={`/Album/${user.id}`} className="ui violet inverted button">View Albums User</Link> */}
                            <hr />
                        </ListGroup.Item>

                    )
                })
            ) : GetCommentsListLoading ? (
                <p>Loading.....</p>
            ) : (
                <p>{GetCommentsListError ? GetCommentsListError : "Data Kosong"}</p>
            )}
        </ListGroup>
    )
}

export { CommentsList }