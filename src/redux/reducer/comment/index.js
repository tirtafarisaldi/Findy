import {
    GET_COMMENTS_LIST,
    CREATE_COMMENT,
    DELETE_COMMENT,
    DETAIL_COMMENT,
    EDIT_COMMENT
} from "../../actions/types"


const initialState = {
    GetCommentsListResult: false,
    GetCommentsListLloading: false,
    GetCommentsListError: false,

    CreateCommenttResult: false,
    CreateCommentloading: false,
    CreateCommentError: false,

    DeleteCommentResult: false,
    DeleteCommentloading: false,
    DeleteCommentError: false,

    DetailCommentResult: false,

    EditCommentResult: false,
    EditeCommentloading: false,
    EditCommentError: false,

}

const Comment = (state = initialState, action) => {
    switch (action.type) {
        case GET_COMMENTS_LIST:
            return {
                ...state,
                GetCommentsListResult: action.payload.data,
                GetCommentsListLloading: action.payload.loading,
                GetCommentsListError: action.payload.errorMessage
            }
        case CREATE_COMMENT:
            return {
                ...state,
                CreateCommenttResult: action.payload.data,
                CreateCommentloading: action.payload.loading,
                CreateCommentError: action.payload.errorMessage
            }
        case DELETE_COMMENT:
            return {
                ...state,
                DeleteCommentResult: action.payload.data,
                DeleteCommentloading: action.payload.loading,
                DeleteCommentError: action.payload.errorMessage
            }
        case DETAIL_COMMENT:
            return {
                ...state,
                DetailCommentResult: action.payload.data,
            }
        case EDIT_COMMENT:
            return {
                ...state,
                EditCommentResult: action.payload.data,
                EditeCommentloading: action.payload.loading,
                EditCommentError: action.payload.errorMessage
            }

        default:
            return state;
    }
}

export default Comment