import { deleteMessageError, useAppDispatch, useAppSelector } from "@/redux";
import { RenderCardPokemons } from "@/utility";
import { useEffect } from "react";

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
