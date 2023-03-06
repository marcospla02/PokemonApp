import { ContainerHome, ContainerImg } from "@/components/Styles/HomeStyle";
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
import ContainerInfo from "./ContainerInfo/ContainerInfo";

const Home = () => {
  window.scrollTo(0, 0);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);
  const pokemons = useAppSelector<any>((state) => state.pokemons[0]);
  const search = useAppSelector((state) => state.byName);
  const dispatch = useAppDispatch();
  const indexOfLastPokemon = page * 10;
  const indexOfFirstPokemon = indexOfLastPokemon - 10;

  const countPokemons = Math.ceil(pokemons?.length / 10);

  const tenPokemons = pokemons?.slice(indexOfFirstPokemon, indexOfLastPokemon);

  useEffect(() => {
    setTimeout(() => setLoading(true));
    dispatch(getAllPokemons());
    if (pokemons?.length) setTimeout(() => setLoading(false), 1500);
  }, []);

  useEffect(() => {
    setTimeout(() => setLoading(true));
    getPokemons(pokemons);
    if (pokemons?.length) setTimeout(() => setLoading(false), 1500);
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
      ) : search.length ? (
        <ContainerInfo />
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
          <ContainerInfo tenPokemons={tenPokemons} />

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
