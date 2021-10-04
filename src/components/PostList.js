import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetUsersList } from '../redux/actions/GetUsersList';
import { GetPostsList } from '../redux/actions/GetPostsList';
import { DeletePost } from '../redux/actions/DeletePost';
import { DetailPost } from '../redux/actions/DetailPost';
import { Link, useParams } from 'react-router-dom'
import { ListGroup, Button } from 'react-bootstrap'

function PostList() {
    const { GetPostsListResult, GetPostsListLoading, GetPostsListError } = useSelector((state) => state.Post)
    const { GetUsersListResult, GetUsersListLoading, GetUsersListError } = useSelector((state) => state.User)
    const dispatch = useDispatch();
    const params = useParams()
    useEffect(() => {
        dispatch(GetUsersList())
        dispatch(GetPostsList(params.userid))
    }, [dispatch])

    return (
        <ListGroup>
            <h1>{GetUsersListResult[params.userid - 1]?.name}'s Posts</h1>
            <hr />
            {GetPostsListResult ? (
                GetPostsListResult.map(post => {
                    return (
                        <ListGroup.Item key={post.id}>
                            <p>{post.title}</p>
                            <Link to={`/CommentsList/${params.userid}/${post.id}`} >
                                <Button variant="outline-primary">View Detail</Button>
                            </Link>{' '}
                            <Button variant="outline-success" type="button" onClick={() => dispatch(DetailPost(post))}>Edit</Button>{' '}
                            <Button variant="outline-danger" type="button" onClick={() => {
                                window.location.reload(true)
                                return (
                                    dispatch(DeletePost(post.id))
                                )
                            }}>Delete</Button>
                            <hr />
                        </ListGroup.Item>

                    )
                })
            ) : GetPostsListLoading ? (
                <p>Loading.....</p>
            ) : (
                <p>{GetPostsListError ? GetPostsListError : "Data Kosong"}</p>
            )}
        </ListGroup>
    )
}

export { PostList }