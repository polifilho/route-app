import React from "react";
import { Grid2 } from "@mui/material";

import Route from './components/Route'
import { OrderItem } from './types';
import './App.css';

interface RouteProps {
  orderItem: OrderItem;
}

const App: React.FC<RouteProps> = ({ orderItem }) => {
  return (
    <>
      <header>
        <h1>Flix - Check now your route</h1>
      </header>
      <Grid2 container justifyContent='center'>
        <Route orderItem={orderItem} />
      </Grid2>
    </>
  );
};

export default App;
