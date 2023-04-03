import { Box } from "@mui/system";
import { productList, recipeList } from "../data/db";
import Headline from "./Headline";
import HeadlineSlides from "./HeadlineSlides";
import Slides from "./Slides";

const Home = () => {
  return (
    <Box>
      <HeadlineSlides recipes={recipeList} />
      <Box sx={{ m: 1 }}>
        Today's Recipe
        <Slides products={productList} />
      </Box>
    </Box>
  );
};

export default Home;
