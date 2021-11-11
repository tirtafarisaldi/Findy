import axios from "axios";
import { DELETE_POST } from '../types'

export const DeletePost = (id) => {
    return (dispatch) => {
        //loading
        dispatch({
            type: DELETE_POST,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })

        //get API
        axios({
            method: 'DELETE',
            url: `http://localhost:3000/posts/${id}`,
            timeout: 120000
        })
            .then((response) => {
                dispatch({
                    type: DELETE_POST,
                    payload: {
                        loading: false,
                        data: response.data,
                        errorMessage: false
                    }
                })
            })
            .catch((error) => {
                dispatch({
                    type: DELETE_POST,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: error.message
                    }
                })
            })

    }

}