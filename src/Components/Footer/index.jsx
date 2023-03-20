import { Typography, Grid, Box } from "@mui/material";
import React from "react";
import { SocialIcon } from "react-social-icons";
import css from "./style.module.css";

const Footer = () => {
  return (
    <Grid className={css.Background}>
      <Box className={css.BoxLogo}>Trxvl.</Box>
      <Grid className={css.Grid}>
        <Box className={css.BoxTexts}>
          <Typography>Seslendirme ve Alt Jazz</Typography>
          <Typography>Media Market</Typography>
          <Typography>Gillie</Typography>
          <Typography>Size Last</Typography>
          <Typography className={css.HelmetKod}>Helmet KOD</Typography>
          <Typography>© 1997-2021 Netflix, Inc.</Typography>
        </Box>
        <Box className={css.BoxTexts}>
          <Typography>Self Betimes</Typography>
          <Typography>Yatırımcı İlişkileri</Typography>
          <Typography>Basal Himmler</Typography>
        </Box>
        <Box className={css.BoxTexts}>
          <Typography>Yard Market</Typography>
          <Typography>Is İmkanları</Typography>
          <Typography>Car Tercihleri</Typography>
        </Box>
        <Box className={css.BoxTexts}>
          <Typography>Hedge Karla</Typography>
          <Typography>Mullein Koşulları</Typography>
          <Typography>Autumnal Bulgier</Typography>
          <Box>
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
