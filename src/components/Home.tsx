import { Box } from "@mui/system";
import {
  productList,
  recipeList,
  breakFastList,
  dinnerList,
  lunchList,
} from "../data/db";
import GenSlides from "./GenSlides";
import HeadlineSlides from "./HeadlineSlides";
import Slides from "./Slides";
import { Link } from "react-router-dom";
import { Button, Typography } from "@mui/material";
import { useEffect } from "react";

const Home = () => {
  const renderComponent = [
    {
      list: breakFastList,
      path: "/breakfast",
      header: "Breakfast",
    },
    {
      list: dinnerList,
      path: "/dinner",
      header: "Dinner",
    },
    {
      list: lunchList,
      path: "/lunch",
      header: "Lunch",
    },
  ];

  return (
    <>
      <HeadlineSlides recipes={recipeList} />

      <Box sx={{ mx: "0.8rem", mt: 1.4 }}>
        <Typography variant="h6" sx={{ fontSize: 18 }}>
          Today's Recipe
        </Typography>
        <Slides products={productList} />
        <>
          {renderComponent.map((comp, index) => (
            <Box key={index}>
              <div className="category-header">
                <Typography variant="h6" sx={{ fontSize: 18 }}>
                  {comp.header}
                </Typography>
                <Link className="all-category" to={comp.path}>
                  See All
                </Link>
              </div>
              <GenSlides data={comp.list} />
            </Box>
          ))}
        </>
        <Button
          sx={{
            mt: 2,
            width: "100%",
            color: "#fff",
            bgcolor: "#ED6D06",
            textAlign: "center",
          }}
        >
          Make A Collection
        </Button>
      </Box>
    </>
  );
};

export default Home;
