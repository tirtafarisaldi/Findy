import { GET_ALBUMS_LIST } from "../../actions/types"

const initialState = {
    GetAlbumsListResult: false,
    GetAlbumsListloading: false,
    GetAlbumsListError: false,
}

const Album = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALBUMS_LIST:
            return {
                ...state,
                GetAlbumsListResult: action.payload.data,
                GetAlbumsListloading: action.payload.loading,
                GetAlbumsListError: action.payload.errorMessage
            }

        default:
            return state;
    }
}

export default Album