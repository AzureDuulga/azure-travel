import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {
  FormControlLabel,
  Checkbox,
  Grid,
  Link,
  Avatar,
  Typography,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import LockIcon from "@mui/icons-material/Lock";

export default function SingUpButton(props) {
  return (
    <>
      <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
        <LockIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign up
      </Typography>
      <Box component="form">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              autoComplete="fname"
              name="firstName"
              variant="outlined"
              required
              fullWidth
              id="firstName"
              label="First Name"
              autoFocus
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="lastName"
              label="Last Name"
              name="lastName"
              autoComplete="lname"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox value="allowExtraEmails" color="primary" />}
              label="I want to receive inspiration, marketing promotions and updates via email."
            />
          </Grid>
        </Grid>
        <Button type="submit" fullWidth variant="contained" color="primary">
          Sign Up
        </Button>
        <Grid container justify="flex-end">
          <Grid item>
            <Button
              onClick={() => {
                props.isLogged();
              }}
              variant="body2"
            >
              Already have an account? Sign in
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
