import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AvTimerIcon from "@mui/icons-material/AvTimer";
import { Box } from "@mui/system";

type itemProps = {
  item: {
    imgPath: string;
    label: string;
  };
};

const Product = ({ item }: itemProps) => {
  return (
    <div className="product-card">
      <Card elevation={0}>
        <div>
          <CardHeader
            sx={{ position: "fixed", right: 1, zIndex: 1 }}
            action={
              <IconButton
                sx={{
                  bgcolor: "#fff",
                  fontSize: 12,
                  borderRadius: 2,
                  px: 1,
                  py: 0,
                }}
                color="primary"
              >
                <StarIcon sx={{ fontSize: 20 }} color="primary" />
                5.0
              </IconButton>
            }
          />
          <Box className="card-actions">
            <Typography
              sx={{ ml: 1 }}
              component="span"
              className="CardHeader-subheader MuiActionIconsText"
            >
              <FavoriteBorderIcon className="MuiActionIcons" />
              5.2K
            </Typography>
            <Typography
              sx={{ mr: 1 }}
              component="span"
              className="CardHeader-title MuiActionIconsText"
            >
              <AvTimerIcon className="MuiActionIcons" /> 15mins
            </Typography>
          </Box>
        </div>
        <div className="image-inset-shadow">
          <CardMedia
            sx={{ borderRadius: 5 }}
            component="img"
            height="198"
            image={item.imgPath}
          />
          <div className="shadow"></div>
        </div>
        <CardContent sx={{ p: 0 }}>
          <Typography sx={{ fontSize: 10 }}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              my: 2,
            }}
          >
            <Avatar
              sx={{ width: 24, height: 24 }}
              alt="Profile picture"
              src="https://img.freepik.com/free-photo/young-male-posing-isolated-against-blank-studio-wall_273609-12356.jpg?"
            >
              44
            </Avatar>
            <Typography>name</Typography>
          </Box>
        </CardContent>
      </Card>
    </div>
  );
};

export default Product;
