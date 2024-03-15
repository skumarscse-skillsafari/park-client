import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import axios from "axios";
import baseURL from "../api/api";

const Post = ({ post }: any) => {
  const deletePost = (e: any) => {
    e.preventDefault();
    axios
      .delete(`${baseURL}/posts/${e.target.id}`)
      .then((res) => alert(res.data.message))
      .catch((error) => console.log(error));
  };
  return (
    <div className="m-3">
      <Card style={{ width: "18rem" }} className="h-100">
        <Card.Img variant="top" src={post.image} style={{ height: "200px" }} />
        <Card.Body>
          <Card.Title>{post.title}</Card.Title>
          <Card.Text>{post.description}</Card.Text>
          <Card.Text>{post.tags.join(" ")}</Card.Text>
          <Link to={`/update/${post._id}`} className="btn btn-primary">
            Update
          </Link>{" "}
          <Button variant="danger" onClick={deletePost} id={post._id}>
            Delete
          </Button>
          {"   "}
          <Link to={`/post/${post._id}`} className="btn btn-success">
            View
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Post;
