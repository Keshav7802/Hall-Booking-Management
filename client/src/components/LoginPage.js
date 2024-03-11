import React, { useState } from "react";
import CaptchaImage from "./CaptchaImage";
import "../css/LoginPage.css";
function LoginPage() {
  const [contain, setcontainer] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const [signupError, setSignupError] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");


  const HandleRegister = () => {
    if (password !== confirmPassword) {
      // Passwords don't match, display an error message or take appropriate action
      console.log("Passwords do not match");
      setSignupError(true);
      return;
    }
  
    // Continue with registration logic
    setcontainer(true);
  };
  

    const HandleLogin = async () => {
    try {
      // Replace the following with actual API endpoint and authentication logic
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        setLoginError(false);
        setcontainer(false);
        // Add logic to navigate to the authenticated section or perform other actions
      } else {
        setLoginError(true);
      }
    } catch (error) {
      console.error("Error during login:", error);
      setLoginError(true);
    }
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
            {signupError && <p className="error-message">Passwords do not match</p>}

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
            {loginError && <p className="error-message">Incorrect email or password</p>}

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

            <a href="#">Forget Your Password?</a>
            <button>Login</button>
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
                    <a href="mailto:aracademcis@iitrpr.ac.in">
                      aracademcis@iitrpr.ac.in
                    </a>
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
                    If you haven’t registered yet, click to register
                    through your student email ID to book halls.
                  </li>
                  <br></br>
                  <li>
                    If you are facing any problems in logging in or registering,
                    please contact us at{" "}
                    <a href="mailto:aracademcis@iitrpr.ac.in">
                      aracademcis@iitrpr.ac.in
                    </a>
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
