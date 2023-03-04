import { Card, CardPokemon } from "@/components";
import { ContainerError } from "@/components/Styles/ContainerInfoCss";
import { Pokemons } from "@/models";
import { useAppSelector } from "@/redux";
import pokemonConfundido from "../../../public/pokemon-confundido.gif";

const ContainerInfo = ({ tenPokemons }: any) => {
  const search = useAppSelector((state) => state.byName);
  // const allStates = useAppSelector((state: any) => state[info]);
  const error: string = useAppSelector((state) => state.error);
  // tengo que hacerlo dinamico
  tenPokemons = search.length ? search : tenPokemons;

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
