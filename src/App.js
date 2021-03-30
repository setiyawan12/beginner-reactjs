import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./index.css";
import "./App.css";
import Login from "./componets/Login";
import Greet from "./componets/Greet";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Login} />
      <Route path='/greet' component={Greet} />
    </BrowserRouter>
  );
}

export default App;
