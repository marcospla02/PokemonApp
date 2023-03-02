import { Profile, Favorites, Home } from "@/pages";
import { Route, Routes } from "react-router-dom";

const Switch = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/favorites" element={<Favorites />} />
    </Routes>
  );
};

export default Switch;
