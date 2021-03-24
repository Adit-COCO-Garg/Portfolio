
import React from "react";
import './App.scss';
import {
  BrowserRouter as Router,
} from "react-router-dom";

import HeaderNav from "./components/HeaderNav/HeaderNav"
import Footer from "./components/Footer/Footer"
import HomePage from "./content/HomePage"

function App() {
  return (
    <Router>
      <HeaderNav />
      <HomePage />
      <Footer />
    </Router>
  );
}

export default App;
