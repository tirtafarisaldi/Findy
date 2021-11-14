import UserPage from './app/user/UserPage'
import PostPage from './app/post/PostPage'
import AlbumsPage from '../src/app/album/AlbumsPage';
import CommentsPage from './app/comment/CommentsPage'
import PhotosPage from './app/photo/PhotosPage'
import DetailPhotoPage from './app/photo/DetailPhotoPage'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
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
}

export default App;
