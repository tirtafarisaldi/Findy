import axios from "axios";
import { CREATE_POST } from '../types'

export const CreatePost = (userid, data) => {
    return (dispatch) => {
        //loading
        dispatch({
            type: CREATE_POST,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })

        //get API
        axios({
            method: 'POST',
            url: `http://localhost:3000/posts`,
            timeout: 120000,
            data: data
        })
            .then((response) => {
                dispatch({
                    type: CREATE_POST,
                    payload: {
                        loading: false,
                        data: response.data,
                        errorMessage: false
                    }
                })
            })
            .catch((error) => {
                dispatch({
                    type: CREATE_POST,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: error.message
                    }
                })
            })

    }

}