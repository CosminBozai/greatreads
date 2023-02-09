import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/greatreads.png";
import useSignup from "../hooks/useSignup";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { signup, error, isLoading } = useSignup();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isSuccessful = await signup(name, email, password, confirmPassword);
    if (isSuccessful) navigate("/");
  };

  return (
    <div className="my-10 mx-auto w-80">
      <img src={logo} alt="" className="mx-auto mb-6 h-11" />
      <h1 className="mb-6 whitespace-nowrap text-center text-5xl">
        Create Account
      </h1>
      {error && <div>{error}</div>}
      <form onSubmit={handleSubmit}>
        <fieldset className="mb-5 flex flex-col">
          <label htmlFor="name" className="mb-1">
            {" "}
            Your name
          </label>
          <input
            type="text"
            name="name"
            onChange={(e) => setName(e.target.value.trim())}
            className="focus:shadow-around rounded-2xl border border-zinc-500 bg-gray-50 px-4 py-1 outline-none hover:bg-gray-100 focus:border-blue-700 focus:bg-white"
          />
        </fieldset>
        <fieldset className="mb-5 flex flex-col">
          <label htmlFor="email" className="mb-1">
            {" "}
            Email
          </label>
          <input
            type="text"
            name="email"
            onChange={(e) => setEmail(e.target.value.trim())}
            className="focus:shadow-around rounded-2xl border border-zinc-500 bg-gray-50 px-4 py-1 outline-none hover:bg-gray-100 focus:border-blue-700 focus:bg-white"
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
            onChange={(e) => setPassword(e.target.value.trim())}
            className="focus:shadow-around rounded-2xl border border-zinc-500 bg-gray-50 px-4 py-1 outline-none hover:bg-gray-100 focus:border-blue-700 focus:bg-white"
          />
        </fieldset>
        <fieldset className="mb-5 flex flex-col">
          <label htmlFor="re-password" className="mb-1">
            {" "}
            Re-enter password
          </label>
          <input
            type="text"
            name="re-password"
            onChange={(e) => setConfirmPassword(e.target.value.trim())}
            className="focus:shadow-around rounded-2xl border border-zinc-500 bg-gray-50 px-4 py-1 outline-none hover:bg-gray-100 focus:border-blue-700 focus:bg-white"
          />
        </fieldset>
        <button
          disabled={isLoading}
          className="mb-10 h-9 w-full cursor-pointer rounded-2xl border bg-brown py-1 text-center text-white hover:brightness-125"
        >
          Create account
        </button>
      </form>
      <p>
        Already have an account?{" "}
        <Link to="/login" className="underline hover:text-sky-800">
          Sign in
        </Link>
      </p>
    </div>
  );
}

export default Register;
