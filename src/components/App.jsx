import Sections from "./Sections";
import "../styles";
import { Route } from "react-router-dom";
import React, { useEffect } from "react";
import Goods from "./Goods";
import { Container, Grid } from "@material-ui/core";
import { loadSections } from "../redux/sections";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.sections.loading);

  useEffect(() => {
    dispatch(loadSections());
  }, [dispatch]);

  if (loading) {
    return "...";
  }

  return (
    <main>
      <Container fixed>
        <Grid container justifyContent={"space-between"}>
          <Grid item xs={4}>
            <Sections />
          </Grid>
          <Grid item xs={7}>
            <Route path="/goods/:id?">
              <Goods />
            </Route>
          </Grid>
        </Grid>
      </Container>
    </main>
  );
}

export default App;
