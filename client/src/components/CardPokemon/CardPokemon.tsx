import { Pokemons } from "@/models";
import {
  addFavorites,
  pokemonsDetail,
  useAppDispatch,
  useAppSelector,
} from "@/redux";
import { Favorite } from "@mui/icons-material";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import { IconButton } from "@mui/material";
import { Container } from "../Styles/CardStyle";

const CardPokemon = (props: Pokemons) => {
  const favorites = useAppSelector((state) => state.favorites);

  const handleAdd = (e: any) => {
    console.log("soy event:", e);

    // dispatch(addFavorites())
  };

  let name: string =
    props.name.charAt(0) !== props.name.charAt(0).toUpperCase()
      ? props.name.charAt(0).toUpperCase() + props.name.slice(1)
      : props.name;

  return (
    <Container>
      <IconButton aria-label="add to favorites" onClick={handleAdd}>
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
