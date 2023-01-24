import { Typography } from "@mui/material";
import React from "react";
import Banner from "../../Components/Banner";
import Category from "../../Components/Category";
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
    </>
  );
};

export default Home;
