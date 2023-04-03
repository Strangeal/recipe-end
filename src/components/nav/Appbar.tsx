import { useTheme } from "@mui/material/styles";
import { AppBar, List, Toolbar, ListItem } from "@mui/material";
import Drawer from "./Drawer";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Link } from "react-router-dom";
import { menuItems } from "../../data/db";
const Appbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      {isMobile ? (
        <Drawer />
      ) : (
        <AppBar>
          <Toolbar>
            <List>
              {menuItems.map((item, index) => (
                <ListItem key={index}>
                  <Link to={item.path}>{item.name}</Link>
                </ListItem>
              ))}
            </List>
          </Toolbar>
        </AppBar>
      )}
    </>
  );
};

export default Appbar;
