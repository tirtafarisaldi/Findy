import UserPage from './pages/Users/UserPage'
import PostPage from './pages/Posts/PostPage'
import AlbumsPage from './pages/Albums/AlbumsPage';
import CommentsPage from './pages/Comments/CommentsPage'
import PhotosPage from './pages/Photos/PhotosPage'
import DetailPhotoPage from './pages/Photos/DetailPhotoPage'
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
