import axios from "axios";
import { GET_DETAIL_PHOTO } from '../types'

export const GetDetailPhoto = (photoid) => {
    return (dispatch) => {
        dispatch({
            type: GET_DETAIL_PHOTO,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })

        //get API
        axios({
            method: 'GET',
            url: `http://localhost:3000/photos/${photoid}`
        })
            .then((response) => {
                dispatch({
                    type: GET_DETAIL_PHOTO,
                    payload: {
                        loading: false,
                        data: response.data,
                        errorMessage: false
                    }
                })
                console.log(response.data.url)
            })
            .catch((error) => {
                dispatch({
                    type: GET_DETAIL_PHOTO,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: error.message
                    }
                })
            })
    }
}