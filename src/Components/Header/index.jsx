import { Button, Grid, Box, Modal } from "@mui/material";
import React from "react";
import Login from "../../pages/Auth";
import AlertDialogSlide from "../../pages/Auth/SignIn/signin";

const headerData = ["Home", "Stays", "Flights", "Packages"];

const Header = ({ handleClose, setUser, open }) => {
  return (
    <Grid
      sx={{
        display: "flex",
        justifyContent: "space-between",
        color: "white",
        position: "absolute",
        width: "100%",
      }}
    >
      <Box sx={{ fontSize: 32, fontWeight: 700, marginTop: "15px" }}>
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
        {/* <Button
          sx={{
            marginTop: "24px",
            "&:hover": { textDecoration: "underline" },
            color: "#ffffff66",
          }}
        >
          Sign up
        </Button> */}

        <Modal open={open} onClose={handleClose}>
          <Login handleClose={handleClose} setUser={setUser} />
        </Modal>
      </Box>
    </Grid>
  );
};

export default Header;
