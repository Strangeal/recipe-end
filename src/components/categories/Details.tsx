import {
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import React, { SyntheticEvent, useEffect, useState } from "react";
import AvTimerIcon from "@mui/icons-material/AvTimer";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { breakFastList, lunchList, dinnerList } from "../../data/db";
import TableList from "../TableList";

type singleDataProp = {
  id: number;
  name: string;
  img: string;
  cal: number;
  cooking_time: string;
  description: string;
  ingredients: {
    Ing: string;
    quantity: string;
  }[];
};

const Details = () => {
  // const [value, setValue] = useState(0);
  const [data, setData] = useState<singleDataProp>();
  const navigate = useNavigate();
  const { id } = useParams();

  // const handleChnage = (event: SyntheticEvent, newValue: number) => {
  //   setValue(newValue);
  // };

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
                  {data.cooking_time}
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
                {data.description}
              </Typography>
            </CardContent>

            <Box>
              <TableList ingredient={data.ingredients} />
            </Box>
          </>
        )}
      </Card>
    </>
  );
};

export default Details;
