import { Pokemons } from "@/models";
import {
  addFavorites,
  removeFavorites,
  updateUser,
  useAppDispatch,
  useAppSelector,
} from "@/redux";
import { Favorite } from "@mui/icons-material";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import { IconButton } from "@mui/material";
import { Container } from "../Styles/CardStyle";

const CardPokemon = (props: Pokemons) => {
  const favorites: any = useAppSelector((state) => state.favorites);
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const handleAddOrDelete = () => {
    const filteredState =
      favorites.length &&
      favorites.find((fav: Pokemons) => fav.id === props.id);

    if (filteredState) {
      dispatch(removeFavorites(filteredState.id));

      const filteredDb =
        favorites.length &&
        favorites.filter((fav: Pokemons) => fav.id !== filteredState.id);

      if (user.id) dispatch(updateUser(user.id, { favorites: filteredDb }));

      return;
    }

    dispatch(addFavorites(props));

    if (user.id) {
      dispatch(updateUser(user.id, { favorites: [...user.favorites, props] }));
    }
  };

  let name: string =
    props.name.charAt(0) !== props.name.charAt(0).toUpperCase()
      ? props.name.charAt(0).toUpperCase() + props.name.slice(1)
      : props.name;

  return (
    <Container>
      <IconButton
        aria-label="add to favorites"
        onClick={() => handleAddOrDelete()}
        className={
          favorites.length !== null &&
          favorites.find((fav: Pokemons) => fav.id === props.id)
            ? "icon-button-red"
            : "icon-button"
        }
      >
        <Favorite />
      </IconButton>
      <a href={`/detail/${props.id}`}>
        <img
          src={props.img}
          alt="img pokemon"
          height="90px"
          width="100px"
          className="card"
        />
      </a>
      <p>
        <strong>{name}</strong>
      </p>
      <p>
        <MonitorHeartIcon sx={{ color: "red" }} /> <strong>{props.life}</strong>
      </p>
    </Container>
  );
};

export default CardPokemon;
function dispatch(arg0: { payload: Pokemons; type: "favorites/addFavorites" }) {
  throw new Error("Function not implemented.");
}
