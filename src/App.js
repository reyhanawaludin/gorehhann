import React from "react";
import Home from "./containers/home/home.jsx";
import Navbar from "./components/navbar/navbar";
import GoRehhan from "./containers/page-home/index";
import { Switch, Route } from "react-router-dom";
import Gila from "./containers/list-makanan-gw/list-makanan";
import Resto from "./containers/page-list-resto/index";
import Bayar from "./containers/page-pembayaran";

function App() {
  return (
    <div style={{ backgroundColor: "#eeeeee" }}>
      <Navbar />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/gorehhan" component={GoRehhan} />
        <Route path="/gilawanget" component={Gila} />
        <Route path="/listrestoran" component={Resto} />
        <Route path="/pembayaran" component={Bayar} />
      </Switch>
    </div>
  );
}
export default App;
