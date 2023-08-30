import React, { useState } from "react";
import "./login.css";
import { api } from "../api";
import Navbar from "../components/Navbar/Navbar";
import Bottom from "../components/Bottom/Bottom";
const Login = ({ navigate }) => {
  const [email, setEmial]=useState()
  const [password, setPassword]=useState()
  // login request
  const submit = async () => {
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    await fetch(api + "/login", {
      method: "POST",
      mode: "cors",
      credentials: "same-origin", 
      headers: {
        "Content-Type": "application/json",
      },
      body: formData,
    }).then((res)=> {
      // localStorage.setItem('username','km@g.com')
      console.log('res')
    }).catch(error=> {
      console.error("Error:", error);
    })
    navigate("/welcome");
  };
  
  const body = (
    <div className="container" >
      <div className="d-flex justify-content-center align-items-center" >
        <img
          src="https://media.discordapp.net/attachments/1138692622467211358/1142424320388378674/image.png"
          style={{ width: "50%", objectFit: "contain" }}
          id="logo"
        />
        <form onSubmit={submit} id="loginbox">
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(e)=>{
                e.preventDefault()
                setEmial(e.target.value)
              }}
              // required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
            value={password}
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              onChange={(e)=>{
                e.preventDefault()
                setPassword(e.target.value)
              }}
              // required
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              remember me
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Sign In
          </button>
        </form>
        
      </div>
      <div className="d-flex">
        <img
          id="image1"
          src="/images/login_img1.jpg"
        />
        <img
          id="image2"
          src="/images/login_img2.jpg"
        />
      </div>
    </div>
  );
  return(
    <div style={{ minHeight: "100vh", position: "relative" }} >
      <div >
        <Navbar />
        {body}
      </div>
      <Bottom />
    </div>
  );
};
export default Login;
