import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React, { Component }  from 'react';
import Home from './components/Pages/Home';
import StockData from './components/Pages/StockData';
import Aboutus from './components/Pages/Aboutus'

function App() {
  return (
    <React.Fragment>
      <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/stockdata' exact component={StockData}/>
        <Route path='/aboutus' exact component={Aboutus}/>
      </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
