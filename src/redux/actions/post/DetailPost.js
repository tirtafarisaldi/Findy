import { DETAIL_POST } from '../types'

export const DetailPost = (data) => {
    return (dispatch) => {
        dispatch({
            type: DETAIL_POST,
            payload: {
                data: data
            }
        })
    }
}