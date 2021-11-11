import axios from "axios";
import { DELETE_COMMENT } from './types'

export const DeleteComment = (id) => {
    return (dispatch) => {
        //loading
        dispatch({
            type: DELETE_COMMENT,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })

        //get API
        axios({
            method: 'DELETE',
            url: `http://localhost:3000/comments/${id}`,
            timeout: 120000
        })
            .then((response) => {
                dispatch({
                    type: DELETE_COMMENT,
                    payload: {
                        loading: false,
                        data: response.data,
                        errorMessage: false
                    }
                })
            })
            .catch((error) => {
                dispatch({
                    type: DELETE_COMMENT,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: error.message
                    }
                })
            })

    }

}