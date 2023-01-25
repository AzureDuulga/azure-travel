import * as React from "react";
import { Box, Card, Grid, Typography } from "@mui/material";

const Destinations = [
  {
    title: "India",
    img: "https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGFqJTIwbWFoYWx8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Travel Talk",
    img: "https://images.unsplash.com/photo-1626606092443-4d6b897c6aff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fG1vdW50YWluJTIwZmlyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Beach",
    img: "https://images.unsplash.com/photo-1516633630673-67bbad747022?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTl8fEJlYWNofGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Mountains",
    img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8TW91bnRhaW5zfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "India",
    img: "https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGFqJTIwbWFoYWx8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Travel Talk",
    img: "https://images.unsplash.com/photo-1626606092443-4d6b897c6aff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fG1vdW50YWluJTIwZmlyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Beach",
    img: "https://images.unsplash.com/photo-1516633630673-67bbad747022?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTl8fEJlYWNofGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Mountains",
    img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8TW91bnRhaW5zfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
  },
];

const Community = () => {
  return (
    <Grid
      sx={{
        overflowX: "scroll",
        "&::-webkit-scrollbar": {
          display: "none",
        },
        display: "flex",
        gap: "20px",
      }}
    >
      {Destinations.map((item) => (
        <Box>
          <Card
            sx={{
              width: "342px",
              height: "343px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              padding: "16px",
              boxShadow: "0px 4px 16px 0px #9E9E9E40",
            }}
          >
            <Box
              sx={{
                height: "200px",
                width: "310px",
              }}
            >
              <img
                src={item.img}
                style={{ maxHeight: "100%", maxWidth: "100%", borderRadius: 8 }}
              />
            </Box>
            <Typography
              style={{
                left: 24,
                top: 146,
                color: "black",
                fontSize: 24,
              }}
            >
              {item.title}
            </Typography>
            <Typography sx={{ color: "#00000080", fontSize: "16px" }}>
              Travel community
            </Typography>
            <Typography sx={{ color: "#00000080", fontSize: "16px" }}>
              155,073 travelers
            </Typography>
          </Card>
        </Box>
      ))}
    </Grid>
  );
};

export default Community;
