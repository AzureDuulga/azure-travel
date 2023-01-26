import { Grid, Typography } from "@mui/material";
import React from "react";
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
    <Grid sx={{ display: "flex", justifyContent: "space-between" }}>
      {categoryList.map((categoryList) => {
        return (
          <Grid>
            <img src={categoryList.svg} />
            <Typography sx={{ color: "#ffffff66" }} variant="body2">
              {categoryList.name}
            </Typography>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Category;
