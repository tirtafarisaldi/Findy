import {
    GET_POSTS_LIST,
    CREATE_POST,
    DELETE_POST,
    DETAIL_POST,
    EDIT_POST
} from "../../actions/types"

const initialState = {
    GetPostsListResult: false,
    GetPostsListLoading: false,
    GetPostsListError: false,

    CreatePostResult: false,
    CreatePostLoading: false,
    CreatePostError: false,

    DeletePostResult: false,
    DeletePostLoading: false,
    DeletePostError: false,

    DetailPostResult: false,

    EditPostResult: false,
    EditPostLoading: false,
    EditPostError: false,
}

const Post = (state = initialState, action) => {
    switch (action.type) {
        case GET_POSTS_LIST:
            return {
                ...state,
                GetPostsListResult: action.payload.data,
                GetPostsListLoading: action.payload.loading,
                GetPostsListError: action.payload.errorMessage
            }
        case CREATE_POST:
            return {
                ...state,
                CreatePostResult: action.payload.data,
                CreatePostLoading: action.payload.loading,
                CreatePostError: action.payload.errorMessage
            }
        case DELETE_POST:
            return {
                ...state,
                DeletePostResult: action.payload.data,
                DeletePostLoading: action.payload.loading,
                DeletePostError: action.payload.errorMessage
            }
        case DETAIL_POST:
            return {
                ...state,
                DetailPostResult: action.payload.data
            }
        case EDIT_POST:
            return {
                ...state,
                EditPostResult: action.payload.data,
                EditPostLoading: action.payload.loading,
                EditPostError: action.payload.errorMessage
            }

        default:
            return state;
    }


}

export default Post