import { CardPokemon } from "@/components";
import PaginationButtons from "@/components/pagination/pagination";
import { Pokemons } from "@/models";
import { getAllPokemons, useAppDispatch, useAppSelector } from "@/redux";
import { useEffect } from "react";
import styled from "styled-components";

const Home = () => {
  const pokemons = useAppSelector<any>((state) => state.pokemons);
  const dispatch = useAppDispatch();

  // pokemons me viene como un array dentro de un array, por eso le digo a use selector
  // que va hacer del type any para poder acceder, esto lo hago hasta tener una solucion

  useEffect(() => {
    dispatch(getAllPokemons());
  }, []);

  const Card = styled.div`
    display: flex;
    flex-direction: row;
    padding: 5px 40px;
    flex-wrap: wrap;
    position: relative;
    justify-content: space-between;
    top: 150px;
  `;

  return (
    <>
      <Card>
        {pokemons.length ? (
          pokemons[0].map((poke: Pokemons) => {
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
                  typesApi={[]}
                  types={
                    poke.types
                    // pokemon.types.length !== 0 ? pokemon.types : pokemon.typesApi
                  }
                />
              </div>
            );
          })
        ) : (
          <h1>No hay nada</h1>
        )}
      </Card>
    </>
  );
};

export default Home;
