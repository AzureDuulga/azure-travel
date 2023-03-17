import * as React from "react";
import { Box, Card, Grid, Typography } from "@mui/material";
import css from "./style.module.css";

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
        marginBottom: "140px",
        marginTop: "16px",
        marginLeft: "60px",
        padding: "20px",
      }}
    >
      {Destinations.map((item) => (
        <Box>
          <Card className={css.Card}>
            <Box className={css.Box}>
              <img
                src={item.img}
                style={{ maxHeight: "100%", maxWidth: "100%", borderRadius: 8 }}
                alt={item.title}
              />
            </Box>
            <Typography key={item.title} className={css.TextTitle}>
              {item.title}
            </Typography>
            <Typography className={css.Text}>Travel community</Typography>
            <Typography className={css.Text}>155,073 travelers</Typography>
          </Card>
        </Box>
      ))}
    </Grid>
  );
};

export default Community;
