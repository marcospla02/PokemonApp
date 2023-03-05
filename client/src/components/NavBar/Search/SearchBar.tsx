import { getPokemonByName, useAppDispatch } from "@/redux";
import { KeyDown } from "@/utility/keyDwn";
import SearchIcon from "@mui/icons-material/Search";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Button, SearchCss } from "./CssSearch";

interface EventTarget {
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    useCapture?: boolean
  ): void;
  dispatchEvent(evt: Event): boolean;
  removeEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    useCapture?: boolean
  ): void;
}

const SearchBar = () => {
  window.scrollTo(0, 0);
  const [disabled, setDisable] = useState<boolean>(false);
  const [searchPokemon, setSearchPokemon] = useState({
    name: "",
  });
  const location = useLocation();

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

  const [error, setError] = useState({ message: "" });

  const dispatch = useAppDispatch();

  const handleSearch = (event: React.SyntheticEvent) => {
    let target = event.target as HTMLInputElement;

    setSearchPokemon({ ...searchPokemon, name: target.value });
  };

  const handleKeyDown = (event: KeyDown) => {
    if (searchPokemon.name === "") {
      return setError({ ...error, message: "the name is recuired" });
    }
    if (searchPokemon.name) setError({ message: "" });

    if (event.key === "Enter" && !error.message)
      return dispatch(getPokemonByName(searchPokemon.name));
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
        onChange={handleSearch}
        disabled={disabled}
        type="search"
        onKeyDown={handleKeyDown}
      ></SearchCss>

      <Button type="submit" onClick={handleSumbit} disabled={disabled}>
        <SearchIcon />
      </Button>
    </>
  );
};
export default SearchBar;
