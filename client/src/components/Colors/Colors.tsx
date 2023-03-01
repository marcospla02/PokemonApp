import { createTheme } from "@mui/material/styles";
import styled from "styled-components";

export const theme = createTheme({
  palette: {
    background: {
      // paper: "#29a0d3",
      paper: "#ffdd00f7",
    },

    text: {
      primary: "#ffed00",
      secondary: "#fff200",
    },
  },
});

export const Link = styled.a`
  color: black;
  position: absolute;
  top: 20px;
  padding-left: 2%;
`;
