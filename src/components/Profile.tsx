import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import baseURL from "../api/api";
const Profile = () => {
  const navigate = useNavigate();
  const token = JSON.stringify(localStorage?.getItem("token")) || "";
  const jwt = JSON.parse(atob(token.split(".")[1]));
  const id = jwt.id;
  useEffect(() => {
    axios
      .get(`${baseURL}/users/${id}`)
      .then((res) => setUser(res?.data?.data))
      .catch((error) => console.log(error));
  }, []);
  const [user, setUser]: any = useState();
  const logout = (e: any) => {
    e.preventDefault();
    localStorage.removeItem("token");
    navigate("/", { replace: true });
  };
  return (
    <div className="container">
      <div className="text-center mt-3">
        <button className="btn btn-danger" onClick={logout}>
          Logout
        </button>
      </div>
      <h2 className="display-3 text-center">Profile Page</h2>
      <h2>Username: {user?.username}</h2>
      <p>Email: {user?.email}</p>
      <button className="btn btn-warning">Edit</button>
    </div>
  );
};

export default Profile;
