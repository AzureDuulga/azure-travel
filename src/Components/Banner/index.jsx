import { Grid, Typography } from "@mui/material";
import React from "react";

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
        <Grid
          sx={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1578894381163-e72c17f2d45f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dHJhdmVsJTIwbWFwfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            width: "1127px",
            height: "395px",
            backgroundColor: "black",
            borderRadius: "24px",
            paddingTop: "80px",
            paddingLeft: "80px",
          }}
        >
          <Typography sx={{ color: "white", fontSize: "56px" }}>
            {bannerData.title}
          </Typography>
          <Typography sx={{ color: "white", fontSize: "32px" }}>
            {bannerData.detail}
          </Typography>
        </Grid>
      ))}
    </>
  );
};

export default Banner;
