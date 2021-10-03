import { GET_PHOTOS_LIST, GET_DETAIL_PHOTO } from "../../actions/types"

const initialState = {
    GetPhotosListResult: false,
    GetPhotosListLloading: false,
    GetPhotosListError: false,

    GetDetailPhotoResult: false,
    GetDetailPhotoLoading: false,
    GetDetailPhotoError: false,
}

const Photo = (state = initialState, action) => {
    switch (action.type) {
        case GET_PHOTOS_LIST:
            return {
                ...state,
                GetPhotosListResult: action.payload.data,
                GetPhotosListLloading: action.payload.loading,
                GetPhotosListError: action.payload.errorMessage
            }

        case GET_DETAIL_PHOTO:
            return {
                ...state,
                GetDetailPhotoResult: action.payload.data,
                GetDetailPhotoLoading: action.payload.loading,
                GetDetailPhotoError: action.payload.errorMessage
            }

        default:
            return state;
    }
}

export default Photo