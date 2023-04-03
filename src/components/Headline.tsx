import {
  Avatar,
  Card,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AvTimerIcon from "@mui/icons-material/AvTimer";
import { Box } from "@mui/system";

type recipeProps = {
  recipe: {
    recipe_name: string;
    cooking_time: string;
    recipe_image: string;
    likes: number;
    rating: number;
    chef_image: string;
    chef_name: string;
    posted_time: string;
  };
};

const Headline = ({ recipe }: recipeProps) => {
  return (
    <div>
      <Card sx={{ borderRadius: 0 }}>
        <Box
          sx={{ position: "fixed", px: 2, color: "#fff", zIndex: 1 }}
          className="headline-header"
        >
          <Typography variant="h6" className="MuiSerif">
            Featured Recipe
          </Typography>
          <Typography variant="h4" className="MuiSerif">
            {recipe.recipe_name}
          </Typography>

          <div className="headline-actions">
            <Box
              sx={{ display: "flex", width: "100%", gap: 3 }}
              className="headline-actions"
            >
              <Typography
                component="span"
                className="CardHeader-title MuiActionIconsText"
              >
                <AvTimerIcon className="MuiActionIcons" /> {recipe.cooking_time}
              </Typography>
              <Typography
                component="span"
                className="CardHeader-subheader MuiActionIconsText"
              >
                <FavoriteIcon className="MuiActionIcons" />
                {recipe.likes}
              </Typography>
            </Box>

            <IconButton
              sx={{ p: 0, color: "#fff" }}
              className="MuiActionIconsText"
            >
              <StarIcon sx={{ fontSize: 20 }} />
              {recipe.rating}
            </IconButton>
          </div>
        </Box>

        <div className="headline-img image-inset-shadow">
          <CardMedia
            sx={{ height: "350px" }}
            component="img"
            image={recipe.recipe_image}
          />
          <div className="shadow-headline"></div>
        </div>

        <div className="headline-avatar">
          <CardHeader
            sx={{
              position: "absolute",
              top: "280px",
              zIndex: 2,
            }}
            avatar={
              <Avatar sx={{ width: 34, height: 34 }} src={recipe.chef_image} />
            }
            title={recipe.chef_name}
            subheader={recipe.posted_time}
          />
        </div>
      </Card>
    </div>
  );
};

export default Headline;
