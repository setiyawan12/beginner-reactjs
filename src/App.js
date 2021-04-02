import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./index.css";
import "./App.css";
import Login from "./componets/Login";
import Home from "./componets/Home";
import Auth from "./pages/Auth";
import axios from 'axios';

axios.defaults.baseURL = 'https://restfullbooks.herokuapp.com/'

function App() {
  return (
    <BrowserRouter>
      <Route exact path='/' component={Home} />
      <Route exact path="/Login" component={Login} />
      <Route path = '/auth' component={Auth}/>
    </BrowserRouter>
  );
}

export default App;
