import axios from "axios";
import { EDIT_POST } from '../types'

export const EditPost = (data) => {
    return (dispatch) => {
        //loading
        dispatch({
            type: EDIT_POST,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })
        console.log(data)


        //get API
        axios({
            method: 'PUT',
            url: `http://localhost:3000/posts/${data.id}`,
            timeout: 120000,
            data: data
        })
            .then((response) => {
                dispatch({
                    type: EDIT_POST,
                    payload: {
                        loading: false,
                        data: response.data,
                        errorMessage: false
                    }
                })
            })
            .catch((error) => {
                dispatch({
                    type: EDIT_POST,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: error.message
                    }
                })
            })

    }

}