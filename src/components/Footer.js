import React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

function Footer() {
  return (
    <AppBar position="relative">
      <ButtonGroup variant="contained">
        <Button>News</Button>
        <Button>Login</Button>
        <Button>Registration</Button>
        <Button>Favourites</Button>
      </ButtonGroup>
    </AppBar>
  );
}

export default Footer;
