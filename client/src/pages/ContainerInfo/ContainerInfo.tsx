import { Card, CardPokemon } from "@/components";
import { Pokemons } from "@/models";
import { useAppSelector } from "@/redux";

const ContainerInfo = ({ tenPokemons }: any) => {
  const search = useAppSelector((state) => state.byName);
  const error: string = useAppSelector((state) => state.error);

  tenPokemons = search.length ? search : tenPokemons;

  return (
    <div>
      <Card>
        {error ? (
          <h1>{error}</h1>
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
