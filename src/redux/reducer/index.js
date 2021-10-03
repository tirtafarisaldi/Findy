import { combineReducers } from 'redux'
import User from './user'
import Post from './post'
import Comment from './comment'
import Photo from './photo'
import Album from './album'

export default combineReducers({
    User,
    Post,
    Comment,
    Album,
    Photo
})