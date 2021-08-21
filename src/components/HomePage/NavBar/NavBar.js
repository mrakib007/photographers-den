import React from "react";
import { useContext } from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";

const NavBar = () => {
  const [loggedInUser,setLoggedInUser] = useContext(UserContext);
  return (
    <div>
      <Navbar bg="" className="container-fluid" expand="lg">
        <div className="container">
        <Navbar.Brand as={Link} to="/" className = "ml-5">Photographers Den</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto mr-5">
            <Nav.Link as={Link} to="/" className = "pr-3">Home</Nav.Link>
            {/* <Nav.Link as={Link} to="/login" >Log In</Nav.Link> */}
            <Nav.Link as={Link} to="/dashBoard">Dashboard</Nav.Link>
            {/* <Nav.Link as={Link} to="/contact">Contact</Nav.Link> */}

            {
                loggedInUser ? (
                  <Button variant="warning" onClick={()=> setLoggedInUser(false)}>
                    Sign Out
                  </Button>
                ) : (
                  <Nav.Link as={Link} to='/login'>
                    Login
                  </Nav.Link>
                )
                
              }
              <span style={{backgroundColor: "goldenRod", padding: 5 ,margin: 5}}>{loggedInUser.name}</span>
          </Nav>
        </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
};

export default NavBar;
