import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CheckIcon from "@mui/icons-material/Check";
import { Box } from "@mui/system";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import { useState } from "react";

type BreakFastProps = {
  items: {
    name: string;
    img: string;
    cal: number;
  };
};

const FoodCategory = ({ items }: BreakFastProps) => {
  const [add, setAdd] = useState(false);

  const handleClick = () => {
    setAdd(true);
  };

  return (
    <>
      <Card elevation={0} sx={{ position: "relative" }}>
        <CardHeader
          sx={{ position: "absolute", right: 0 }}
          action={
            <IconButton
              onClick={handleClick}
              className="add-btn"
              sx={{ bgcolor: "#00ffff" }}
            >
              {add ? (
                <AddIcon
                  sx={{
                    border: "1px solid #000",
                    borderRadius: "50%",
                    fontSize: 12,
                  }}
                />
              ) : (
                <CheckIcon
                  sx={{
                    border: "1px solid #000",
                    borderRadius: "50%",
                    fontSize: 12,
                  }}
                />
              )}
            </IconButton>
          }
        />
        <CardMedia
          sx={{ borderRadius: 3 }}
          component="img"
          height="198"
          image={items.img}
        />

        <CardContent sx={{ p: 0 }}>
          <Typography>{items.name}</Typography>
          <Box
            sx={{
              position: "absolute",
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
