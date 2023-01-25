import { Typography, Grid, Box } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Grid
      sx={{
        backgroundColor: "#141414",
        height: "288px",
        display: "flex",
        color: "white",
        justifyContent: "space-evenly",
        paddingTop: "42px",
      }}
    >
      <Box>Trxvl.</Box>
      <Box>
        <Typography>Seslendirme ve Alt Jazz</Typography>
        <Typography>Media Market</Typography>
        <Typography>Gillie</Typography>
        <Typography>Size Last</Typography>
        <Typography>Helmet KOD</Typography>
      </Box>
      <Box>
        <Typography>Self Betimes</Typography>
        <Typography>Yatırımcı İlişkileri</Typography>
        <Typography>Basal Himmler</Typography>
      </Box>
      <Box>
        <Typography>Yard Market</Typography>
        <Typography>Is İmkanları</Typography>
        <Typography>Car Tercihleri</Typography>
      </Box>
      <Box>
        <Typography>Hedge Karla</Typography>
        <Typography>Mullein Koşulları</Typography>
        <Typography>Autumnal Bulgier</Typography>
      </Box>
    </Grid>
  );
};

export default Footer;
