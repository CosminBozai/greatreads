import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useLogin from "../hooks/useLogin";
import logo from "../assets/greatreads.png";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoading, error } = useLogin();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isSuccessful = await login(email, password);
    if (isSuccessful) navigate("/");
  };
  return (
    <div className="my-10 mx-auto w-80">
      <img src={logo} alt="" className="mx-auto mb-6 h-11" />
      <h1 className="mb-6 whitespace-nowrap text-center text-5xl">Log in</h1>
      {error && <div>{error}</div>}
      <form onSubmit={handleSubmit}>
        <fieldset className="mb-5 flex flex-col">
          <label htmlFor="email" className="mb-1">
            {" "}
            Email
          </label>
          <input
            type="text"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-2xl border border-zinc-500 bg-gray-50 px-4 py-1 outline-none hover:bg-gray-100 focus:border-blue-700 focus:bg-white focus:shadow-aroundBlue"
          />
        </fieldset>
        <fieldset className="mb-5 flex flex-col">
          <label htmlFor="password" className="mb-1">
            {" "}
            Password
          </label>
          <input
            type="text"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            className="rounded-2xl border border-zinc-500 bg-gray-50 px-4 py-1 outline-none hover:bg-gray-100 focus:border-blue-700 focus:bg-white focus:shadow-aroundBlue"
          />
        </fieldset>
        <button
          disabled={isLoading}
          className="mb-14 h-9 w-full cursor-pointer rounded-2xl border bg-brown py-1 text-center text-white hover:brightness-125"
        >
          Log in
        </button>
      </form>
      <div className="relative border-t border-t-brown ">
        <p className="absolute -top-3 left-[50%] -translate-x-[50%] bg-white  px-2">
          New to Greatreads?{" "}
        </p>
        <button className="mt-8 h-9 w-full rounded-2xl border border-gray-400 py-1 text-center hover:brightness-50">
          <Link to="/register" className="block w-full">
            {" "}
            Sign up
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Login;
