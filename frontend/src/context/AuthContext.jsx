import { createContext, useReducer, useEffect } from "react";

const AuthContext = createContext();

const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { user: action.payload };
    case "LOGOUT":
      return { user: null };
    default:
      return state;
  }
};

const AuthContextProvider = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user")) || null;

  const [state, dispatch] = useReducer(authReducer, {
    user: user,
  });

  console.log("AuthContext state: ", state);
  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, authReducer, AuthContextProvider };
