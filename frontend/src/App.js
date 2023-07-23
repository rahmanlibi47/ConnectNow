import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Lobby from "./components/lobby";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Lobby />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
