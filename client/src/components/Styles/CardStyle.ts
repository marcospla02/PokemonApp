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
  margin-left: 10px;
  border-radius: 25px;
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

  .icon-button-red {
    color: red;
  }

  .icon-button {
    color: gray;
  }
`;
