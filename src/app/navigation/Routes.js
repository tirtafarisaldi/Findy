import React from 'react';
import UserPage from '../user/UserPage'
import PostPage from '../post/PostPage'
import AlbumsPage from '../album/AlbumsPage'
import CommentsPage from '../comment/CommentsPage'
import PhotosPage from '../photo/PhotosPage'
import DetailPhotoPage from '../photo/DetailPhotoPage'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const Routes = React.memo(() => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={UserPage} />
        <Route path="/PostsList/:userid" exact component={PostPage} />
        <Route path="/CommentsList/:userid/:postid" exact component={CommentsPage} />
        <Route path="/AlbumsList/:userid" exact component={AlbumsPage} />
        <Route path="/PhotosList/:userid/:albumid" exact component={PhotosPage} />
        <Route path="/DetailPhoto/:photoid" exact component={DetailPhotoPage} />
      </Switch>
    </Router>

  );
})

export {Routes}
