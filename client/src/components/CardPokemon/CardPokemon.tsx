import { Pokemons } from "@/models";
import styled from "styled-components";

const Container = styled.div`
  background-color: #00000018;
  border-radius: 5px;
  height: 200px;
  width: 200px;
  margin-bottom: 25px;
  box-shadow: 6px 2px 8px rgba(0, 0, 0, 0.74);
  .p {
    color: white;
    background-color: aliceblue;
  }
`;

const CardPokemon = (props: Pokemons) => {
  return (
    <Container>
      <img src={props.img} alt="img pokemon" />
      <p>Name: {props.name}</p>
      <p>Life: {props.life}</p>
      {/* 
      <p>{props.Attack}</p>
      <p>{props.Defense}</p>
      <p>{height}</p>
      <p>{weight}</p> */}
    </Container>
  );
};

export default CardPokemon;
