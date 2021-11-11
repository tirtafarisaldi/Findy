import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FormPost } from '../../components/post/FormPost'
import { GetUsersList } from '../../redux/actions/user/GetUsersList';
import { GetPostsList } from '../../redux/actions/post/GetPostsList';
import { DeletePost } from '../../redux/actions/post/DeletePost';
import { DetailPost } from '../../redux/actions/post/DetailPost';
import { Link, useParams } from 'react-router-dom'
import { ListGroup, Button } from 'react-bootstrap'

const PostList = React.memo(() => {

    const[userId, setUserId] = useState('')

    const { GetPostsListResult, 
            GetPostsListLoading, 
            GetPostsListError,
            DeletePostResult,
            EditPostResult 
        } = useSelector((state) => state.Post)
        
    const { GetUsersListResult, 
            GetUsersListLoading, 
            GetUsersListError 
        } = useSelector((state) => state.User)

    const dispatch = useDispatch();
    const params = useParams()
    
    useEffect(()=>{
        for(let i = 0; i < GetUsersListResult.length; i++ ) {
            if(GetUsersListResult[i]?.id == params.postid) {
                setUserId(i)
            }
        }
    },[GetUsersListResult])

    useEffect(() => {
        dispatch(GetUsersList())
        dispatch(GetPostsList(params.userid))
    }, [DeletePostResult,dispatch])

    useEffect(() => {
        dispatch(GetUsersList())
        dispatch(GetPostsList(params.userid))
    }, [EditPostResult,dispatch])

    return (
        <>
            <ListGroup>
                <h1>{GetUsersListResult[userId]?.name}'s Posts</h1>
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
            <br/>
            <FormPost/>
        </>
    )
})

export { PostList }