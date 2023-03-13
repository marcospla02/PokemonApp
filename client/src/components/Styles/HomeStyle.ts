import styled from "styled-components";

export const ContainerImg = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  justify-items: center;
  justify-self: center;
  height: 100%;
  padding: 0 10px;
`;

export const ContainerHome = styled.div`
  /* background: linear-gradient(#ffed00, #ff5b00, #ffed00); */
  .container-all {
    margin-top: 6rem;
  }
`;

export const ButtonHome = styled.div`
  position: absolute;
  background-color: var(--aliceblue);
  right: 50%;
  padding: 20px;
  transition: all 1s ease-in-out;
  border-radius: 10px;
  font-weight: 800;
  :hover {
    transition: all 1s ease-in-out;
    background-color: #212121;
    color: #fff;
    cursor: pointer;
  }
`;
