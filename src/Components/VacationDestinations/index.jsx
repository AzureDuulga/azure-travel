import * as React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Box, Card, Grid, Typography } from "@mui/material";
import CountryList from "./CountryList";

const Destinations = [
  {
    title: "Bali, Indonesia",
    img: "https://images.unsplash.com/photo-1604999333679-b86d54738315?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2050&q=80",
  },
  {
    title: "Bali, Indonesia",
    img: "https://images.unsplash.com/photo-1555400038-63f5ba517a47?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  },
  {
    title: "Australia, Sydney",
    img: "https://images.unsplash.com/photo-1528072164453-f4e8ef0d475a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80",
  },
  {
    title: "Paris, France",
    img: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80",
  },
  {
    title: "Bali, Indonesia",
    img: "https://images.unsplash.com/photo-1604999333679-b86d54738315?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2050&q=80",
  },
  {
    title: "Bali, Indonesia",
    img: "https://images.unsplash.com/photo-1555400038-63f5ba517a47?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  },
  {
    title: "Bali, Indonesia",
    img: "https://images.unsplash.com/photo-1604999333679-b86d54738315?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2050&q=80",
  },
  {
    title: "Bali, Indonesia",
    img: "https://images.unsplash.com/photo-1604999333679-b86d54738315?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2050&q=80",
  },
];

const VacDestinition = () => {
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
        <Box sx={{ gap: "100px" }}>
          <Card sx={{ width: 310, height: 200, marginTop: 5 }}>
            <Box
              minHeight="120px"
              maxHeight="200px"
              sx={{ position: "relative" }}
            >
              <img
                src={item.img}
                style={{ maxHeight: "100%", maxWidth: "100%" }}
              />
              <Typography
                style={{
                  position: "absolute",
                  left: 24,
                  top: 146,
                  color: "white",
                  fontSize: 24,
                }}
              >
                {item.title}
              </Typography>
            </Box>
          </Card>
        </Box>
      ))}
    </Grid>
  );
};

export default VacDestinition;
