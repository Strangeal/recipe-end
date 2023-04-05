import { Box } from "@mui/system";
import {
  productList,
  recipeList,
  breakFastList,
  dinnerList,
  launchList,
} from "../data/db";
import GenSlides from "./GenSlides";
import FoodCategory from "./categories/FoodCategory";
import Headline from "./Headline";
import HeadlineSlides from "./HeadlineSlides";
import Slides from "./Slides";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const Home = () => {
  return (
    <Box>
      <HeadlineSlides recipes={recipeList} />
      <Box sx={{ m: 1 }}>
        Today's Recipe
        <Slides products={productList} />
      </Box>
      <>
        <Box sx={{ m: 1 }}>
          <div className="category-header">
            <h5>Breakfast</h5>
            <Link to="">See All</Link>
          </div>
          <GenSlides data={breakFastList} />
        </Box>
        <Box sx={{ m: 1 }}>
          <div className="category-header">
            <h5>Dinner</h5>
            <Link to="">See All</Link>
          </div>
          <GenSlides data={dinnerList} />
        </Box>
        <Box sx={{ m: 1 }}>
          <div className="category-header">
            <h5>Launch</h5>
            <Link to="">See All</Link>
          </div>
          <GenSlides data={launchList} />
        </Box>
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
    </Box>
  );
};

export default Home;
