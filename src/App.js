import React from "react";
import Home from "./containers/home/home.jsx";
import { Switch, Route } from "react-router-dom";
import Dashresto from "./containers/dash-resto/index.js";
import Dashfood from "./containers/dash-food/index.js";
import DashGohan from "./containers/dash-gohan/index.js";
import Bayar from "./containers/dash-pembayaran/dash-pembayaran";

function App() {
  return (
    <div style={{ backgroundColor: "#eeeeee" }}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/restos" exact component={Dashresto} />
        <Route path="/restos/:id" component={Dashfood} />
        <Route path="/gohan" component={DashGohan} />
        <Route path="/pembayaran" component={Bayar} />
      </Switch>
    </div>
  );
}
export default App;
