import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { SlSettings } from "react-icons/sl";
import { BsPencil } from "react-icons/bs";
import React, { SyntheticEvent, useState } from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import PublicIcon from "@mui/icons-material/Public";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import InfoIcon from "@mui/icons-material/Info";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import FoodCategory from "./categories/FoodCategory";
import Populate from "./categories/Populate";

// type FoodProps = {
//   item: {
//     id: number;
//     name: string;
//     img: string;
//     cal: number;
//     category: string;
//     cooking_time: string;
//     status: boolean;
//   };
// };

const Profile = () => {
  const [value, setValue] = useState(0);
  const handleChnage = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ mx: 1.5 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          pb: 7,
        }}
      >
        <Typography>Profile</Typography>
        <IconButton>
          <SlSettings />
        </IconButton>
      </Box>

      <Avatar
        alt=""
        src="https://img.freepik.com/free-photo/pretty-woman-posing-outside_273609-20518.jpg?"
        sx={{
          display: "flex",
          justifyContent: "center",
          m: "auto",
          width: 80,
          height: 80,
        }}
      >
        55
      </Avatar>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "self-end",
        }}
      >
        <Typography> James king</Typography>
        <IconButton>
          <BsPencil />
        </IconButton>
      </Box>

      <Typography sx={{ textAlign: "center", fontSize: 12 }}>
        Chef - status
      </Typography>

      <>
        <Box sx={{ borderColor: "divider", width: "100%" }}>
          <Tabs value={value} onChange={handleChnage}>
            <Tab sx={{ width: "50%" }} label="My Recipes" />
            <Tab sx={{ width: "50%" }} label="About" />
          </Tabs>
        </Box>

        {value === 0 && (
          <>
            <h1>heelo</h1>
            {/* <Populate  /> */}
          </>
        )}

        {value === 1 && (
          <Box sx={{ my: 3 }}>
            <Typography variant="h6">Description</Typography>
            <Typography className="sub-about">
              This quinoa and black bean salad is a hearty and nutritious lunch
              option that's perfect for those who are looking for a plant-based
              meal.
            </Typography>
            <Divider />

            <Box className="sub-about">
              <Typography variant="h6">Social Media</Typography>
              <Typography className="social-text">
                <WhatsAppIcon className="social-icon" />
                WhatsApp
              </Typography>
              <Typography className="social-text">
                <FacebookIcon className="social-icon" />
                Facebook
              </Typography>
              <Typography className="social-text">
                <TwitterIcon className="social-icon" />
                Twitter
              </Typography>
              <Typography className="social-text">
                <InstagramIcon className="social-icon" />
                Instagram
              </Typography>
            </Box>
            <Divider />

            <Box className="sub-about">
              <Typography variant="h6">More Info</Typography>
              <Typography className="social-text">
                <PublicIcon className="social-icon" />
                www.exampledomain.com
              </Typography>
              <Typography className="social-text">
                <LocationOnIcon className="social-icon" />
                New York, United States
              </Typography>
              <Typography className="social-text">
                <InfoIcon className="social-icon" />
                Joined since Aug 24, 2020
              </Typography>
              <Typography className="social-text">
                <InsertChartIcon className="social-icon" />
                2,368,756 views
              </Typography>
            </Box>
          </Box>
        )}
      </>
    </Box>
  );
};

export default Profile;
