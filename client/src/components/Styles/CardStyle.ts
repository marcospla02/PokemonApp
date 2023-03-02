import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: row;
  padding: 5px 100px;
  flex-wrap: wrap;
  position: relative;
  justify-content: space-between;
`;

export const Container = styled.div`
  background-color: var(--aliceblue);
  /* background-color: var(--yellow); */
  border-radius: 28px;
  height: 300px;
  width: 200px;
  margin-bottom: 25px;
  box-shadow: 6px 2px 8px rgba(0, 0, 0, 0.74);

  p {
    display: flex;
    justify-content: center;
    color: black;
  }

  strong {
    font-size: medium;
  }

  .card {
    image-rendering: crisp-edges;
  }

  .left {
    position: absolute;
    left: 13px;
    top: 15px;
  }

  .rigth {
    position: absolute;
    right: 13px;
    top: 15px;
  }

  .types .p-types {
    position: absolute;
    left: 15px;
    top: 30%;
  }

  .heart {
    position: absolute;
    left: 10px;
    top: 5px;
    padding: 2px;
  }

  /*************************** */
  .flip-card {
    width: 200px;
    height: 300px;
    perspective: 2000px;
  }
  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
    border-radius: 28px;
    transition: all 550ms cubic-bezier(0.1, 0.22, 0.8, 1.13);
    transform-style: preserve-3d;
  }
  .flip-card-front,
  .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 28px;
    backface-visibility: hidden;
  }
  .flip-card-front {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .flip-card-back {
    font-size: 1.25rem;
    text-align: center;
    display: grid;
    place-items: center;
    transform: rotateY(180deg);
  }
  .flip-card:hover .flip-card-inner {
    transform: rotateY(-180deg);
  }
`;
