import { Grid, Typography } from "@mui/material";
import React from "react";
import css from "./style.module.css";

const bannerData = [
  {
    image:
      "https://images.unsplash.com/photo-1578894381163-e72c17f2d45f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dHJhdmVsJTIwbWFwfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    title: "Plan your trip with travel expert",
    detail: "Our professional advisors can craft your perfect itinerary",
  },
];

const Banner = () => {
  return (
    <>
      {bannerData.map((bannerData) => (
        <Grid className={css.Banner}>
          <Typography className={css.Title} key={bannerData.title}>
            {bannerData.title}
          </Typography>
          <Typography key={bannerData.detail} className={css.Text}>
            {bannerData.detail}
          </Typography>
        </Grid>
      ))}
    </>
  );
};

export default Banner;
