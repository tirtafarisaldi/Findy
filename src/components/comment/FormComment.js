import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
<<<<<<< HEAD:src/components/Comments/FormComment.js
import { CreateComment } from '../../redux/actions/comment/CreatComment';
import { EditComment } from '../../redux/actions/comment/EditComment';
=======
import { CreateComment } from '../redux/actions/CreatComment';
import { EditComment } from '../redux/actions/EditComment';
>>>>>>> parent of d125edf (Folder Restructure):src/components/FormComment.js
import { Link, useParams, useHistory } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'

const FormComment = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [body, setBody] = useState('')
    const [id, setId] = useState('')

    const params = useParams();
    const dispatch = useDispatch();

    const { DetailCommentResult } = useSelector(state => state.Comment)

    const handleSubmit = (e) => {
        e.preventDefault();

        if (id) {
            dispatch(EditComment({ postId: parseInt(`${params.postid}`), id: id, name: name, email: email, body: body }))
        } else {
            dispatch(CreateComment(params.userid, { postId: parseInt(`${params.postid}`), name: name, email: email, body: body }))
        }
        window.location.reload(true)
    }

    useEffect(() => {
        if (DetailCommentResult) {
            setName(DetailCommentResult.name)
            setEmail(DetailCommentResult.email)
            setBody(DetailCommentResult.body)
            setId(DetailCommentResult.id)
        }
    }, [DetailCommentResult])

    return (
        <div>
            <h4>Add and Edit Comment Here!</h4>
            <Form onSubmit={(e) => handleSubmit(e)} >
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name="name" placeholder="masukkan name..." value={name}
                    onChange={(e) => setName(e.target.value)} />
                <br />
                <Form.Label>Email</Form.Label>
                <Form.Control type="text" name="email" placeholder="masukkan email..." value={email}
                    onChange={(e) => setEmail(e.target.value)} />
                <br />
                <Form.Label>Body</Form.Label>
                <Form.Control type="text" name="body" placeholder="masukkan body..." value={body}
                    onChange={(e) => setBody(e.target.value)} />
                <br />
                <Button variant="outline-primary" type="submit">Submit</Button>
            </Form>
        </div>
    )
}

export { FormComment }