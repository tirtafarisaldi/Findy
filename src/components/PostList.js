import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetUsersList } from '../redux/actions/GetUsersList';
import { GetPostsList } from '../redux/actions/GetPostsList';
import { DeletePost } from '../redux/actions/DeletePost';
import { DetailPost } from '../redux/actions/DetailPost';
import { Link, useParams } from 'react-router-dom'

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
        <div>
            <h1>{GetUsersListResult[params.userid - 1]?.name}</h1>
            <hr />
            {GetPostsListResult ? (
                GetPostsListResult.map(post => {
                    return (
                        <div key={post.id}>
                            <p>{post.title}</p>
                            <Link to={`/CommentsList/${params.userid}/${post.id}`} className="ui blue inverted button">View Detail</Link>
                            <button type="button" onClick={() => dispatch(DetailPost(post))}>Edit</button>
                            <button type="button" onClick={() => {
                                window.location.reload(true)
                                return (
                                    dispatch(DeletePost(post.id))
                                )
                            }}>Delete</button>
                            <hr />
                        </div>

                    )
                })
            ) : GetPostsListLoading ? (
                <p>Loading.....</p>
            ) : (
                <p>{GetPostsListError ? GetPostsListError : "Data Kosong"}</p>
            )}
        </div>
    )
}

export { PostList }