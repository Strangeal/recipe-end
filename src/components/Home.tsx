import { Box } from "@mui/system";
import { productList } from "../data/db";
import Headline from "./Headline";
import Slides from "./Slides";

const Home = () => {
  return (
    <Box>
      <Headline />
      <Slides products={productList} />
      Welcome to the Home page
    </Box>
  );
};

export default Home;
