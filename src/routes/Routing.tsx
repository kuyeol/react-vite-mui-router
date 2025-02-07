import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import Register from '@/pages/Auth/Register';
// import Login from '@/pages/Auth/Login';
// import Home from '@/pages/Home/Home';
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from "../pages/Home";
import { Container } from "@mui/material";
import { BrowserRouter as Router } from "react-router-dom";

import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

function Bar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          My App
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/about">
          About
        </Button>
      </Toolbar>
    </AppBar>
  );
}



function Routing () {

  return (
    <Router>
      <Bar/>
      <Container>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default Routing;