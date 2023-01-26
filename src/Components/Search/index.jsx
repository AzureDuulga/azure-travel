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
  return (
    <Grid
      container
      padding={1}
      sx={{
        bgcolor: "#ffffff66",
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
        disableUnderline
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
        <Button
          variant="contained"
          disableElevation
          sx={{
            borderRadius: "32px",
            padding: "8px 48px",
            color: "#2659C3",
            backgroundColor: "white",
            fontWeight: 700,
          }}
        >
          Search
        </Button>
      </Grid>
    </Grid>
  );
}
