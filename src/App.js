import React from 'react';
import { BrowserRouter,Switch,Route } from "react-router-dom";
import './index.css'
import './App.css';
import Login from './componets/Login';

function App() {
  return (
    <BrowserRouter>
    <Route exact path='/' component={Login}/>
    </BrowserRouter>
  );
}

export default App;
