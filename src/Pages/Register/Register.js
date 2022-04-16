import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const handleRegister = (e) => {
    e.preventDefault();
    // console.log(e.target.email.value);
    const name = e.target.fullName.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, email, password);
  };
  return (
    <div className="w-50 mx-auto">
      <h2 className="text-center">Please Register</h2>
      <form onSubmit={handleRegister}>
        <input
          className="w-100 my-2"
          type="name"
          name="fullName"
          id=""
          placeholder="Your Name"
        />
        <br />
        <input
          className="w-100 my-2 "
          type="email"
          name="email"
          id=""
          placeholder="Your Email"
        />
        <br />
        <input
          className="w-100 my-2"
          type="password"
          name="password"
          id=""
          placeholder="Your Password"
        />
        <br />
        {/* <input
          className="w-100 my-2"
          type="password"
          name=""
          id=""
          placeholder="Confirm Password"
        /> */}
        <br />
        <input className="w-100 my-2" type="submit" value="Register" />
      </form>
      <p>
        Already have an account? <a href="/login">Please Login</a>
      </p>
    </div>
  );
};

export default Register;
