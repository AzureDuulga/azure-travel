import { Box, Button, Card, Typography, Grid } from "@mui/material";
import React from "react";

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
    <Grid sx={{ display: "flex", maxWidth: "80%", margin: "auto" }}>
      {offerData.map((i) => (
        <Card
          sx={{
            width: 660,
            height: 240,
            borderRadius: "16px",
            display: "flex",
            marginRight: "24px",
            paddingLeft: "16px",
            paddingBottom: "24px",
            paddingTop: "24px",
            boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1)",
          }}
        >
          <Box
            sx={{
              width: 310,
              height: 210,
              marginRight: "24px",
            }}
          >
            <img
              src={i.img}
              style={{
                maxHeight: "100%",
                maxWidth: "100%",
                borderRadius: "16px",
              }}
            ></img>
          </Box>
          <Grid
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
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
            <Button
              sx={{
                backgroundColor: "#2659C3",
                color: "white",
                borderRadius: "32px",
                fontSize: "16px",
                width: "140px",
                height: "52px",
                textTransform: "capitalize",
              }}
            >
              Book Now
            </Button>
          </Grid>
        </Card>
      ))}
    </Grid>
  );
};

export default OffersItem;
