import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import "./App.css";
import { NavBar } from "./components";
import Switch from "./components/Switch/Switch";
import { Actions, Pokemons, User } from "./models";
import {
  addFavorites,
  addFavoritesArray,
  getAllPokemons,
  getAllUsers,
  getTypes,
  getUserAction,
  resetFilters,
  updateUser,
  useAppDispatch,
  useAppSelector,
} from "./redux";
import { getLocalStorage } from "./utility";

function App() {
  const allUsers = useAppSelector((state) => state.users);
  const Favorites = useAppSelector((state) => state.favorites);

  const dispatch = useAppDispatch();

  const { isAuthenticated, user } = useAuth0();

  useEffect(() => {
    if (isAuthenticated) {
      if (allUsers) {
        const userFind = allUsers.find((u) => u.id === user?.email);

        if (userFind) {
          dispatch(getUserAction(userFind.email));

          if (!userFind.favorites.length && Favorites.length) {
            dispatch(updateUser(userFind.email, { favorites: Favorites }));
          }
          if (userFind.favorites.length && !Favorites.length) {
            dispatch(addFavoritesArray(userFind.favorites));
          }
          if (userFind.favorites.length && Favorites.length) {
            let FavDontHave = Favorites.map((fav: Pokemons) => {
              if (!userFind.favorites.find((p) => p.id === fav.id)) {
                return fav;
              }
            });

            FavDontHave = FavDontHave.filter((p) => p !== undefined);
            dispatch(
              updateUser(userFind.email, {
                favorites: [...userFind.favorites, ...FavDontHave],
              })
            );

            userFind.favorites.map((p: Pokemons) => {
              if (!Favorites.find((fav) => fav.id === p.id)) {
                dispatch(addFavorites(p));
              }
            });
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
      const userFind = allUsers.find((u: User) => u.id === user?.email);

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
