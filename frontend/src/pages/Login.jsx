import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/greatreads.png";

function Login() {
  return (
    <div className="my-10 mx-auto w-80">
      <img src={logo} alt="" className="mx-auto mb-6 h-11" />
      <h1 className="mb-6 whitespace-nowrap text-center text-5xl">Login</h1>
      <form>
        <fieldset className="mb-5 flex flex-col">
          <label htmlFor="email" className="mb-1">
            {" "}
            Email
          </label>
          <input
            type="text"
            name="email"
            className="rounded-2xl border border-zinc-500 bg-gray-50 px-4 py-1 outline-none hover:bg-gray-100 focus:border-blue-700 focus:bg-white focus:shadow-around"
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
            className="rounded-2xl border border-zinc-500 bg-gray-50 px-4 py-1 outline-none hover:bg-gray-100 focus:border-blue-700 focus:bg-white focus:shadow-around"
          />
        </fieldset>
        <div className="mb-10 cursor-pointer rounded-2xl border bg-brown py-2 text-center text-white hover:brightness-125">
          Log in
        </div>
      </form>
      <p>
        New to Greatreads?{" "}
        <Link to="/register" className="underline">
          Sign up
        </Link>
      </p>
    </div>
  );
}

export default Login;
