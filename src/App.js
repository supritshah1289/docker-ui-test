import React from "react";
import "./App.css";
import SideMenu from "./components/navigation/SideMenu";
import Card from "./components/common/Card";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Footer from "./components/navigation/Footer";
import AppBar from "./components/navigation/AppBar";
import { Typography } from "@mui/material";

function App() {
  return (
    <div className="App">
      <AppBar />
      {/* <SideMenu /> */}

      <Container sx={{ marginY: 5 }}>
        <Grid container spacing={2}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Grid>
      </Container>
      <Container marginTop={2}>
        <Footer />
      </Container>
    </div>
  );
}

export default App;
