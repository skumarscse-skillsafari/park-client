import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import baseURL from "../api/api";

const Signin = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e: any) => {
    const { name, value } = e.target;
    setUser((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log(user);
    const { email, password } = user;
    if (email === "" || password === "") {
      alert("All the fields are mandatory");
    } else {
      axios
        .post(`${baseURL}/users/signin`, user)
        .then((res) => {
          alert(res.data.message);
          navigate("/", { replace: true });
          window.location.reload();
          localStorage.setItem("token", res.data.token);
        })
        .catch((error) => console.log(error.response.data.message));
    }
  };
  return (
    <div className="container">
      <h2 className="display-4 text-center">SignIn</h2>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="name@example.com"
            name="email"
            value={user.email}
            onChange={handleInput}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            name="password"
            value={user.password}
            onChange={handleInput}
          />
        </Form.Group>
        <Button variant="primary" onClick={handleSubmit}>
          Sign In
        </Button>{" "}
        <Button variant="secondary">Cancel</Button>{" "}
      </Form>
    </div>
  );
};

export default Signin;
