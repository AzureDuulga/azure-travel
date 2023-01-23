import { Grid, SvgIcon, Typography } from "@mui/material";
import { warning } from "@remix-run/router";
import React from "react";
import Tropical from "./Tropical";
const categoryList = [
  {
    name: "Beaches",
    svg: "./image/beach.svg",
  },
  {
    name: "Deserts",
    svg: "./image/desert.svg",
  },
  {
    name: "Mountains",
    svg: "./image/mountain.svg",
  },
  {
    name: "Iconic Cities",
    svg: "./image/cities.svg",
  },
  {
    name: "Houseboats",
    svg: "./image/houseBoats.svg",
  },
  {
    name: "Countryside",
    svg: "./image/countrySide.svg",
  },
  {
    name: "Camping",
    svg: "./image/camping.svg",
  },
  {
    name: "Castles",
    svg: "./image/castle.svg",
  },
  {
    name: "Skiing",
    svg: "./image/skii.svg",
  },
  {
    name: "Tropical",
    svg: "./image/tropical.svg",
  },
];

const Category = () => {
  return (
    <Grid
      sx={{ display: "flex", justifyContent: "space-between" }}
      bgcolor="red"
    >
      {categoryList.map((categoryList) => {
        return (
          <Grid>
            <img src={categoryList.svg} />
            <Typography variant="body2">{categoryList.name}</Typography>
          </Grid>
        );
      })}
      <Tropical color="red" />
    </Grid>
  );
};

export default Category;
