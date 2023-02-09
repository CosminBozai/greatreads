import { useState } from "react";
import useAuthContext from "./useAuthContext";
import axios from "axios";

const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const login = async (email, password) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        "/api/user/login",
        {
          email,
          password,
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

  return { login, isLoading, error };
};

export default useLogin;
