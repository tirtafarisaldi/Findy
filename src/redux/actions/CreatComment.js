import axios from "axios";
import { CREATE_COMMENT } from './types'

export const CreateComment = (userid, data) => {
    return (dispatch) => {
        //loading
        dispatch({
            type: CREATE_COMMENT,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })

        //get API
        axios({
            method: 'POST',
            url: `http://localhost:3000/comments`,
            timeout: 120000,
            data: data
        })
            .then((response) => {
                dispatch({
                    type: CREATE_COMMENT,
                    payload: {
                        loading: false,
                        data: response.data,
                        errorMessage: false
                    }
                })
            })
            .catch((error) => {
                dispatch({
                    type: CREATE_COMMENT,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: error.message
                    }
                })
            })

    }

}