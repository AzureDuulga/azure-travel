import { Button, Grid, Box } from "@mui/material";
import React from "react";

const headerData = ["Home", "Stays", "Flights", "Packages"];

const Header = () => {
  return (
    <Grid
      sx={{
        display: "flex",
        justifyContent: "space-between",
        color: "white",
      }}
    >
      <Box sx={{ fontSize: 32, fontWeight: 700, marginTop: "24px" }}>
        trxvl.
      </Box>
      <Box>
        {headerData.map((i) => {
          return (
            <Button
              sx={{
                "&:hover": { textDecoration: "underline" },
                color: "#ffffff66",
                marginTop: "24px",
              }}
            >
              {i}
            </Button>
          );
        })}
        <Button
          sx={{
            marginTop: "24px",
            "&:hover": { textDecoration: "underline" },
            color: "#ffffff66",
          }}
        >
          Sign up
        </Button>
      </Box>
    </Grid>
  );
};

export default Header;
