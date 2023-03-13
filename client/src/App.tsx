import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import "./App.css";
import { NavBar } from "./components";
import Switch from "./components/Switch/Switch";
import { Actions } from "./models";
import {
  addFavoritesArray,
  getAllPokemons,
  getAllUsers,
  getTypes,
  getUserAction,
  resetFilters,
  useAppDispatch,
  useAppSelector,
} from "./redux";
import { getLocalStorage } from "./utility";

function App() {
  const allUsers = useAppSelector((state) => state.users);
  const userDb = useAppSelector((state) => state.user);
  const pokemons = useAppSelector((state) => state.pokemons);
  const favorites = useAppSelector((state) => state.favorites);

  const dispatch = useAppDispatch();

  const { isAuthenticated, user } = useAuth0();

  // const favoriteStg = getLocalStorage("favorites");
  // const favorites = favoriteStg && JSON.parse(favoriteStg);
  useEffect(() => {
    if (isAuthenticated) {
      if (allUsers) {
        const userFind = allUsers.find((u) => u.id === user?.email);

        if (userFind) {
          dispatch(getUserAction(userFind.email));

          if (/* !favorites.length && */ userFind.favorites !== null) {
            console.log("estoy por despachar el add arrat de favorites");
            dispatch(addFavoritesArray(userFind.favorites));
          }
        }
      }
    }
  }, [isAuthenticated]);

  useEffect(() => {
    dispatch(getAllUsers());
    dispatch(getAllPokemons());
    dispatch(getTypes());
    getLocalStorage(Actions.GET_POKEMONS) && dispatch(resetFilters());
    if (isAuthenticated) {
      const userFind = allUsers.find((u) => u.id === user?.email);

      if (userFind) dispatch(getUserAction(userFind.email));
    }
  }, []);

  useEffect(() => {
    dispatch(getAllPokemons());
  }, [dispatch]);

  return (
    <div className="App">
      <NavBar />
      <main>
        <Switch />
      </main>
    </div>
  );
}

export default App;
