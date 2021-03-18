
import React from "react";
import './App.scss';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import HeaderNav from "./components/HeaderNav/HeaderNav"
import HomePage from "./content/HomePage"

function App() {
  return (
    <Router>
      <HeaderNav />
      <HomePage />
    </Router>
  );
}

export default App;
