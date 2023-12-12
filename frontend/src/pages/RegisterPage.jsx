import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const registerUser = async (e) => {
    e.preventDefault(); //doesn't reload the page
    try {
      await axios.post("/register", {
        name,
        email,
        password,
      });
      alert("Successfully registered!");
    } catch (e) {
      alert("Registration failed!");
    }
  };
  return (
    <div className="mt-0 grow flex items-center justify-around">
      <div>
        <h1 className="text-5xl text-center mb-4 uppercase font-semibold">
          register
        </h1>
        <form className="max-w-md mx-auto" onSubmit={registerUser}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="login">Register</button>
          <div className="text-center">
            <p>
              Already a member?{" "}
              <Link className="text-primary" to={"/login"}>
                Login.
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
