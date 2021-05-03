import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes/Routes";

import Navigation from "./components/Navigation/Navigation";

import "./styles/main/main-style.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes />
      </Router>
    </div>
  );
}

export default App;
