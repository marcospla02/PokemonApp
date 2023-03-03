import { Profile, Favorites, Home, Detail } from "@/pages";
import { Route, Routes } from "react-router-dom";

const Switch = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/detail/:id" element={<Detail />} />
    </Routes>
  );
};

export default Switch;
