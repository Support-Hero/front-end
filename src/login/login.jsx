import React from "react";
import Navbar from "../Navbar/Navbar";
import Bottom
 from "../Bottom/Bottom";
const Login = ({ navigate }) => {
  console.log(import.meta.env.VITE_API_HOST);

  return (
    <>
    <Navbar />

      <div className="d-flex justify-content-center align-items-center w-100">
        <img
          src="https://media.discordapp.net/attachments/1138692622467211358/1142424320388378674/image.png"
          style={{ width: "50%", objectFit: "contain" }}
        />
        <form onSubmit={() => navigate("/welcome")} className="w-25" style={{marginRight:"50px"}}>
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
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
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
              Check me out
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
      <Bottom />
        <div className="d-flex w-100 ">
          <img className="w-50 " src="https://media.istockphoto.com/id/1268410371/vector/disabled-people-help-and-diversity.jpg?s=612x612&w=0&k=20&c=7I-mbaXwfVtwXvwDlm6pl9EomlWBOZiip9Wb6MxvkK0=" />
          <img className="w-50" src="https://www.reachfortraining.com.au/wp-content/uploads/2023/04/home-community-1.2-1.jpg" />
        </div>
    </>
  );
};
export default Login;
