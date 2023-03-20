import { Typography, Box } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Application from "../../Components/App";
import Banner from "../../Components/Banner";
import Category from "../../Components/Category";
import Community from "../../Components/Community";
import Footer from "../../Components/Footer";
import OffersItem from "../../Components/Offers/OffersItem";
import InputWithIcon from "../../Components/Search";
import VacDestinition from "../../Components/VacationDestinations";
import css from "./style.module.css";

const Home = () => {
  return (
    <Box sx={{ color: "white", fontWeight: 700 }}>
      <Box className={css.ImgBackground}>
        <Box className={css.GradientBackground}></Box>
        <Container maxWidth="xl">
          <Typography sx={{ fontSize: 72, width: "50%" }}>
            The whole world awaits.
          </Typography>
          <InputWithIcon />
          <Typography
            sx={{ fontSize: 32, marginTop: "40px", marginBottom: "32px" }}
          >
            Top categories
          </Typography>
          <Category />
          <Typography
            sx={{ fontSize: 32, marginTop: "80px", marginBottom: "32px" }}
          >
            Top Vacation Destinations
          </Typography>
          <VacDestinition />
        </Container>
      </Box>
      <Container>
        <Typography
          sx={{ color: "black", marginTop: "160px", fontSize: "32px" }}
        >
          Offers
        </Typography>
      </Container>
      <OffersItem />
      <Container>
        <Typography
          sx={{ color: "black", marginTop: "80px", fontSize: "32px" }}
        >
          Browse by property type
        </Typography>
      </Container>
      <Container>
        <Banner />
        <Typography
          sx={{ color: "black", marginTop: "80px", fontSize: "32px" }}
        >
          Connect with other travelers in our community
        </Typography>
      </Container>
      <Community />
      <Application />
      <Footer />
    </Box>
  );
};

export default Home;
