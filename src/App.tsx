import React, { Suspense, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddProfile from "./components/profiles/AddProfile";
import Profiles from "./components/profiles/Profiles";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profiles/" element={<Profiles />} />
        <Route path="/profiles/new/" element={<AddProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
