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
import { Button } from "@mui/material";
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
      <Box sx={{ m: 1 }}>
        Today's Recipe
        <Slides products={productList} />
      </Box>
      <>
        {renderComponent.map((comp, index) => (
          <Box sx={{ m: 1 }} key={index}>
            <div className="category-header">
              <h5>{comp.header}</h5>
              <Link to={comp.path}>See All</Link>
            </div>
            <GenSlides data={comp.list} />
          </Box>
        ))}
      </>
      <Button
        sx={{
          // mx: 20,
          width: "100%",
          color: "#fff",
          bgcolor: "#ED6D06",
          textAlign: "center",
        }}
      >
        Make A Collection
      </Button>
    </>
  );
};

export default Home;
