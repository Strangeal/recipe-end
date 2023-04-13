import { Avatar, Box, IconButton, Tab, Tabs, Typography } from "@mui/material";
import { SlSettings } from "react-icons/sl";
import { BsPencil } from "react-icons/bs";
import React, { SyntheticEvent, useState } from "react";

const Profile = () => {
  const [value, setValue] = useState(0);
  const handleChnage = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
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

        {value === 0 && <h2>hello</h2>}

        {value === 1 && <h2>Yes</h2>}
      </>
    </>
  );
};

export default Profile;
