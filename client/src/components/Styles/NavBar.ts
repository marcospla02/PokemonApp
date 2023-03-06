import styled from "styled-components";

export const Link = styled.a`
  color: black;
  position: absolute;
  top: 20px;
  padding-left: 2%;
`;

export const Fav = styled.p`
  color: black;
  position: absolute;
  right: 5%;
  font-weight: 800;
  top: -35%;
`;

export const ImgPicture = styled.img`
  border: 1px;
  border-radius: 30px;
  cursor: pointer;
  :hover {
    margin-top: -5px;
  }
`;
