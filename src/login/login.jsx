import React from "react";
import "./login.css";
import Body from "../components/body/Body";
import { api } from "../api";
const Login = ({ navigate }) => {

  // login request
  const submit = async () => {
    // const formData = new FormData();
    // formData.append("email", email);
    // formData.append("password", password);
    // await fetch(api + "/login", {
    //   method: "POST",
    //   mode: "cors",
    //   credentials: "same-origin", 
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: formData,
    // }).then((res)=> {
    //   localStorage.setItem('username','km@g.com')
    // }).catch(error=> {
    //   console.error("Error:", error);
    // })
    navigate("/welcome");
  };
  
  const body = (
    <>
      <div className="d-flex justify-content-center align-items-center w-100" >
        <img
          src="https://media.discordapp.net/attachments/1138692622467211358/1142424320388378674/image.png"
          style={{ width: "40%", objectFit: "contain" }}
          id="logo"
        />
        <form onSubmit={submit} id="loginbox" style={{ marginRight: "50px" }}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              // required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
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
      <div className="d-flex w-100 ">
        <img
          id="image1"
          src="https://media.istockphoto.com/id/1268410371/vector/disabled-people-help-and-diversity.jpg?s=612x612&w=0&k=20&c=7I-mbaXwfVtwXvwDlm6pl9EomlWBOZiip9Wb6MxvkK0="
        />
        <img
          id="image2"
          src="https://www.reachfortraining.com.au/wp-content/uploads/2023/04/home-community-1.2-1.jpg"
        />
      </div>
    </>
  );
  return <Body body={body} />;
};
export default Login;
