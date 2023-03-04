import styled from "styled-components";

export const CardFavorite = styled.div`
  display: flex;
  flex-direction: row;
  padding: 5px 100px;
  flex-wrap: wrap;
  position: absolute;
  left: 3%;
  top: 15%;
  justify-content: space-between;
`;

export const ContainerImgFav = styled.div`
  .h1 {
    display: flex;
    justify-items: center;
  }

  img {
    position: absolute;
    top: 100%;
    left: 50%;
    border: 1px;
    border-radius: 30px;
  }
`;
