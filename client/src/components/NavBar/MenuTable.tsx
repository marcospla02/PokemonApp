import { Menu, MenuItem } from "@mui/material";
import { Props } from "./NavBarMobile";

const MenuTable = ({
  isMenuOpen,
  menuId,
  handleMenuClose,
  anchorEl,
}: Props) => {
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
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <a href="/about">About</a>
      </MenuItem>
    </Menu>
  );
};

export default MenuTable;
