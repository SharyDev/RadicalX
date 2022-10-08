import React, {useState} from "react";
import "./login.css";
import Axios from "axios";
import RadicallX from '../images/RadicallX.png';

const Loginscreen = () => {
const [emailEnt , setEmail] = useState("");
const [passwordEnt, setPassword] = useState("");
const Login = () => {
  
  Axios.post("https://localhost:3001/login", {
    email: emailEnt,
    password: passwordEnt,
  }
  )
  .then((response) => {
    console.log(response);
  });
};

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

                <input type="email" name="email" placeholder="Email" onChange={(e)=>{setEmail(e.target.value);
                }} 
                />
                <input type="password" name="password" placeholder="Password" onChange={(e) => {
                  setPassword(e.target.value);
                }} />
              </div>
              <div className="check-forg">
                <label>
                  <input type="checkbox" value="Remember me" />
                  Remember me
                </label>
                <p>Forgot Password</p>
              </div>
              <div>
                <button type="submit" onClick={Login}>Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loginscreen;
