import {
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import React, { SyntheticEvent, useState } from "react";
import AvTimerIcon from "@mui/icons-material/AvTimer";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

const Details = () => {
  const [value, setValue] = useState(0);

  const handleChnage = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <>
      <Card>
        <IconButton
          sx={{
            position: "absolute",
            zIndex: 44,
            top: "12px",
            left: "17px",
            color: "#fff",
            bgcolor: "#ED6D06",
            borderRadius: 1,
            p: 0.5,
          }}
        >
          <ChevronLeftIcon sx={{ fontSize: "2rem" }} />
        </IconButton>
        <CardMedia
          component="img"
          height="198"
          image="https://res.cloudinary.com/dxsom7jmx/image/upload/v1680769431/Recipe-App/recipes/micheile-henderson-qw3AyjHNF_k-unsplash_sqv6yb.jpg"
        />
        <CardContent>
          <Typography variant="h4">Food name</Typography>
          <div className="details-action">
            <IconButton className="details-icon MuiActionIconsText">
              <AvTimerIcon />
              20 Min
            </IconButton>
            <IconButton className="details-icon MuiActionIconsText">
              <LocalFireDepartmentIcon />
              355 Cal
            </IconButton>
            <IconButton className="details-icon MuiActionIconsText">
              <PeopleAltIcon />5 People
            </IconButton>
          </div>

          <Typography sx={{ fontFamily: "sans-serif" }}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Consequatur vel maxime culpa, voluptate aliquam aspernatur ut totam
            quae rem? Cum odio maxime doloribus impedit sequi soluta voluptatem
            odit totam incidunt. Similique totam magnam rem deserunt natus est
            amet pariatur aliquid voluptatem soluta molestiae illo cupiditate
            perspiciatis ex laudantium suscipit non, explicabo temporibus
            excepturi repellat corrupti. Optio autem vitae dicta magni.
          </Typography>
        </CardContent>

        <Box>
          <Box sx={{ borderColor: "divider" }}>
            <Tabs value={value} onChange={handleChnage}>
              <Tab label="Recipe Ingrediants" />
              <Tab label="Video Instructions" />
            </Tabs>
          </Box>
          <hr />
          <>
            {value === 0 && (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box>
                  <Typography>Ingredient</Typography>
                </Box>
                <Box>
                  <Typography>Quantity</Typography>
                </Box>
              </Box>
            )}
            {value === 1 && <Typography>Item two</Typography>}
          </>
        </Box>
      </Card>
    </>
  );
};

export default Details;
