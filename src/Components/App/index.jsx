import {
  Grid,
  Box,
  Typography,
  Button,
  TextField,
  MenuItem,
} from "@mui/material";
import React from "react";

const App = () => {
  return (
    <Grid
      sx={{
        height: "544px",
        width: "100%",
        backgroundImage: "url(./image/mountain.png)",
        display: "flex",
        paddingTop: "87px",
        paddingLeft: "134px",
        paddingRight: "126px",
      }}
    >
      <Box sx={{ alignSelf: "flex-end" }}>
        <img src="./image/iPhone.png" />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          marginBottom: "124px",
        }}
      >
        <Typography sx={{ color: "white", fontSize: "48px" }}>
          Your all-in-one travel app.
        </Typography>
        <Typography sx={{ color: "white", fontSize: "24px" }}>
          Book flights, hotels, trains & rental cars anywhere in the world in
          just seconds. Get real-time flight updates, travel info, exclusive
          deals, and 30% more Trip Coins only on the app!
        </Typography>
        <Box sx={{ display: "flex", gap: "50px" }}>
          <Box>
            <Button
              sx={{
                color: "white",
                fontSize: "20px",
                padding: "8px 16px",
                backgroundColor: "#ffffff66",
                borderRadius: "32px",
              }}
            >
              Mobile
            </Button>
            <Button
              sx={{
                color: "white",
                fontSize: "20px",
                padding: "8px 16px",
                backgroundColor: "#ffffff66",
                borderRadius: "32px",
              }}
            >
              Email
            </Button>
            <Typography sx={{ color: "white", fontSize: "16px" }}>
              Enter your phone number to receive a text with a link to download
              the app.
            </Typography>
            <Box
              sx={{
                color: "white",
                fontSize: "16px",
                padding: "8px 16px",
                backgroundColor: "#ffffff66",
                borderRadius: "16px",
              }}
            >
              <TextField
                variant="standard"
                type="number"
                id="phoneNumber"
                placeholder="Mobile Number"
                InputLabelProps={{
                  shrink: true,
                }}
                InputProps={{
                  disableUnderline: true,
                }}
              ></TextField>
              <Button
                sx={{
                  color: "#2659C3",
                  fontSize: "16px",
                  padding: "12px 32px",
                  backgroundColor: "#ffffff",
                  borderRadius: "32px",
                  textAlign: "end",
                }}
              >
                Search
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                width: "52px",
                border: "1px solid #FFFFFF",
                transform: "rotate(90deg)",
              }}
            ></Box>
            <Box sx={{ color: "white" }}>or</Box>
            <Box
              sx={{
                width: "52px",
                border: "1px solid #FFFFFF",
                transform: "rotate(90deg)",
              }}
            ></Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <img src="./image/playstore.png" />
            <img src="./image/appstore.png" />
          </Box>
        </Box>
      </Box>
    </Grid>
  );
};

export default App;
