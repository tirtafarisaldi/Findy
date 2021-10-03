import { GET_USER_LIST } from "../../actions/types"

const initialState = {
    GetUsersListResult: false,
    GetUsersListLoading: false,
    GetUsersListError: false,
}

const User = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER_LIST:
            return {
                ...state,
                GetUsersListResult: action.payload.data,
                GetUsersListLoading: action.payload.loading,
                GetUsersListError: action.payload.errorMessage
            }
        default:
            return state;
    }

}

export default User