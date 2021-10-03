import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CreatePost } from '../redux/actions/CreatePost';
import { EditPost } from '../redux/actions/EditPost';
import { Link, useParams, useHistory } from 'react-router-dom'

const FormPost = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [id, setId] = useState('')

    const params = useParams();
    const dispatch = useDispatch();

    const { DetailPostResult } = useSelector(state => state.Post)
    const handleSubmit = (e) => {
        e.preventDefault();
        if (id) {
            dispatch(EditPost({ id: id, title: title, body: body, userId: parseInt(`${params.userid}`) }))
            window.location.reload(true)
        } else {
            dispatch(CreatePost(params.userid, { userId: parseInt(`${params.userid}`), title: title, body: body }))
        }


    }

    useEffect(() => {
        if (DetailPostResult) {
            setTitle(DetailPostResult.title)
            setBody(DetailPostResult.body)
            setId(DetailPostResult.id)
        }
    }, [DetailPostResult])

    console.log(title, body)
    return (
        <div>
            <h4>Add Post</h4>
            <form onSubmit={(e) => handleSubmit(e)} >
                <input type="text" name="title" placeholder="masukkan title..." value={title}
                    onChange={(e) => setTitle(e.target.value)} />
                <input type="text" name="body" placeholder="masukkan body..." value={body}
                    onChange={(e) => setBody(e.target.value)} />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export { FormPost }