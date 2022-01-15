import React from "react";
import Navbar_cus from "./components/Navbar_cus";
import LocksmithNorth from "./components/LocksmithNorth";
import LocksmithSouth from "./components/LocksmithSouth";
import LocksmithCenter from "./components/LocksmithCenter";
import Recommended from "./components/Recommended";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar_cus />
      <Routes>
        <Route exact path="/" element={<Recommended />} />
        <Route exact path="/Recommended" element={<Recommended />} />
        <Route exact path="/locksmithNorth" element={<LocksmithNorth />} />
        <Route exact path="/locksmithSouth" element={<LocksmithSouth />} />
        <Route exact path="/locksmithCenter" element={<LocksmithCenter />} />
      </Routes>
    </Router>
  );
}

export default App;
