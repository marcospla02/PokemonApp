import { Card, CardPokemon } from "@/components";
import { ContainerHome, ContainerImg } from "@/components/Styles/HomeStyle";
import { Pokemons } from "@/models";
import {
  getAllPokemons,
  getPokemons,
  useAppDispatch,
  useAppSelector,
} from "@/redux";
import { Stack } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import { useEffect, useState } from "react";
import pokebola from "../../../public/pokebola.gif";

const Home = () => {
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);
  const pokemons = useAppSelector<any>((state) => state.pokemons[0]);
  const dispatch = useAppDispatch();
  const indexOfLastPokemon = page * 10;
  const indexOfFirstPokemon = indexOfLastPokemon - 10;

  const countPokemons = Math.ceil(pokemons?.length / 10);

  const tenPokemons = pokemons?.slice(indexOfFirstPokemon, indexOfLastPokemon);

  useEffect(() => {
    setTimeout(() => setLoading(true));
    dispatch(getAllPokemons());
    if (pokemons?.length) setTimeout(() => setLoading(false), 2000);
  }, []);

  useEffect(() => {
    setTimeout(() => setLoading(true));
    getPokemons(pokemons);
    if (pokemons?.length) setTimeout(() => setLoading(false), 2000);
  }, [pokemons]);

  const handlePagination = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  return (
    <ContainerHome>
      {loading ? (
        <ContainerImg>
          <img src={pokebola} alt="loading.." />
        </ContainerImg>
      ) : (
        <div>
          <Stack spacing={3} sx={{ margin: 5 }}>
            <Pagination
              page={page}
              variant="outlined"
              count={countPokemons}
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                marginTop: 5,
              }}
              onChange={handlePagination}
            />
          </Stack>

          <Card>
            {tenPokemons?.length ? (
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
                      types={
                        poke.types.map((t: any) => {
                          return t;
                        })
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
          <Stack spacing={3} sx={{ margin: 5 }}>
            <Pagination
              page={page}
              variant="outlined"
              count={countPokemons}
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                marginTop: 5,
              }}
              onChange={handlePagination}
            />
          </Stack>
        </div>
      )}
    </ContainerHome>
  );
};

export default Home;
