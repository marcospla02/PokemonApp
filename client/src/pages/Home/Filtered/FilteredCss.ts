import styled from "styled-components";

export const ContainerFiltered = styled.div`
  width: 20%;
  height: 100vh;
  background-color: var(--aliceblue);
  margin-left: 18px;
  margin-right: 50px;
  box-shadow: 0 7px 16px 0 rgba(0, 0, 0, 0.2);
  position: absolute;
  border-top-right-radius: 200px;
  border-bottom-left-radius: 200px;
  border-top-left-radius: 8px;
  border-bottom-right-radius: 8px;
  z-index: 1;

  select {
    font-weight: 900;
    padding: 7px;
    border-radius: 10px;
    background: #fff;
    color: #000;
    border: none;
    cursor: pointer;
  }

  #letter {
    color: #000;
    font-weight: 800;
  }
`;

export const Filter = styled.div`
  height: 50%;
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 20%;
  flex-direction: column;
`;

export const ButtonFilter = styled.button`
  background-color: var(--light-gray);
  color: black;
  padding: 18px;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  border: none !important;
  transition: all 1s ease;
  box-shadow: 0 7px 16px 0 rgba(0, 0, 0, 0.2);

  :hover {
    transition: all 1s;
    background-color: #212121;
    color: #fff;
  }
`;

export const Attack = styled.div`
  margin-top: 40px;
  margin-bottom: 10px;
  #title {
    font-weight: 900;
  }
`;
export const Defense = styled.div`
  margin-bottom: 10px;

  #title {
    font-weight: 900;
  }
`;
export const Types = styled.div`
  #title {
    font-weight: 900;
  }
`;
