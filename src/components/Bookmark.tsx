import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
} from "@mui/material";
import AvTimerIcon from "@mui/icons-material/AvTimer";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";

// data-testid

const Bookmark = () => {
  return (
    <>
      <Typography variant="h5">Your Bookmarks</Typography>

      <Card
        elevation={0}
        className="bookmark-card"
        sx={{ display: "flex", bgcolor: "#FBFBFA", p: 1 }}
      >
        <CardMedia
          sx={{ width: "33%", height: 80, borderRadius: 2 }}
          component="img"
          alt=""
          image="https://res.cloudinary.com/dxsom7jmx/image/upload/v1680769431/Recipe-App/recipes/micheile-henderson-qw3AyjHNF_k-unsplash_sqv6yb.jpg"
        />

        <CardContent
          className="bookmark-content"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Typography sx={{ fontSize: 17 }}>San Francisco - Oakland</Typography>
          <div className="bookmark-action">
            <IconButton className="bookmark-btn">
              <AvTimerIcon className="bookmark-text" />
              30 Min
            </IconButton>
            <IconButton className="bookmark-btn">
              <LocalFireDepartmentIcon className="bookmark-text" />
              350 Cal
            </IconButton>
            <IconButton className="bookmark-btn">
              <PeopleAltIcon className="bookmark-text" />5 People
            </IconButton>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default Bookmark;
