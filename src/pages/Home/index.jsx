import { Typography } from "@mui/material";
import React from "react";
import Category from "../../Components/Category";
import DrawerAppBar from "../../Components/Header";
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
      <VacDestinition />
    </>
  );
};

export default Home;
