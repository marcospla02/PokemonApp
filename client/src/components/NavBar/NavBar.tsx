import { useAuth0, User } from "@auth0/auth0-react";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MoreIcon from "@mui/icons-material/MoreVert";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import { ThemeProvider } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import * as React from "react";
import { ImgPicture, Link } from "../Styles/NavBar";
import { theme } from "../Styles/Styles";
import MenuTable from "./MenuTable";
import NavBarMobile from "./NavBarMobile";
import SearchBar from "./Search/SearchBar";

export default function PrimarySearchAppBar() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);

  const { user, isAuthenticated } = useAuth0<User>();

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const menuId = "primary-search-account-menu";

  const mobileMenuId = "primary-search-account-menu-mobile";

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="fixed" sx={{ bgcolor: "background.paper" }}>
        <Toolbar>
          <Link href="/">PokemonApp</Link>
          <SearchBar />
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {isAuthenticated ? (
              <ImgPicture
                src={user?.picture}
                alt={user?.name}
                height="40px"
                width="40px"
                onClick={handleProfileMenuOpen}
              />
            ) : (
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            )}
          </Box>
          {/* <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box> */}
        </Toolbar>
      </AppBar>

      {
        <MenuTable
          isMenuOpen={isMenuOpen}
          isMobileMenuOpen={isMobileMenuOpen}
          menuId={menuId}
          mobileMenuId={mobileMenuId}
          handleMenuClose={handleMenuClose}
          anchorEl={anchorEl}
          setAnchorEl={setAnchorEl}
          mobileMoreAnchorEl={mobileMoreAnchorEl}
          setMobileMoreAnchorEl={setMobileMoreAnchorEl}
        />
      }
      {
        <NavBarMobile
          isMenuOpen={isMenuOpen}
          isMobileMenuOpen={isMobileMenuOpen}
          menuId={menuId}
          mobileMenuId={mobileMenuId}
          handleMenuClose={handleMenuClose}
          anchorEl={anchorEl}
          setAnchorEl={setAnchorEl}
          mobileMoreAnchorEl={mobileMoreAnchorEl}
          setMobileMoreAnchorEl={setMobileMoreAnchorEl}
        />
      }
    </ThemeProvider>
  );
}
