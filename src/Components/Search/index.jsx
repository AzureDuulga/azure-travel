import * as React from "react";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PersonIcon from "@mui/icons-material/Person";
import {
  Grid,
  Typography,
  ThemeProvider,
  createTheme,
  Button,
  Container,
} from "@mui/material";

export default function InputWithIcon() {
  const theme = createTheme({
    palette: {
      primary: {
        light: "#eeeeee",
        main: "#000000",
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Grid
          container
          padding={1}
          sx={{
            bgcolor: "primary.light",
            color: "primary.main",
            justifyContent: "space-between",
            borderRadius: "16px",
            alignItems: "center",
          }}
        >
          <Grid
            component="form"
            xs={4}
            sx={{ "& > :not(style)": { m: 1 } }}
            noValidate
            autoComplete="off"
          >
            <TextField
              placeholder="Search destinations, hotels"
              type="search"
              variant="standard"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <CalendarTodayIcon />
            <Typography variant="body2"> Check in</Typography>
          </Grid>
          <Grid
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <CalendarTodayIcon />
            <Typography variant="body2">Check out</Typography>
          </Grid>
          <Grid
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <PersonIcon />
            <Typography variant="body2">1 room, 2 adults</Typography>
          </Grid>
          <Grid>
            {/* <Stack spacing={5} direction="row"> */}
            <Button variant="contained" sx={{ borderRadius: "16px" }}>
              Search
            </Button>
            {/* </Stack> */}
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}
