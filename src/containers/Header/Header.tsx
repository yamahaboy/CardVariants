import { HeaderStyled } from "./styles";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { ROUTES } from "../../Router/Pages/Routes/Routes";

import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Box, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export const Header = () => {
  const navigateToHomePage = useNavigate();
  const location = useLocation();

  const handleBackHomePage = () => {
    navigateToHomePage(-1);
  };

  return (
    <HeaderStyled>
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
            <StarBorderIcon sx={{ fontSize: "30px", color: "#9D0DBD" }} />
          </IconButton>
        </Box>
      </NavLink>
    </HeaderStyled>
  );
};
