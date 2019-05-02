import React from "react";
import Home from "./containers/home/home";
import Navbar from "./components/navbar/navbar";
import GoRehhan from "./containers/gorehhan/index";
import { Switch, Route } from "react-router-dom";
import Gila from "./components/list-makanan-gw/index";

function App() {
  return (
    <div style={{ backgroundColor: "#eeeeee" }}>
      <Navbar />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/gorehhan" component={GoRehhan} />
        <Route path="/gilawanget" component={Gila} />
      </Switch>
    </div>
  );
}
export default App;
