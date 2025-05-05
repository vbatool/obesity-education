import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/navigationBar/NavigationBar";
import HomePage from "./pages/homePage/HomePage";
import CausesOfObesity from "./pages/causeOfObesityPage/CausesOfObesityPage";
import ChallengesOfWeightLoss from "./pages/challengesOfWeightLoss/ChallengesOfWeightLoss";
import HealthScreenings from "./pages/healthScreenings/HealthScreenings";

function App() {
  return (
    <Router>
      <NavigationBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/health-topics/causes-of-obesity"
          element={<CausesOfObesity />}
        />
        <Route
          path="/health-topics/challenges-of-weight-loss"
          element={<ChallengesOfWeightLoss />}
        />

        <Route
          path="/health-topics/health-screenings"
          element={<HealthScreenings />}
        />
      </Routes>
    </Router>
  );
}

export default App;
