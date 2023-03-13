import { deleteMessageError, useAppDispatch, useAppSelector } from "@/redux";
import { useEffect } from "react";
import RenderCardPokemons from "../RenderCardPokemon/RenderCardPokemon";

const RenderPokemonByName = () => {
  const search = useAppSelector((state) => state.byName);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (search.length) dispatch(deleteMessageError());
  }, [search]);

  return (
    <div>{search.length && <RenderCardPokemons tenPokemons={search} />}</div>
  );
};

export default RenderPokemonByName;
