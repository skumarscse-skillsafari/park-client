import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const NavComp = () => {
  const token = localStorage.getItem("token");
  return (
    <div>
      <Navbar bg="primary" data-bs-theme="primary">
        <Container>
          <Link
            className="btn btn-primary me-5"
            to="/"
            style={{ fontSize: "22px" }}
          >
            BLOG APP
          </Link>
          <Nav>
            <Link className="btn btn-primary me-5" to="/">
              Posts
            </Link>
            <Link className="btn btn-primary me-5" to="/create">
              Create Post
            </Link>

            {token ? (
              <Link className="btn btn-primary me-5" to="/profile">
                Profile
              </Link>
            ) : (
              <>
                {" "}
                <Link className="btn btn-primary me-5" to="/signin">
                  SignIn
                </Link>
                <Link className="btn btn-primary me-5" to="/signup">
                  Register
                </Link>
              </>
            )}
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavComp;
