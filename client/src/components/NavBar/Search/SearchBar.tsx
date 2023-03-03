import React, { useEffect, useState } from "react";
import { Button, SearchCss } from "./CssSearch";
import SearchIcon from "@mui/icons-material/Search";
import { getPokemonByName, useAppDispatch } from "@/redux";
import { useLocation } from "react-router-dom";

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
  const [disabled, setDisable] = useState<boolean>(false);
  const [searchPokemon, setSearchPokemon] = useState({
    name: "",
  });
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("/detail")) {
      setDisable(true);
    }
  }, []);

  const [error, setError] = useState({ message: "" });

  const dispatch = useAppDispatch();

  const handleSearch = (event: React.SyntheticEvent) => {
    let target = event.target as HTMLInputElement;

    setSearchPokemon({ ...searchPokemon, name: target.value });
  };

  const handleSumbit = () => {
    if (searchPokemon.name === "") {
      setError({ ...error, message: "the name is recuired" });
    }
    if (!error.message) {
      //hago el dispatch
      dispatch(getPokemonByName(searchPokemon.name));
    }
  };

  return (
    <>
      <SearchCss
        placeholder="Search pokemon..."
        onChange={handleSearch}
        disabled={disabled}
      ></SearchCss>

      <Button type="submit" onClick={handleSumbit} disabled={disabled}>
        <SearchIcon />
      </Button>
    </>
  );
};
export default SearchBar;
