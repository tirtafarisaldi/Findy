import axios from "axios";
import { EDIT_COMMENT } from './types'

export const EditComment = (data) => {
    return (dispatch) => {
        //loading
        dispatch({
            type: EDIT_COMMENT,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })

        //get API
        axios({
            method: 'PUT',
            url: `http://localhost:3000/comments/${data.id}`,
            timeout: 120000,
            data: data
        })
            .then((response) => {
                dispatch({
                    type: EDIT_COMMENT,
                    payload: {
                        loading: false,
                        data: response.data,
                        errorMessage: false
                    }
                })
            })
            .catch((error) => {
                dispatch({
                    type: EDIT_COMMENT,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: error.message
                    }
                })
            })

    }

}