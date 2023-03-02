import { Pokemons } from "@/models";
import { addFavorites, useAppDispatch, useAppSelector } from "@/redux";
import { Favorite } from "@mui/icons-material";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import { IconButton } from "@mui/material";
import { Container } from "../Styles/CardStyle";

const CardPokemon = (props: Pokemons) => {
  const favorites = useAppSelector((state) => state.favorites);
  const dispatch = useAppDispatch();

  const handleAdd = (e: any) => {
    console.log("soy event:", e);

    // dispatch(addFavorites())
  };

  let name = props.name.charAt(0).toUpperCase() + props.name.slice(1);

  let types = !props.types.length ? props.typesApi : props.types;

  return (
    <Container>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <IconButton aria-label="add to favorites" onClick={handleAdd}>
              <Favorite />
            </IconButton>

            <img
              src={props.img}
              alt="img pokemon"
              height="90px"
              width="100px"
              className="card"
            />
            <p>
              <strong>{name}</strong>
            </p>
            <p>
              <MonitorHeartIcon sx={{ color: "red" }} />{" "}
              <strong>{props.life}</strong>
            </p>
          </div>
          <div className="flip-card-back">
            <IconButton
              aria-label="add to favorites"
              onClick={handleAdd}
              className="heart"
            >
              <Favorite />
            </IconButton>

            <div className="left">
              <p>
                <strong>Attack: {props.Attack}</strong>
              </p>
              <p>
                <strong>Defense: {props.Defense}</strong>
              </p>
            </div>
            <div className="rigth">
              <p>
                <strong>Speed: {props.Speed}</strong>
              </p>
              <p>
                <strong>Height: {props.height}</strong>
              </p>
            </div>
            <div className="types">
              <p className="p-types">
                <strong>Types:</strong>
              </p>
              {types.length &&
                types.map((t: any) => {
                  return (
                    // <p>
                    <strong> .{t.hasOwnProperty("name") ? t.name : t}</strong>
                    /* </p> */
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CardPokemon;
