import UserPage from './Pages/UserPage'
import PostPage from './Pages/PostPage'
import AlbumsPage from './Pages/AlbumsPage';
import CommentsPage from './Pages/CommentsPage'
import PhotosPage from './Pages/PhotosPage'
import DetailPhotoPage from './Pages/DetailPhotoPage'
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
