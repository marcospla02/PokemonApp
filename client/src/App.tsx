import { Route, Routes } from "react-router-dom";
import "./App.css";
import { NavBar } from "./components";
import { Favorites, Home, Profile } from "./pages";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
