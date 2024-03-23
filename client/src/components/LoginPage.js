import React, { useState } from "react";
import { toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../css/LoginPage.css";
import { NavLink, Link, useNavigate } from "react-router-dom";
function LoginPage() {
  const [name, setName] = useState("");
  const [contain, setcontainer] = useState(false);
  const [loginError, setLoginError] = useState(true);
  const [signupError, setSignupError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [user, setUser] = useState("");
  const navigate = useNavigate();

  const HandleLoginEmail = (event) => {
    setLoginEmail(event.target.value);
  };
  const HandleLoginPasssword = (event) => {
    setLoginPassword(event.target.value);
  };
  const HandleName = (event) => {
    setName(event.target.value);
  };
  const HandlePassword = (event) => {
    setPassword(event.target.value);
  };
  const HandleConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
  };
  const HandleEmail = (e) => {
    setEmail(e.target.value);
  };
  const HandleRegister = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      console.log("Passwords do not match");
      setSignupError(true);
    }
  };
  const HandleRegister2 = () => {
    setcontainer(true);
  };
  const HandleLogin2 = () => {
    setcontainer(false);
  };

  const HandleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${process.env.REACT_APP_API}/user/signin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: loginEmail, password: loginPassword }),
      });
      const data = await response.json();
      if (data.ok) {
        setLoginError(false);
        setcontainer(false);
        toast.success(data.message);
        navigate("/home");
      } else {
        setLoginError(true);
        toast.error(data.message);
      }
    } catch (error) {
      console.error("Error during login:", error);
      setLoginError(true);
      toast.error("An error occurred during login");
    }
  };

  return (
    <>
      <div
        className={`container ${contain ? "active" : ""}`}
        id="container"
        style={{ marginBottom: "4rem", marginTop: "4rem" }}
      >
        <div className="form-container sign-up">
          <form>
            <h1>Registration</h1>

            <div className="input-container">
              <i className="fas fa-user"></i>
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={HandleName}
              />
            </div>
            <div className="input-container">
              <i className="fas fa-envelope"></i>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={HandleEmail}
              />
            </div>
            <div className="input-container">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={HandlePassword}
              />
            </div>
            <div className="input-container">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={HandleConfirmPassword}
              />
            </div>
            <div className="input-container">
              <select
                className="user-type-dropdown"
                onChange={(e) => {
                  setUser(e.target.value);
                }}
              >
                <option value={user}>Select User Type</option>
                <option value={user}>Student</option>
                <option value={user}>Faculty</option>
                <option value={user}>IT Staff</option>
              </select>
            </div>
            <button onClick={HandleRegister}>Register</button>
          </form>
        </div>
        <div className="form-container sign-in">
          <form>
            <h1 className="mb-3">
              <strong>Login</strong>
            </h1>
            <div className="input-container">
              <i className="fas fa-envelope"></i>
              <input
                type="email"
                placeholder="Email"
                value={loginEmail}
                onChange={HandleLoginEmail}
              />
            </div>
            <div className="input-container">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                placeholder="Password"
                value={loginPassword}
                onChange={HandleLoginPasssword}
              />
            </div>

            <Link to="#">Forget Your Password?</Link>
            <Link
              className="btn btn-dark"
              onClick={HandleLogin}
              to={!loginError ? "/home" : "/login"}
              role="button"
              style={{ backgroundColor: " rgb(45,42,42)" }}
            >
              <text className="mx-4 my-3" style={{ color: "white" }}>
                <b>Login</b>
              </text>
            </Link>
          </form>
        </div>
        <div className="toggle-container">
          <div className="toggle">
            <div className="toggle-panel toggle-left">
              <div>
                <h1>Instructions :</h1>
                <br></br>
                <ul className="list-disc">
                  <li>
                    You need to register using your student email ID allocated
                    to you in order to be able to book halls.
                  </li>
                  <br></br>
                  <li>
                    If you already have registered through your student email
                    ID, then you need not register here, Please click Login to
                    continue
                  </li>
                  <br></br>
                  <li>
                    If you are facing any problems in logging in or registering,
                    please contact us at{" "}
                    <Link to="mailto:aracademcis@iitrpr.ac.in">
                      aracademcis@iitrpr.ac.in
                    </Link>
                  </li>
                </ul>
              </div>
              <button className="hid mt-5" id="login" onClick={HandleLogin2}>
                Login
              </button>
            </div>
            <div className="toggle-panel toggle-right">
              <div>
                <h1>Instructions :</h1>
                <br></br>
                <ul className="list-disc">
                  <li>
                    If you have already registered using your student email ID,
                    you can login and book halls.
                  </li>
                  <br></br>
                  <li>
                    If you haven’t registered yet, click to register through
                    your student email ID to book halls.
                  </li>
                  <br></br>
                  <li>
                    If you are facing any problems in logging in or registering,
                    please contact us at{" "}
                    <Link to="mailto:aracademcis@iitrpr.ac.in">
                      aracademcis@iitrpr.ac.in
                    </Link>
                  </li>
                </ul>
              </div>
              <button
                className="hid mt-5"
                id="register"
                onClick={HandleRegister2}
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
