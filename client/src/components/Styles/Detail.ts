import styled from "styled-components";

export const ContainerDetail = styled.div`
  background-color: var(--aliceblue);
  box-shadow: 6px 2px 8px rgba(0, 0, 0, 0.74);
  width: 64%;
  height: 75vh;
  position: absolute;
  left: 18%;
  top: 18%;
  border-radius: 25px;
  color: black;

  .info {
    position: absolute;
    top: 4%;
    right: 20%;
  }

  .info-all {
    position: absolute;
    top: 60%;
  }

  .a-detail {
    position: absolute;
    left: 2%;
    top: 4.3%;
  }
`;

export const Img = styled.div`
  position: absolute;
  top: 15%;
  left: 2%;
`;
