import { Box, Button, Card, Typography, Grid } from "@mui/material";
import React from "react";
import css from "./style.module.css";

const offerData = [
  {
    type: "Domestic Flights",
    title: "Huge savings on flight with trxvl.",
    detail: "Book domestic flights starting @ just ₹1459",
    img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZmxpZ2h0fGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    type: "International Hotels",
    title: "Enjoy upto 20% off on International Hotels",
    detail: "Make the most of  this deal on your first booking with trxvl.",
    img: "https://images.unsplash.com/photo-1586611292717-f828b167408c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGhvdGVsfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
  },
];

const OffersItem = () => {
  return (
    <Grid className={css.OfferContainer}>
      {offerData.map((i) => (
        <Card className={css.CardItem}>
          <Box className={css.ImgBox}>
            <img className={css.Img} src={i.img} alt={offerData.title}></img>
          </Box>
          <Grid className={css.TextGrid}>
            <Typography
              key={i.type}
              sx={{ fontSize: "16px", color: "#00000080" }}
            >
              {i.type}
            </Typography>
            <Typography sx={{ fontSize: "24px" }}>{i.title}</Typography>
            <Typography
              key={i.detail}
              sx={{ fontSize: "16px", color: "#00000080" }}
            >
              {i.detail}
            </Typography>
            <Button variant="contained" className={css.Btn}>
              Book Now
            </Button>
          </Grid>
        </Card>
      ))}
    </Grid>
  );
};

export default OffersItem;
