import { Card, CardPokemon } from "@/components";
import { Pokemons } from "@/models";
import { useAppSelector } from "@/redux";
import Filtered from "../Filtered/Filtered";

const RenderCardPokemons = (props: any) => {
  const search = useAppSelector((state) => state.byName);
  return (
    <>
      {!search.length && <Filtered />}

      <Card>
        {props.tenPokemons.length &&
          props.tenPokemons.map((poke: Pokemons) => {
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
          })}
      </Card>
    </>
  );
};

export default RenderCardPokemons;
