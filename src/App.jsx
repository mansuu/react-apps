import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Netflix from "./pages/Netflix";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Player from "./pages/Player";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="login" Component={Login} />
        <Route exact path="signup" Component={Signup} />
        <Route exact path="" Component={Netflix} />
        <Route exact path="player" Component={Player} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
