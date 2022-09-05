import React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

function Navbar() {
  return (
    <AppBar position="static">
      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
      >
        <Button>News</Button>
        <Button>Login</Button>
        <Button>Registration</Button>
        <Button>Favourites</Button>
      </ButtonGroup>
    </AppBar>
  );
}

export default Navbar;
