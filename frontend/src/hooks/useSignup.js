import { useState } from "react";
import useAuthContext from "./useAuthContext";
import axios from "axios";

const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const signup = async (name, email, password, confirmPassword) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        "/api/user/signup",
        {
          name,
          email,
          password,
          confirmPassword,
        },
        { headers: { "Content-Type": "application/json" } }
      );

      localStorage.setItem("user", response.data);

      dispatch({ type: "LOGIN", payload: response.data });

      setIsLoading(false);

      return true;
    } catch (err) {
      setIsLoading(false);
      setError(err.response.data.error);

      return false;
    }
  };

  return { signup, isLoading, error };
};

export default useSignup;
