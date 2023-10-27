import { Drawer, List, ListItem, ListItemText } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../Router/Pages/Routes/Routes";
import { ItemStyles } from "./styles";

type DrawerProps = {
  isOpen: boolean;
  onClose: () => void;
};

const DrawerMenu: React.FC<DrawerProps> = (props) => {
  const { isOpen, onClose } = props;
  const pageNavigation = useNavigate();

  const HomeNavigationHandle = () => {
    pageNavigation(ROUTES.HOME);
  };

  const FeaturedNavigationHandle = () => {
    pageNavigation(ROUTES.Featured);
  };

  return (
    <Drawer open={isOpen} onClose={onClose}>
      <List sx={{ width: "250px" }}>
        <ListItem onClick={HomeNavigationHandle} sx={ItemStyles}>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem onClick={FeaturedNavigationHandle} sx={ItemStyles}>
          <ListItemText primary="Featured" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default DrawerMenu;
