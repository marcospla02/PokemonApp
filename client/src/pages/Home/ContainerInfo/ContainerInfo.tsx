import { ContainerError } from "@/components/Styles/ContainerInfoCss";
import { deleteMessageError, useAppDispatch, useAppSelector } from "@/redux";
import { useEffect } from "react";
import pokemonConfundido from "../../About/img/pokemon-confundido.gif";
import RenderCardPokemons from "../RenderCardPokemon/RenderCardPokemon";
import RenderPokemonByName from "../SearchName/RenderPokemonByName";

const ContainerInfo = ({ tenPokemons }: any) => {
  const search = useAppSelector((state) => state.byName);
  const error: string = useAppSelector((state) => state.error);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (search.length) dispatch(deleteMessageError());
  }, [search]);

  return (
    <div>
      {error ? (
        <ContainerError>
          <h2>{error}</h2>
          <div className="image">
            <a href="/">
              <img
                src={pokemonConfundido}
                alt="pokemons confundido"
                height="200px"
                width="250px"
              />
            </a>
          </div>
        </ContainerError>
      ) : search.length ? (
        <RenderPokemonByName />
      ) : tenPokemons.length ? (
        <RenderCardPokemons tenPokemons={tenPokemons} />
      ) : (
        <h1>No hay nada</h1>
      )}
    </div>
  );
};

export default ContainerInfo;
