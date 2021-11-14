import { DETAIL_COMMENT } from '../types'

export const DetailComment = (data) => {
    return (dispatch) => {
        dispatch({
            type: DETAIL_COMMENT,
            payload: {
                data: data
            }
        })
    }
}