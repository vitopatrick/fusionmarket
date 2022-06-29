import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { AppBar, Toolbar, Box, Typography, Button } from "@mui/material";
import { links } from "./links";
import "./navbar.css";

const Navbar = () => {
  const [active, setActive] = useState(false);

  const toggle = () => {
    setActive(!active);
  };
  return (
    <React.Fragment>
      <AppBar position="static">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            p: 2,
          }}
        >
          <Link to="/">
            <Box>
              <Typography
                variant="h4"
                component="h1"
                sx={{ color: "#fff", fontWeight: "bold" }}
              >
                Fidelity-Market
              </Typography>
            </Box>
          </Link>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {links.map((link) => (
              <Typography variant="body1" component="p" sx={{ mr: 5 }}>
                <Link to={link.path} key={link.id} style={{ color: "#fff" }}>
                  {link.title}
                </Link>
              </Typography>
            ))}
          </Box>
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <Link to="/register">
              <Button variant="outlined" color="warning" size="large">
                Get Started
              </Button>
            </Link>
          </Box>
          <Box className="bars">
            <FaBars className="bars" size="20px" onClick={toggle} />
          </Box>
        </Toolbar>
        <Box className={active ? "sidenav active" : "sidenav"}>
          <Box sx={{ ml: 3, mt: 1 }}>
            <FaTimes className="bars" size="20px" onClick={toggle} />
          </Box>
          <Box sx={{ p: 3 }}>
            {links.map((link) => (
              <Typography variant="body1" component="p" sx={{ mt: 1, mb: 3 }}>
                <Link to={link.path} key={link.id} style={{ color: "#fff" }}>
                  {link.title}
                </Link>
              </Typography>
            ))}
            <Link to="/register">
              <Button fullWidth variant="outlined" color="warning">
                Get Started
              </Button>
            </Link>
          </Box>
        </Box>
      </AppBar>
    </React.Fragment>
  );
};

export default Navbar;
