import Card from "react-bootstrap/Card";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import baseURL from "../api/api";

const SinglePost = () => {
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`${baseURL}/posts/${id}`)
      .then((res) => setPost(res?.data?.data))
      .catch((error) => console.log(error));
  }, []);
  const [post, setPost]: any = useState({});
  return (
    <div className="container">
      <h2 className="display-3 text-center">SinglePost</h2>
      <Card>
        <Card.Img variant="top" src={post?.image} style={{ height: "400px" }} />
        <Card.Body>
          <Card.Title>{post?.title}</Card.Title>
          <Card.Text>{post?.description}</Card.Text>
          <Card.Text>{post?.tags?.join(", ")}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SinglePost;
