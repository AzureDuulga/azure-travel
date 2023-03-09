import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Modal } from "@mui/material";
import SinginButton from "./signin";
import SingUpButton from "./signup";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function SinginButtonNav() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [isSignIn, setIsSignIn] = React.useState(true);
  let isLogged = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div>
      <Button
        onClick={handleOpen}
        key="SignIn"
        textAlign="center"
        sx={{ my: 2, color: "white" }}
      >
        Sign in
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box component="form">
            {isSignIn ? (
              <SinginButton isLogged={isLogged} />
            ) : (
              <SingUpButton isLogged={isLogged} />
            )}
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
