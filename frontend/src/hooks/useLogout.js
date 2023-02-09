import useAuthContext from "./useAuthContext";

const useLogout = () => {
  const logout = () => {
    const { dispatch } = useAuthContext();

    localStorage.removeItem("user");

    dispatch({ type: "LOGOUT" });
  };

  return logout;
};

export default useLogout;
