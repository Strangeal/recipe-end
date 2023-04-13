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
  item: {
    id: number;
    name: string;
    img: string;
    cal: number;
    category: string;
    cooking_time: string;
    status: boolean;
  };
};

type FoodItem = {
  id: number;
  name: string;
  category: string;
  status: boolean;
};

const FoodCategory = ({ item }: BreakFastProps) => {
  const [foodList, setFoodList] = useState<FoodItem[]>([]);
  const [isFound, setIsFound] = useState(false);

  useEffect(() => {
    const savedFoods = localStorage.getItem(item.category);
    if (savedFoods) {
      setFoodList(JSON.parse(savedFoods));
    }
    const result = foodList.find((food) => food.id === item.id);
    setIsFound(Boolean(result));
  }, [item, foodList]);

  const handleClick = () => {
    const savedFoods = localStorage.getItem(item.category) || "[]";
    const foods = JSON.parse(savedFoods) as FoodItem[];
    const resultIndex = foods.findIndex((food) => food.id === item.id);
    if (resultIndex !== -1) {
      const newFoods = [...foods];
      newFoods.splice(resultIndex, 1);
      setFoodList(newFoods);
      localStorage.setItem(item.category, JSON.stringify(newFoods));
    } else {
      const newFood = { ...item, status: true };
      const newFoods = [...foods, newFood];
      setFoodList(newFoods);
      localStorage.setItem(item.category, JSON.stringify(newFoods));
    }
    setIsFound(!isFound);
  };

  return (
    <>
      <Card elevation={0} sx={{ position: "relative" }}>
        <CardHeader
          sx={{ position: "absolute", right: 0 }}
          action={
            isFound ? (
              // <>
              <IconButton
                onClick={handleClick}
                className="add-btn"
                sx={{ bgcolor: "#ADDDCF", p: 0.8 }}
              >
                <CheckIcon
                  sx={{
                    border: "1px solid #000",
                    borderRadius: 0.5,
                    fontSize: 12,
                    p: 0.2,
                  }}
                />
              </IconButton>
            ) : (
              <IconButton
                onClick={handleClick}
                className="add-btn"
                sx={{ bgcolor: "#ADDDCF", p: 0.8 }}
              >
                <AddIcon
                  sx={{
                    border: "1px solid #000",
                    borderRadius: "50%",
                    fontSize: 12,
                    p: 0.2,
                  }}
                />
              </IconButton>
            )
            // </>
          }
        />
        <CardMedia
          sx={{ borderRadius: 3, mb: 1 }}
          component="img"
          height="198"
          alt={item.name}
          image={item.img}
        />

        <CardContent sx={{ p: 0 }}>
          <Link className="category-name" to={`/${item.category}/${item.id}`}>
            {item.name}
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
              {item.cal} Cal
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </>
  );
};

export default FoodCategory;
