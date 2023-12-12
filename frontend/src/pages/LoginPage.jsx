import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../UserContext";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const { setUser } = useContext(UserContext);
  async function loginUser(e) {
    e.preventDefault();
    try {
      const { data } = await axios.post("/login", { email, password });
      setUser(data);
      alert("Login successful!");
      setRedirect(true);
    } catch (e) {
      alert("Login failed!");
    }
  }

  if (redirect) {
    return <Navigate to="/" />;
  }

  return (
    <div className="mt-0 grow flex items-center justify-around">
      <div>
        <h1 className="text-5xl text-center mb-4 uppercase font-semibold">
          Login
        </h1>
        <form className="max-w-md mx-auto" onSubmit={loginUser}>
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
          <button className="login">Login</button>
          <div className="text-center">
            <p>
              Don't have an account yet?{" "}
              <Link className="text-primary" to={"/register"}>
                Register Now.
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
