import { Badge, Box, List, ListItem } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { ListItemStyles, ListStyles } from "./styles";
import { setUserFilter } from "../../store/reducers/Actions";

const UserList: React.FC = () => {
  const { users, posts } = useAppSelector((state) => state.cardReducer);
  const dispatch = useAppDispatch();

  const handleUserClick = (userId: number) => {
    dispatch(setUserFilter(userId));
  };

  const getUserPostCount = (userId: number) => {
    return posts.filter((post) => post.userId === userId).length;
  };
  return (
    <List sx={ListStyles}>
      {users.map((user) => (
        <ListItem
          key={user.id}
          value={user.id}
          sx={ListItemStyles}
          onClick={() => handleUserClick(user.id)}
        >
          <Box sx={{display:"flex", flexDirection:"row", alignItems:"center", gap: "25px"}}>
          <Box>{user.name}</Box>
          <Badge badgeContent={getUserPostCount(user.id)} color="primary"/>
          </Box>
        </ListItem>
      ))}
    </List>
  );
};

export default UserList;
