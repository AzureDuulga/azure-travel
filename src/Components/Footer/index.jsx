import { Typography, Grid, Box } from "@mui/material";
import React from "react";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <Grid
      sx={{
        backgroundColor: "#141414",
        height: "288px",
        paddingTop: "42px",
        display: "flex",
      }}
    >
      <Box
        sx={{
          fontSize: "32px",
          fontWeigth: 700,
          color: "white",
          width: "20%",
          textAlign: "center",
        }}
      >
        Trxvl.
      </Box>
      <Grid
        sx={{
          display: "flex",
          color: "#808080",
          justifyContent: "space-evenly",

          width: "80%",
        }}
      >
        <Box sx={{ gap: "15px", display: "flex", flexDirection: "column" }}>
          <Typography>Seslendirme ve Alt Jazz</Typography>
          <Typography>Media Market</Typography>
          <Typography>Gillie</Typography>
          <Typography>Size Last</Typography>
          <Typography
            sx={{
              border: "1px solid white",
              textAlign: "center",
              padding: "10px 15px",
            }}
          >
            Helmet KOD
          </Typography>
          <Typography sx={{}}>© 1997-2021 Netflix, Inc.</Typography>
        </Box>
        <Box sx={{ gap: "15px", display: "flex", flexDirection: "column" }}>
          <Typography>Self Betimes</Typography>
          <Typography>Yatırımcı İlişkileri</Typography>
          <Typography>Basal Himmler</Typography>
        </Box>
        <Box sx={{ gap: "15px", display: "flex", flexDirection: "column" }}>
          <Typography>Yard Market</Typography>
          <Typography>Is İmkanları</Typography>
          <Typography>Car Tercihleri</Typography>
        </Box>
        <Box sx={{ gap: "15px", display: "flex", flexDirection: "column" }}>
          <Typography>Hedge Karla</Typography>
          <Typography>Mullein Koşulları</Typography>
          <Typography>Autumnal Bulgier</Typography>
          <Box sx={{}}>
            <SocialIcon
              network="facebook"
              bgColor="#141414"
              fgColor="#808080"
            />
            <SocialIcon
              network="instagram"
              bgColor="#141414"
              fgColor="#808080"
            />
            <SocialIcon network="twitter" bgColor="#141414" fgColor="#808080" />
            <SocialIcon network="youtube" bgColor="#141414" fgColor="#808080" />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Footer;
