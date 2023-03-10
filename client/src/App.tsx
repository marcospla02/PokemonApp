import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./App.css";
import { NavBar } from "./components";
import Switch from "./components/Switch/Switch";
import {
  addFavorites,
  addFavoritesArray,
  getAllPokemons,
  getAllUsers,
  getUserAction,
  useAppDispatch,
  useAppSelector,
} from "./redux";

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

          if (userFind.favorites !== null) {
            console.log("estoy por despachar el add arrat de favorites");
            dispatch(addFavoritesArray(userFind.favorites));
          }
        }
      }
    }
  }, [isAuthenticated, pokemons]);

  useEffect(() => {
    dispatch(getAllUsers());
    dispatch(getAllPokemons());
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
