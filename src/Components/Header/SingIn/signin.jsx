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

export default function SinginButton(props) {
  return (
    <>
      <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
        <LockIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
      <Box component="form">
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
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
        />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />
        <Button
          type="submit"
          fullWidth
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
                props.isLogged();
              }}
            >
              {"Sign Up"}
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
