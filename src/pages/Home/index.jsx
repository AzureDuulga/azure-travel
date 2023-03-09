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

const Home = () => {
  return (
    <Box sx={{ color: "white", fontWeight: 700 }}>
      <Box
        sx={{
          height: "840px",
          width: "100%",
          background:
            "linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 13.65%), linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(./image/motoMountain.png);",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          paddingTop: "95px",
        }}
      >
        <Box
          sx={{
            background:
              "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 89.58%)",
          }}
        ></Box>
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
