import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Showcase from "./pages/Showcase";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/showcase" element={<Showcase />} />
      </Routes>
    </Router>
  );
}

export default App;
