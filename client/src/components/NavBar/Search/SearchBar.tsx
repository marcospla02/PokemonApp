import React, { useState } from "react";
import { Button, SearchCss } from "./CssSearch";
import SearchIcon from "@mui/icons-material/Search";
import { getPokemonByName, useAppDispatch } from "@/redux";

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

interface SyntheticEvent {
  bubbles: boolean;
  cancelable: boolean;
  currentTarget: EventTarget;
}

const SearchBar = () => {
  const [searchPokemon, setSearchPokemon] = useState({
    name: "",
  });

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
      ></SearchCss>

      <Button type="submit" onClick={handleSumbit}>
        <SearchIcon />
      </Button>
    </>
  );
};
export default SearchBar;
