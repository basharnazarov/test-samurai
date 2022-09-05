import React from "react";
import { Box } from "@mui/system";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout(props) {
  return (
    <Box sx={{ background: "#ddd", width: "100%", }}>
      <Navbar />
      {props.children}
      <Footer />
    </Box>
  );
}

export default Layout;
