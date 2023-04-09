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
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Details from "./Details";

type BreakFastProps = {
  items: {
    id: number;
    name: string;
    img: string;
    cal: number;
    category: string;
    cooking_time: string;
  };
};

const FoodCategory = ({ items }: BreakFastProps) => {
  const [add, setAdd] = useState(true);
  const [food, setFood] = useState([]);

  // FIX ME
  useEffect(() => {});
  const handleClick = () => {
    if (add) {
      setAdd(false);
      const foodData = {
        name: items.name,
        cal: items.cal,
        time: items.cooking_time,
        image: items.img,
        id: items.id,
        status: add,
      };
      const savedFoods = JSON.stringify(foodData);
      localStorage.setItem("food", savedFoods);
      console.log("Added");
    } else {
      setAdd(true);
      console.log("deleted");
    }
  };

  // END ==>

  return (
    <>
      <Card elevation={0} sx={{ position: "relative" }}>
        <CardHeader
          sx={{ position: "absolute", right: 0 }}
          action={
            <IconButton
              onClick={handleClick}
              className="add-btn"
              sx={{ bgcolor: "#ADDDCF", p: 0.8 }}
            >
              {add ? (
                <AddIcon
                  sx={{
                    border: "1px solid #000",
                    borderRadius: "50%",
                    fontSize: 12,
                    p: 0.2,
                  }}
                />
              ) : (
                <CheckIcon
                  sx={{
                    border: "1px solid #000",
                    borderRadius: 0.5,
                    fontSize: 12,
                    p: 0.2,
                  }}
                />
              )}
            </IconButton>
          }
        />
        <CardMedia
          sx={{ borderRadius: 3, mb: 1 }}
          component="img"
          height="198"
          alt={items.name}
          image={items.img}
        />

        <CardContent sx={{ p: 0 }}>
          <Link className="category-name" to={`/${items.category}/${items.id}`}>
            {items.name}
          </Link>
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
