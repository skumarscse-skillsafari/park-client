import { useState, useEffect } from "react";
import axios from "axios";
import Post from "./Post";
import baseURL from "../api/api";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get(`${baseURL}/posts`)
      .then((res) => setPosts(res.data.data))
      .catch((error) => alert(error.response.data.message));
  }, [posts]);
  return (
    <div className="container">
      <h2 className="display-3 text-center">Posts Component</h2>
      <div className="d-flex flex-wrap">
        {posts.map((post: any) => {
          return <Post post={post} key={post._id} />;
        })}
      </div>
    </div>
  );
};

export default Posts;
