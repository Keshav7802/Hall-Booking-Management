import React, { useState } from "react";
import CaptchaImage from "./CaptchaImage";
import "../css/LoginPage.css";
import { Link } from "react-router-dom";
function LoginPage() {
  const [contain, setcontainer] = useState(false);
  const HandleRegister = () => {
    setcontainer(true);
  };

  const HandleLogin = () => {
    setcontainer(false);
  };
  return (
    <>
      <div className={`container ${contain ? "active" : ""}`} id="container">
        <div className="form-container sign-up">
          <form>
            <h1>Registration</h1>

            <div className="input-container">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Name" />
            </div>
            <div className="input-container">
              <i className="fas fa-envelope"></i>
              <input type="email" placeholder="Email" />
            </div>
            <div className="input-container">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <div className="input-container">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Confirm Password" />
            </div>

            {/* <CaptchaImage />
            <div className="input-container">
            <i className="fas fa-refresh"></i>
              <input type="text" placeholder="Enter the above code" />
            </div> */}

            <button>Register</button>
          </form>
        </div>
        <div className="form-container sign-in">
          <form>
            <h1>Login</h1>

            <div className="input-container">
              <i className="fas fa-envelope"></i>
              <input type="email" placeholder="Email" />
            </div>
            <div className="input-container">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>

            <div className="input-container">
              <span htmlFor="captcha"> </span>
            </div>
            <CaptchaImage />
            <div className="input-container">
              <i className="fas fa-refresh"></i>
              <input type="text" placeholder="Enter the above code" />
            </div>

            <Link to="#">Forget Your Password?</Link>
            <Link className="btn btn-dark" to="/home" role="button">
              <text className="mx-4 my-3" style={{color:"white"}}><b>Login</b></text>
            </Link>
          </form>
        </div>
        <div className="toggle-container">
          <div className="toggle">
            <div className="toggle-panel toggle-left">
              <div>
                <h1>Instructions :</h1>
                <br></br>
                <ul>
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
                    .
                  </li>
                </ul>
              </div>
              <button className="hidden" id="login" onClick={HandleLogin}>
                Login
              </button>
            </div>
            <div className="toggle-panel toggle-right">
              <div>
                <h1>Instructions :</h1>
                <br></br>
                <ul>
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
                    .
                  </li>
                </ul>
              </div>
              <button className="hidden" id="register" onClick={HandleRegister}>
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
