import { Card, CardPokemon } from "@/components";
import { ContainerError } from "@/components/Styles/ContainerInfoCss";
import { Pokemons } from "@/models";
import { deleteMessageError, useAppDispatch, useAppSelector } from "@/redux";
import { useEffect } from "react";
import pokemonConfundido from "../../../public/pokemon-confundido.gif";

const ContainerInfo = ({ tenPokemons }: any) => {
  const search = useAppSelector((state) => state.byName);
  const error: string = useAppSelector((state) => state.error);
  const dispatch = useAppDispatch();
  // tengo que hacerlo dinamico
  tenPokemons = search.length ? search : tenPokemons;

  useEffect(() => {
    if (search.length) dispatch(deleteMessageError());
  }, [search]);

  return (
    <div>
      <Card>
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
        ) : tenPokemons?.length ? (
          tenPokemons?.map((poke: Pokemons) => {
            return (
              <div key={poke.id}>
                <CardPokemon
                  key={poke.id}
                  id={poke.id}
                  idPoke={poke.idPoke}
                  name={poke.name}
                  life={poke.life}
                  height={poke.height}
                  weight={poke.weight}
                  Attack={poke.Attack}
                  Defense={poke.Defense}
                  Speed={poke.Speed}
                  img={poke.img}
                  stats={[]}
                  typesApi={poke.typesApi}
                  types={poke.types?.map((t: any) => {
                    return t;
                  })}
                />
              </div>
            );
          })
        ) : (
          <h1>No hay nada</h1>
        )}
      </Card>
    </div>
  );
};

export default ContainerInfo;
