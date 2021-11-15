import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CreateComment } from '../../redux/actions/comment/CreatComment';
import { EditComment } from '../../redux/actions/comment/EditComment';
import { useParams } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'

const FormComment = React.memo(() => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [body, setBody] = useState('')
    const [commentId, setCommentId] = useState('')

    const params = useParams();
    const dispatch = useDispatch();

    const { DetailCommentResult } = useSelector(state => state.Comment)

    const handleSubmit = useCallback((e) => {
        e.preventDefault();

        if (commentId) {
            dispatch(EditComment({ postId: parseInt(`${params.postid}`), id: setCommentId, name: name, email: email, body: body }))
        } else {
            dispatch(CreateComment(params.userid, { postId: parseInt(`${params.postid}`), name: name, email: email, body: body }))
        }
    }, [commentId])

    useEffect(() => {
        if (DetailCommentResult) {
            setName(DetailCommentResult.name)
            setEmail(DetailCommentResult.email)
            setBody(DetailCommentResult.body)
            setCommentId(DetailCommentResult.id)
        }
    }, [DetailCommentResult])

    return (
        <div>
            <h4> Add and Edit Comment Here!</h4>
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
})

export { FormComment }