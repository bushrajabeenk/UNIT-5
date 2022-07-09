import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Loginpage from "./components/Loginpage";
import Signuppage from "./components/Signuppage";
import Notespage from "./components/Notespage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/signup" element={<Signuppage />} />
        <Route path="/notes" element={<Notespage />} />
      </Routes>
    </div>
  );
}

export default App;
