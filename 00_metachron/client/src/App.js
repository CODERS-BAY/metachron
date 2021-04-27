import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes/Routes";

import Navigation from "./components/Navigation/Navigation";

import "./fonts/font-style.css";
import "./styles/media-queries/media-query-style.css";
import "./styles/main/main-style.css";
import "./styles/main/components/pagenotfound/pagenotfound-style.css";
import "./styles/main/components/navigation/navigation-style.css";
import "./styles/main/components/overlay/overlay-style.css";
import "./styles/main/components/content/content-style.css";
import "./styles/main/components/login/login-style.css";
import "./styles/main/components/footer/footer-style.css";
import "./styles/dashboard/dashboard-main-style.css";
import "./styles/dashboard/dashboard-navigation-style.css";
import "./styles/dashboard/dashboard-content-style.css";

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
