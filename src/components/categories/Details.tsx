import {
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import React, { SyntheticEvent, useEffect, useState } from "react";
import AvTimerIcon from "@mui/icons-material/AvTimer";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { breakFastList, lunchList, dinnerList } from "../../data/db";

type singleDataProp = {
  id: number;
  name: string;
  img: string;
  cal: number;
};
const Details = () => {
  const [value, setValue] = useState(0);
  const [data, setData] = useState<singleDataProp>();
  const navigate = useNavigate();
  const { id } = useParams();

  const handleChnage = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const location = useLocation();
  const getFoodDetails = () => {
    if (location.pathname.startsWith("/breakfast")) {
      const singleData = breakFastList.find((item) => String(item.id) === id);
      setData(singleData);
    } else if (location.pathname.startsWith("/lunch")) {
      const singleData = lunchList.find((item) => String(item.id) === id);
      setData(singleData);
    } else {
      const singleData = dinnerList.find((item) => String(item.id) === id);
      setData(singleData);
    }
  };

  useEffect(() => {
    if (!data) {
      getFoodDetails();
    }
  }, [data]);

  return (
    <>
      <Card>
        <IconButton
          onClick={() => navigate(-1)}
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
        {data && (
          <>
            <CardMedia component="img" height="350" image={data.img} />
            <CardContent>
              <Typography variant="h4">{data.name}</Typography>
              <div className="details-action">
                <IconButton className="details-icon MuiActionIconsText">
                  <AvTimerIcon />
                  20 Min
                </IconButton>
                <IconButton className="details-icon MuiActionIconsText">
                  <LocalFireDepartmentIcon />
                  {data.cal} Cal
                </IconButton>
                <IconButton className="details-icon MuiActionIconsText">
                  <PeopleAltIcon />5 People
                </IconButton>
              </div>

              <Typography sx={{ fontFamily: "sans-serif" }}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur vel maxime culpa, voluptate aliquam aspernatur ut
                totam quae rem? Cum odio maxime doloribus impedit sequi soluta
                voluptatem odit totam incidunt. Similique totam magnam rem
                deserunt natus est amet pariatur aliquid voluptatem soluta
                molestiae illo cupiditate perspiciatis ex laudantium suscipit
                non, explicabo temporibus excepturi repellat corrupti. Optio
                autem vitae dicta magni.
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
          </>
        )}
      </Card>
    </>
  );
};

export default Details;
