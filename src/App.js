import UserPage from '../src/pages/user/UserPage'
import PostPage from '../src/pages/post/PostPage'
import AlbumsPage from '../src/pages/album/AlbumsPage';
import CommentsPage from '../src/pages/comment/CommentsPage'
import PhotosPage from '../src/pages/photo/PhotosPage'
import DetailPhotoPage from '../src/pages/photo/DetailPhotoPage'
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
