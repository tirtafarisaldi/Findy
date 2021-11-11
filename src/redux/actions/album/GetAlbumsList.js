import axios from "axios";
import { GET_ALBUMS_LIST } from '../types'

export const GetAlbumsList = (userid) => {
    return (dispatch) => {
        //loading
        dispatch({
            type: GET_ALBUMS_LIST,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })

        //get API
        axios({
            method: 'GET',
            url: `http://localhost:3000/albums?userId=${userid}`,
            timeout: 120000
        })
            .then((response) => {
                dispatch({
                    type: GET_ALBUMS_LIST,
                    payload: {
                        loading: false,
                        data: response.data,
                        errorMessage: false
                    }
                })
            })
            .catch((error) => {
                dispatch({
                    type: GET_ALBUMS_LIST,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: error.message
                    }
                })
            })
    }
}