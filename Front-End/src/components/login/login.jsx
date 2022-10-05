import React from "react";
import "./login.css";
import RadicallX from '../images/RadicallX.png'
const Loginscreen = () => {
  return (
    <>
      <div className="main">
        <div className="purple"></div>
        <div className="login-comp">
          <div className="logo">
            <img src={RadicallX} alt="logo"  />
          </div>
          <div className="form-container">
            <form>
              <div className="form-inputs">
                <label id="label" htmlFor="login">
                  Login
                </label>

                <input type="email" name="email" placeholder="Email" />
                <input type="text" name="password" placeholder="Password" />
              </div>
              <div className="check-forg">
                <label>
                  <input type="checkbox" value="Remember me" />
                  Remember me
                </label>
                <p>Forgot Password</p>
              </div>
              <div>
                <button type="submit">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loginscreen;
