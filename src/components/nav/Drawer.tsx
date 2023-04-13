import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  List,
  ListItem,
} from "@mui/material";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { menuItems } from "../../data/db";

const drawerWidth = 59;
const Drawer = () => {
  const [value, setValue] = useState(0);

  return (
    <Box>
      <List
        sx={{
          bgcolor: "#fff",
          position: "fixed",
          width: "100%",
          bottom: 0,
          zIndex: 999,
          p: 0,
        }}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          sx={{ bgcolor: "transparent" }}
        >
          {menuItems.map(({ name, path, icon }, index) => (
            <ListItem key={index + name} className="draw-item" sx={{ p: 0 }}>
              <Link to={path} className="botton-nav-link">
                <BottomNavigationAction
                  sx={{ width: "100%", minWidth: "100%" }}
                  label="Recent"
                  icon={React.createElement(icon, { className: "react-icon" })}
                />
              </Link>
            </ListItem>
          ))}
        </BottomNavigation>
      </List>
    </Box>
  );
};

export default Drawer;
