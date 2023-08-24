import React from "react";
import './login.css'
import Body from '../body/Body'
const Login = ({ navigate }) => {
  console.log(import.meta.env.VITE_API_HOST);
  const body=(
    <>
    <div className="d-flex justify-content-center align-items-center w-100">
          <img
            src="https://media.discordapp.net/attachments/1138692622467211358/1142424320388378674/image.png"
            style={{ width: "40%", objectFit: "contain" }}
            id="logo"
          />
          <form
            onSubmit={() => navigate("/welcome")}
            id="loginbox"
            style={{ marginRight: "50px" }}
          >
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                required
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
                required
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
        </>
  )
  return (
   <Body body={body} />
  );
};
export default Login;
