import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: row;
  /* padding-left: 16rem; */
  padding-left: 12.3rem;
  /* padding-right: 7rem; */
  padding-right: 8rem;
  flex-wrap: wrap;
  /* position: relative; */
  justify-content: end;
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
