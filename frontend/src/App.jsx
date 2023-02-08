import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddBook from "./pages/AddBook";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Showcase from "./pages/Showcase";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/showcase" element={<Showcase />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/add-book" element={<AddBook />} />
      </Routes>
    </Router>
  );
}

export default App;
