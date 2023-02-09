import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import useAuthContext from "./hooks/useAuthContext";
import AddBook from "./pages/AddBook";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Showcase from "./pages/Showcase";

function App() {
  const { user } = useAuthContext();

  return (
    <Router>
      <Routes>
        <Route
          path="/showcase"
          element={!user ? <Showcase /> : <Navigate to="/" />}
        />
        <Route
          path="/register"
          element={!user ? <Register /> : <Navigate to="/" />}
        />
        <Route
          path="/login"
          element={!user ? <Login /> : <Navigate to="/" />}
        />
        <Route
          path="/"
          element={user ? <Home /> : <Navigate to="/showcase" />}
        />
        <Route
          path="/add-book"
          element={user ? <AddBook /> : <Navigate to="/showcase" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
