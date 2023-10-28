import { HeaderStyled } from "./styles";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { ROUTES } from "../../Router/Pages/Routes/Routes";

import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Box, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CardAutoComplete from "../CardAutoComplete/CardAutoComplete";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import DrawerMenu from "../Drawer/Drawer";

export const Header = () => {
  const navigateToHomePage = useNavigate();
  const location = useLocation();
  const [selectedTitle, setSelectedTitle] = useState<string | null>(null);
  const [isDrawerOpen, setisDrawerOpen] = useState(false);

  const handleBackHomePage = () => {
    navigateToHomePage(-1);
  };

  const handleDrawerIsOpen = () => {
    setisDrawerOpen(true);
  };

  const handleDrawerIsClose = () => {
    setisDrawerOpen(false);
  };
  return (
    <HeaderStyled>
      <IconButton onClick={handleDrawerIsOpen}>
        <MenuIcon sx={{ fontSize: "40px", color: "#000" }} />
      </IconButton>
      <DrawerMenu isOpen={isDrawerOpen} onClose={handleDrawerIsClose} />

      <CardAutoComplete
        selectedTitle={selectedTitle}
        setSelectedTitle={setSelectedTitle}
      />
      <NavLink to={ROUTES.Featured}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {location.pathname === ROUTES.Featured && (
            <IconButton>
              <ArrowBackIcon
                onClick={handleBackHomePage}
                sx={{ fontSize: "30px", color: "#9067C2" }}
              />
            </IconButton>
          )}
          <IconButton>
            <StarBorderIcon sx={{ fontSize: "30px", color: "#F2933A" }} />
          </IconButton>
        </Box>
      </NavLink>
    </HeaderStyled>
  );
};
