import styled from "styled-components";

export const SearchCss = styled.input`
  background-color: transparent;
  width: 20%;
  height: 30px;
  border: 0.5px solid transparent;
  border-radius: 5px;
  color: black;
  margin-left: 38%;
  ::placeholder {
    color: black;
  }
  :focus {
    outline: none;
    border: none;
  }
`;

export const Button = styled.button`
  height: 30px;
  border: 0.5px;
  border-radius: 0 50px 50px 0;
  width: 50px;
  padding: 2px 5px;
  cursor: pointer;
  transition: 1s;
  :hover {
    background-color: #d4d2d2b5;
    transition: 1s;
  }
`;
