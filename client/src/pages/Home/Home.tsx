import {
  ButtonHome,
  ContainerHome,
  ContainerImg,
} from "@/components/Styles/HomeStyle";
import { Actions, Pokemons } from "@/models";
import {
  createUserAction,
  getAllPokemons,
  getAllUsers,
  getPokemons,
  getUserAction,
  resetFilters,
  useAppDispatch,
  useAppSelector,
} from "@/redux";
import { getLocalStorage } from "@/utility";
import { useAuth0 } from "@auth0/auth0-react";
import { Stack } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import { useEffect, useState } from "react";
import pokebola from "../../../public/pokebola.gif";
import ContainerInfo from "./ContainerInfo/ContainerInfo";

const Home = () => {
  window.scrollTo(0, 0);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);

  const filter = useAppSelector((state) => state.filter);
  const pokemons = useAppSelector((state) => state.pokemons);
  const search = useAppSelector((state) => state.byName);
  const error = useAppSelector((state) => state.error);
  const allUsers = useAppSelector((state) => state.users);

  const { isAuthenticated, user } = useAuth0();
  const dispatch = useAppDispatch();

  const indexOfLastPokemon = page * 10;
  const indexOfFirstPokemon = indexOfLastPokemon - 10;

  const currentPokemons = !filter?.length ? pokemons.length : filter.length;

  const countPokemons = Math.ceil(currentPokemons / 10);

  let tenPokemons: Pokemons[] = filter.slice(
    indexOfFirstPokemon,
    indexOfLastPokemon
  );
  // : pokemons.slice(indexOfFirstPokemon, indexOfLastPokemon);

  const favAlstg = getLocalStorage("favorites");

  useEffect(() => {
    if (isAuthenticated) {
      if (allUsers.length) {
        const userFind = allUsers.find((u) => u.id === user?.email);

        if (userFind) dispatch(getUserAction(userFind.email));

        const matchFav = favAlstg && JSON.parse(favAlstg);

        if (!userFind && allUsers.length) {
          const objUser = {
            id: user?.email,
            name: user?.name ? user?.name : (user?.nickname as string),
            email: user?.email as string,
            favorites: matchFav ? matchFav : [],
          };
          dispatch(createUserAction(objUser));
        }
      } else {
        const matchFav = favAlstg && JSON.parse(favAlstg);

        const objUser = {
          id: user?.email,
          name: user?.name as string,
          email: user?.email as string,
          favorites: matchFav ? matchFav : [],
        };
        dispatch(createUserAction(objUser));
      }
    }
  }, [isAuthenticated, pokemons]);

  useEffect(() => {
    dispatch(getAllUsers());
    setLoading(true);
    if (!pokemons.length) dispatch(getAllPokemons());
    if (pokemons.length || filter?.length)
      setTimeout(() => setLoading(false), 3000);
    else setTimeout(() => setLoading(false), 2500);
  }, []);

  useEffect(() => {
    dispatch(getAllUsers());
    setLoading(true);
    if (!pokemons.length) getPokemons(pokemons);

    if (pokemons.length || filter?.length)
      setTimeout(() => setLoading(false), 3000);
    else setTimeout(() => setLoading(false), 2500);

    getLocalStorage(Actions.GET_POKEMONS) && dispatch(resetFilters());
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
      ) : search.length || error !== "" ? (
        <ContainerInfo />
      ) : filter.length ? (
        <div className="container-all">
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
      ) : (
        <div>
          <h1>We do not have pokemos with this type</h1>
          <ButtonHome onClick={() => dispatch(resetFilters())}>Home</ButtonHome>
        </div>
      )}
    </ContainerHome>
  );
};

export default Home;
