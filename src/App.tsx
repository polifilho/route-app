import React from "react";
import { Grid2 } from "@mui/material";

import Route from './components/Route'
import { OrderItem } from './types';
import './App.css';

interface AppProps {
  orderItem: OrderItem;
}

const App: React.FC<AppProps> = ({ orderItem }) => {
  return (
    <>
      <header>
        <h1>Flix - Check now your route</h1>
      </header>
      <main>
        <Grid2 container justifyContent='center'>
          <Route orderItem={orderItem} />
        </Grid2>
      </main>
    </>
  );
};

export default App;
