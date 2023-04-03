import {
  Avatar,
  Card,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AvTimerIcon from "@mui/icons-material/AvTimer";
import { Box } from "@mui/system";

const Headline = () => {
  return (
    <div>
      <Card sx={{ mx: "1rem" }}>
        <Box
          sx={{ position: "fixed", px: 2, color: "#fff" }}
          className="headline-header"
        >
          <Typography variant="h6" className="MuiSerif">
            Featured Recipe
          </Typography>
          <Typography variant="h4" className="MuiSerif">
            Grilled Beef Ribs
          </Typography>

          <div className="headline-actions">
            <Box
              sx={{ display: "flex", width: "100%", gap: 3 }}
              className="headline-actions"
            >
              <Typography
                component="span"
                className="CardHeader-subheader MuiActionIconsText"
              >
                <FavoriteBorderIcon className="MuiActionIcons" />
                5.2K
              </Typography>
              <Typography
                component="span"
                className="CardHeader-title MuiActionIconsText"
              >
                <AvTimerIcon className="MuiActionIcons" /> 45mins
              </Typography>
            </Box>

            <IconButton
              sx={{ p: 0, color: "#fff" }}
              className="MuiActionIconsText"
            >
              <StarIcon sx={{ fontSize: 20 }} />
              5.0
            </IconButton>
          </div>
        </Box>

        <div className="headline-img">
          <CardMedia
            sx={{ minHeight: "350px" }}
            component="img"
            image="https://img.freepik.com/free-photo/fried-chicken-french-fries-black-cement-floor_1150-28542.jpg?"
          />
        </div>

        <div className="headline-avatar">
          <CardHeader
            sx={{ position: "absolute", top: "180px", zIndex: 2 }}
            avatar={<Avatar sx={{ width: 24, height: 24 }}>R</Avatar>}
            title="title"
            subheader="subheader"
          />
        </div>
      </Card>
    </div>
  );
};

export default Headline;
