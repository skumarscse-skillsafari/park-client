import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FileBase64 from "react-file-base64";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import baseURL from "../api/api";

const CreatePost = () => {
  const navigate = useNavigate();
  const [post, setPost] = useState({
    title: "",
    description: "",
    image: "",
    tags: "",
  });
  const handleInput = (e: any) => {
    const { name, value } = e.target;
    setPost((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(post);
    const token = JSON.stringify(localStorage?.getItem("token"));
    const jwt = JSON.parse(atob(token.split(".")[1]));
    const userId = jwt.id;
    // console.log(userId);
    axios
      .post(`${baseURL}/posts/${userId}`, post, {
        headers: {
          "x-access-token": JSON.parse(token),
        },
      })
      .then((res) => {
        alert(res.data.message);
        navigate("/", { replace: true });
      })
      .catch((error) => alert(error.response.data.message));
  };
  return (
    <Container>
      <h2 className="display-3 text-center">Create Post</h2>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Enter Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter title"
            name="title"
            value={post.title}
            onChange={handleInput}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea2">
          <Form.Label>Enter description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter description"
            name="description"
            value={post.description}
            onChange={handleInput}
          />
        </Form.Group>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Upload Image</Form.Label>
          <div className="form-control">
            <FileBase64
              type="file"
              onDone={({ base64 }: any) =>
                setPost((prev) => {
                  return {
                    ...prev,
                    image: base64,
                  };
                })
              }
            />
          </div>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Enter Tags (Seperated by comma)</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter tags"
            name="tags"
            value={post.tags}
            onChange={(e: any) =>
              setPost((prev) => {
                return {
                  ...prev,
                  [e.target.name]: e.target.value,
                };
              })
            }
          />
        </Form.Group>
        <Button variant="primary" onClick={handleSubmit}>
          Create Post
        </Button>{" "}
        <Button variant="secondary">Cancel</Button>{" "}
      </Form>
    </Container>
  );
};

export default CreatePost;
