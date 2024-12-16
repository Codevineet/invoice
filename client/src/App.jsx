import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/login";
import Invoices from "./components/Invoices";
// import Dum from "./components/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/invoices" element={<Invoices />} />
      </Routes>
    </Router>
  );
}

export default App;