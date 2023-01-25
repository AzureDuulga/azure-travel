import { Typography } from "@mui/material";
import React from "react";
import App from "../../Components/App";
import Banner from "../../Components/Banner";
import Category from "../../Components/Category";
import Community from "../../Components/Community";
import Footer from "../../Components/Footer";
import DrawerAppBar from "../../Components/Header";
import OffersItem from "../../Components/Offers/OffersItem";
import InputWithIcon from "../../Components/Search";
import VacDestinition from "../../Components/VacationDestinations";

const Home = () => {
  return (
    <>
      <DrawerAppBar />
      <Typography>The whole world awaits.</Typography>
      <InputWithIcon />
      <Typography>Top categories</Typography>
      <Category />
      <Typography>Top Vacation Destinations</Typography>
      <VacDestinition />
      <Typography>Offers</Typography>
      <OffersItem />
      <Banner />
      <Typography>Connect with other travelers in our community</Typography>
      <Community />
      <App />
      <Footer />
    </>
  );
};

export default Home;
