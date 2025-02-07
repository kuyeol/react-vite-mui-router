

import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "./api/queryClient.ts";
import HomePage from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import Navbar from "./components/NavBar.tsx";
import { ErrorBoundaryFallback } from './components/ErrorBoundaryFallback.tsx';
import { Route, BrowserRouter as Router, Routes, useLocation, useRoutes } from 'react-router-dom';
import './globals.css';
import { ErrorBoundary } from 'react-error-boundary';
import { Container, CssBaseline } from "@mui/material";
import { BrowserRouter } from 'react-router-dom';
import Routing from './routes/Routing';
import React from 'react';


function App() {


  return (
    <QueryClientProvider client={queryClient}>
      <CssBaseline />
      <Router>
        <Navbar />
        <Container sx={{ display: 'flex', margin: 1, padding: 2 }} >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </Container>
      </Router>

    </QueryClientProvider >
  );
};

export default App;

