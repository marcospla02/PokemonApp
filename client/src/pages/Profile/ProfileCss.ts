import styled from "styled-components";

export const ContainerProfile = styled.div`
  background-color: var(--aliceblue);
  box-shadow: 6px 2px 8px rgba(0, 0, 0, 0.74);
  width: 65%;
  height: 75vh;
  position: absolute;
  left: 17%;
  top: 18%;
  border-radius: 25px;
  color: black;
`;

export const ButtonProfile = styled.button`
  background-color: transparent;
  color: black;
  font-size: medium;
  font-weight: 600;
  border: none;
  cursor: pointer;
  margin-left: -8%;
  :hover {
    opacity: 0.5;
  }
`;
