import React, { useContext } from "react";
import "firebase/auth";
import LogInBg from "../../../images/LogIn.jpg";
import { Button } from "react-bootstrap";
import { useHistory, useLocation } from "react-router-dom";
import { useState } from "react";
import {
  handleGoogleSignIn,
  handleSignOut,
  initializeLoginFramework,
} from "./LoginManager";
import { UserContext } from "../../../App";

const LogIn = () => {
  const [user, setUser] = useState({
    isSignIn: false,
    name: "",
    email: "",
    photo: "",
  });

  initializeLoginFramework();
  const history = useHistory();
  const location = useLocation();

  const { from } = location.state || { from: { pathname: "/" } };
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  console.log(loggedInUser);

  const handleResponse = (res, redirect) => {
    setUser(res);
    setLoggedInUser(res);
    if (redirect) {
      history.replace(from);
    }
  };

  const googleSignIn = () => {
    handleGoogleSignIn().then((res) => {
      handleResponse(res, true);
    });
  };

  const signOut = () => {
    handleSignOut().then((res) => {
      handleResponse(res, false);
    });
  };
  return (
    <div className="container">
      <div className="row align-items-center" style={{ height: "100vh" }}>
        <div className="col-md-6 d-none d-md-block align-self-middle">
          <img src={LogInBg} className="img-fluid" alt="" />
        </div>

        <div style={{ background: "white" }} className="col-md-6 shadow p-5">
          <div className="form-group">
            <label htmlFor="">User Name</label>
            <input type="text" name="" className="form-control" />
          </div>

          <div className="form-group">
            <label htmlFor="">User Name</label>
            <input type="password" name="" className="form-control" />
          </div>
          <div className="form-group mt-5">
            {user.isSignIn ? (
              <Button onClick={signOut} type="button" variant="outline-primary">
                Sign Out
              </Button>
            ) : (
              <Button
                onClick={googleSignIn}
                type="button"
                variant="outline-primary"
              >
                Sign In with Google
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
