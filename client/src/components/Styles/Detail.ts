import styled from "styled-components";

export const ContainerDetail = styled.div`
  background-color: var(--aliceblue);
  box-shadow: 6px 2px 8px rgba(0, 0, 0, 0.74);
  width: 900px;
  height: 75vh;
  position: absolute;
  left: 18%;
  top: 18%;
  border-radius: 25px;

  .info {
    position: absolute;
    top: 20px;
    right: 20%;
  }

  .info-all {
    position: absolute;
    top: 80px;
  }

  .a-detail {
    position: absolute;
    left: 25px;
    top: 25px;
  }
`;

export const Img = styled.div`
  position: absolute;
  top: 15%;
  left: 0;
`;
