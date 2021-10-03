import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CreateComment } from '../redux/actions/CreatComment';
import { Link, useParams, useHistory } from 'react-router-dom'

const FormComment = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [body, setBody] = useState('')
    const params = useParams();
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(CreateComment(params.userid, { postId: parseInt(`${params.postid}`), name: name, email: email, body: body }))
        window.location.reload(true)
    }
    console.log(name, email, body)
    return (
        <div>
            <h4>Add Comment</h4>
            <form onSubmit={(e) => handleSubmit(e)} >
                <input type="text" name="name" placeholder="masukkan name..." value={name}
                    onChange={(e) => setName(e.target.value)} />
                <input type="text" name="email" placeholder="masukkan email..." value={email}
                    onChange={(e) => setEmail(e.target.value)} />
                <input type="text" name="body" placeholder="masukkan body..." value={body}
                    onChange={(e) => setBody(e.target.value)} />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export { FormComment }