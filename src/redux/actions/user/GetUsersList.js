import axios from "axios";
import { GET_USER_LIST } from '../types'

export const GetUsersList = () => {
    return (dispatch) => {
        //loading
        dispatch({
            type: GET_USER_LIST,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })

        //get API
        axios({
            method: 'GET',
            url: 'http://localhost:3000/users',
            timeout: 120000
        })
            .then((response) => {
                dispatch({
                    type: GET_USER_LIST,
                    payload: {
                        loading: false,
                        data: response.data,
                        errorMessage: false
                    }
                })
            })
            .catch((error) => {
                dispatch({
                    type: GET_USER_LIST,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: error.message
                    }
                })
            })
    }
}