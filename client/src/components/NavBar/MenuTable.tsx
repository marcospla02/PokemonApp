import { Pokemons } from "@/models";
import { LoginButton, LogoutButton } from "@/pages/Profile";
import { createUserAction, useAppDispatch, useAppSelector } from "@/redux";
import { getLocalStorage } from "@/utility";
import { useAuth0 } from "@auth0/auth0-react";
import { Menu, MenuItem } from "@mui/material";
import { useEffect } from "react";
import { Fav } from "../Styles/NavBar";
import { Props } from "./NavBarMobile";

const MenuTable = ({
  isMenuOpen,
  menuId,
  handleMenuClose,
  anchorEl,
}: Props) => {
  const favorite = useAppSelector((state) => state.favorites);
  const { isAuthenticated } = useAuth0();

  return (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>
        <a href="/">{isAuthenticated ? <LogoutButton /> : <LoginButton />}</a>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <a href="/favorites">Favorites</a>
        <Fav>{favorite.length}</Fav>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <a href="/about">About</a>
      </MenuItem>
    </Menu>
  );
};

export default MenuTable;
