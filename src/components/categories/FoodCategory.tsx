import {
  Avatar,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CheckIcon from "@mui/icons-material/Check";
import React from "react";
import { Box } from "@mui/system";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";

type BreakFastProps = {
  items: {
    name: string;
    img: string;
    cal: number;
  };
};

const FoodCategory = ({ items }: BreakFastProps) => {
  return (
    <>
      <Card elevation={0}>
        <CardHeader
          sx={{ position: "fixed", right: 0 }}
          action={
            <IconButton className="add-btn" sx={{ bgcolor: "#00ffff" }}>
              <AddIcon
                sx={{
                  border: "1px solid #000",
                  borderRadius: "50%",
                  fontSize: 12,
                }}
              />
            </IconButton>
          }
        />
        <CardMedia
          sx={{ borderRadius: 3 }}
          component="img"
          height="198"
          image="https://insanelygoodrecipes.com/wp-content/uploads/2021/02/Bagel-Breakfast-Sandwich-with-Egg-Bacon-and-Cheese-800x530.png"
        />

        <CardContent sx={{ p: 0 }}>
          <Typography>{items.name}</Typography>
          <Box
            sx={{
              position: "fixed",
              right: 0,
              top: 175,
              bgcolor: "#f0f8ff",
              borderTopLeftRadius: 8,
            }}
          >
            <Typography sx={{ display: "flex" }}>
              <LocalFireDepartmentIcon />
              {items.cal} Cal
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </>
  );
};

export default FoodCategory;
