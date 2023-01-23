import React from "react";
import { SwiperSlide } from "swiper/react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const countries = [
  {
    country: "Indonesia",
    city: "Bali",
    img: "./image/bali.png",
  },
  {
    country: "Ireland",
    city: "Kerry",
    img: "./image/kerry.png",
  },
  {
    country: "Australia",
    city: "Sydney",
    img: "./image/sydney.png",
  },
  {
    country: "France",
    city: "Paris",
    img: "./image/paris.png",
  },
  {
    country: "Japan",
    city: "tokyo",
    img: "./image/tokyo.jpg",
  },
];
const CountryList = () => {
  return (
    <div>
      {countries.map((countries) => {
        return (
          <SwiperSlide>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={countries.img}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </SwiperSlide>
        );
      })}
    </div>
  );
};

export default CountryList;
