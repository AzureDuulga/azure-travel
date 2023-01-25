import { Grid, Box } from "@mui/material";
import React from "react";

const App = () => {
  return (
    <Grid
      sx={{
        height: "544px",
        backgroundImage: "url(./image/mountain.png)",
      }}
    >
      <Box>
        <img src="./image/iPhone.png" />
      </Box>
      <Box></Box>
    </Grid>
  );
};

export default App;
