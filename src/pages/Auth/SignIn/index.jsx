import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Snackbar, Alert } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const onClose = () => {
    setOpen(false);
  };
  const login = () => {
    console.log("hsdfghdfg");
    if (email === "" || password === "") {
      setOpen(true);
    } else {
      console.log(email + password);
      localStorage.setItem("isLogged", true);
      navigate("/");
    }
  };
  const changeEmail = (e) => {
    setEmail(e.target.value);
    console.log("Email: ", e);
  };
  const changePassword = (e) => {
    setPassword(e.target.value);
    console.log("Email: ", e.target.value);
  };

  return (
    <div>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={changeEmail}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={changePassword}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              onClick={login}
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Button
                  onClick={() => {
                    props.setIsSignIn(false);
                  }}
                  variant="text"
                >
                  Бүртгүүлэх
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Snackbar
          open={open}
          autoHideDuration={3000}
          onClose={onClose}
          message={"hi"}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <Alert severity="error">Утга оруулна уу</Alert>
        </Snackbar>
      </Container>
    </div>
  );
};

export default SignIn;
