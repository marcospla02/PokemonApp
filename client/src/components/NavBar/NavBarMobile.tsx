import { AccountCircle } from "@mui/icons-material";
import { IconButton, Menu, MenuItem } from "@mui/material";
import React from "react";

export interface Props {
  isMenuOpen: boolean;
  isMobileMenuOpen: boolean;
  menuId: string;
  mobileMenuId: string;
  handleMenuClose: () => void;
  anchorEl: null | HTMLElement;
  setAnchorEl: any;
  mobileMoreAnchorEl: null | HTMLElement;
  setMobileMoreAnchorEl: any;
}

const NavBarMobile = ({
  isMenuOpen,
  isMobileMenuOpen,
  menuId,
  mobileMenuId,
  handleMenuClose,
  anchorEl,
  mobileMoreAnchorEl,
  setAnchorEl,
  setMobileMoreAnchorEl,
}: Props) => {
  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  return (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
      </MenuItem>
    </Menu>
  );
};

export default NavBarMobile;
