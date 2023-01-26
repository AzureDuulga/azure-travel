import {
  Grid,
  Box,
  Typography,
  Button,
  TextField,
  MenuItem,
  Container,
} from "@mui/material";
import React from "react";

const Application = () => {
  return (
    <Grid
      sx={{
        height: "544px",
        width: "100%",
        backgroundImage: "url(./image/mountain.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        paddingTop: "87px",
        // paddingLeft: "134px",
        // paddingRight: "126px",
      }}
    >
      <Container maxWidth={"false"} sx={{ display: "flex" }}>
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
          <Box
            sx={{
              display: "flex",
              gap: "50px",
              justifyContent: "space-evenly",
            }}
          >
            <Box>
              <Button
                disableFocusRipple
                disableElevation
                sx={{
                  color: "white",
                  fontSize: "20px",
                  padding: "5px 16px",

                  borderRadius: "25px",
                  textTransform: "capitalize",
                  marginRight: "20px",
                  "&:hover": { backgroundColor: "#ffffff66" },
                }}
              >
                Mobile
              </Button>
              <Button
                sx={{
                  textTransform: "capitalize",
                  color: "white",
                  fontSize: "20px",
                  padding: "5px 16px",
                  "&:hover": { backgroundColor: "#ffffff66" },
                  borderRadius: "25px",
                }}
              >
                Email
              </Button>
              <Typography
                sx={{
                  color: "white",
                  fontSize: "16px",
                  marginTop: "5px",
                  marginBottom: "15px",
                }}
              >
                Enter your phone number to receive a text with a link to
                download the app.
              </Typography>
              <Box
                sx={{
                  color: "white",
                  fontSize: "16px",
                  padding: "8px 16px",
                  backgroundColor: "#ffffff66",
                  borderRadius: "16px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
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
                    padding: "6px 42px",
                    backgroundColor: "#ffffff",
                    borderRadius: "32px",
                    textAlign: "end",
                    textTransform: "capitalize",
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
      </Container>
    </Grid>
  );
};

export default Application;
