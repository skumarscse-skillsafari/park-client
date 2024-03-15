import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Posts from "./components/Posts";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import CreatePost from "./components/CreatePost";
import NavComp from "./components/NavComp";
import UpdatePost from "./components/UpdatePost";
import SinglePost from "./components/SinglePost";
import Profile from "./components/Profile";

function App() {
  return (
    <div>
      <Router>
        <NavComp />
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/update/:id" element={<UpdatePost />} />
          <Route path="/post/:id" element={<SinglePost />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
