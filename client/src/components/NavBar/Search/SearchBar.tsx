import { getPokemonByName, useAppDispatch, useAppSelector } from "@/redux";
import { KeyDown } from "@/utility/keyDwn";
import SearchIcon from "@mui/icons-material/Search";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Button, SearchCss } from "./CssSearch";

const SearchBar = () => {
  window.scrollTo(0, 0);
  const [disabled, setDisable] = useState<boolean>(false);
  const [error, setError] = useState({ message: "" });
  const [searchPokemon, setSearchPokemon] = useState({ name: "" });

  const stateName = useAppSelector((state) => state.byName);

  const location = useLocation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (
      location.pathname.includes("/detail") ||
      location.pathname.includes("/profile") ||
      location.pathname.includes("/favorites") ||
      location.pathname.includes("/about")
    ) {
      setDisable(true);
    }
  }, []);

  useEffect(() => {
    setSearchPokemon({ name: "" });
  }, [stateName]);

  const handleSearch = (event: React.SyntheticEvent) => {
    let target = event.target as HTMLInputElement;

    setSearchPokemon({ ...searchPokemon, name: target.value });
  };

  const handleKeyDown = (event: KeyDown) => {
    if (searchPokemon.name === "") {
      return setError({ ...error, message: "the name is recuired" });
    }
    if (searchPokemon.name) setError({ message: "" });

    if (event.key === "Enter" && !error.message) {
      dispatch(getPokemonByName(searchPokemon.name));
    }
  };

  const handleSumbit = () => {
    if (searchPokemon.name === "") {
      console.log("soy errro", error);
      return setError({ ...error, message: "the name is recuired" });
    }
    if (searchPokemon.name) setError({ message: "" });
    if (!error.message) {
      dispatch(getPokemonByName(searchPokemon.name));
    }
  };

  return (
    <>
      <SearchCss
        placeholder="Search pokemon..."
        value={searchPokemon.name}
        onChange={handleSearch}
        disabled={disabled}
        onKeyDown={handleKeyDown}
      ></SearchCss>

      <Button type="submit" onClick={handleSumbit} disabled={disabled}>
        <SearchIcon />
      </Button>
    </>
  );
};
export default SearchBar;
