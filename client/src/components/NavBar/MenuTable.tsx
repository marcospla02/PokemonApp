import { useAppSelector } from "@/redux";
import { Menu, MenuItem } from "@mui/material";
import { Fav } from "../Styles/NavBar";
import { Props } from "./NavBarMobile";

const MenuTable = ({
  isMenuOpen,
  menuId,
  handleMenuClose,
  anchorEl,
}: Props) => {
  const favorite = useAppSelector((state) => state.favorites);
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
        <a href="/profile">Profile</a>
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
