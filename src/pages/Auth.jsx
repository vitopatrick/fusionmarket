import { Container, Paper, Box, Tab, Tabs, Typography } from "@mui/material";
import { outerBox, paperStyle, imgBox, alignItems } from "../style/authStyle";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import RegisterForm from "../components/register-form/Form";
import LoginForm from "../components/login-form/Form";
import React from 'react'

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
};

const Auth = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = "//code.tidio.co/8hgwgjzxz8ywpe2hcigymmlzh1ihm6ni.js";
    document.body.append(script);
  }, []);

  return (
    <Box sx={outerBox}>
      <Container maxWidth="md">
        <Box sx={paperStyle}>
          <Paper sx={paperStyle}>
            <Box sx={alignItems}></Box>
            <Box>
              <Tabs value={value} onChange={handleChange} centered>
                <Tab label="Register" />
                <Tab label="Login" />
              </Tabs>
              <TabPanel value={value} index={0}>
                <RegisterForm />
              </TabPanel>
              <TabPanel value={value} index={1}>
                <LoginForm />
              </TabPanel>
            </Box>
            <Box sx={alignItems}>
              <Typography variant="caption" textAlign="center" gutterBottom>
                © fusionexmarket.online
              </Typography>
            </Box>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
};

export default Auth;
