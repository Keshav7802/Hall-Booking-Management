import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CaptchaImage from "./CaptchaImage";
import "../css/LoginPage.css";
import { Link } from "react-router-dom";
function LoginPage() {
  const [contain, setcontainer] = useState(false);
  const [loginError, setLoginError] = useState(true);
  const [signupError, setSignupError] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");


  const HandleRegister = () => {
    if (password !== confirmPassword) {
      // Passwords don't match, display an error message or take appropriate action
      console.log("Passwords do not match");
      setSignupError(true);
      toast.error("Password do not match");
      return;
    }


    // Continue with registration logic
  };

  const HandleRegister2 = () => {
   
  
    // Continue with registration logic
    setcontainer(true);
  };
  const HandleLogin2 = () => {
    setcontainer(false);
  }

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
        toast.error("Incorrect email or password");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setLoginError(true);
      toast.error("An error occurred during login");
    }
  };

  return (
    <>
    <ToastContainer />
      <div className={`container ${contain ? "active" : ""}`} id="container" style={{marginBottom : "4rem", marginTop : "4rem"}}>
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
            {/* {signupError && <p className="error-message">Passwords do not match</p>} */}

            {/* <CaptchaImage />
            <div className="input-container">
            <i className="fas fa-refresh"></i>
              <input type="text" placeholder="Enter the above code" />
            </div> */}

            <button onClick={HandleRegister}>Register</button>
          </form>
        </div>
        <div className="form-container sign-in">
          <form>
            <h2>Login</h2>
            {/* {loginError && <p className="error-message">Incorrect email or password</p>} */}

            <div className="input-container">
              <i className="fas fa-envelope"></i>
              <input type="email" placeholder="Email" />
            </div>
            <div className="input-container">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>

            {/* <div className="input-container">
              <span htmlFor="captcha"> </span>
            </div> */}
            {/* <CaptchaImage /> */}
            {/* <div className="input-container">
              <i className="fas fa-refresh"></i>
              <input type="text" placeholder="Enter the above code" />
            </div> */}

            <Link to="#">Forget Your Password?</Link>
            <Link className="btn btn-dark" onClick={HandleLogin}  to={!loginError? "/home" : "/login"} role="button" style={{backgroundColor: " rgb(45,42,42)"}}>
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
              <button className="hidden" id="login" onClick={HandleLogin2}>
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
              <button className="hidden" id="register" onClick={HandleRegister2} >
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
