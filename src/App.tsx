import React, { Suspense, useState } from "react";
import logo from "./logo.svg";
import "./App.scss";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddProfile from "./components/profiles/AddProfile";
import DefaultLayout from "./components/DefaultLayout";
import EditProfile from "./components/profiles/EditProfile";
import ViewProfile from "./components/profiles/ViewProfile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/profiles/new"
          element={
            <DefaultLayout>
              <AddProfile />
            </DefaultLayout>
          }
        ></Route>
        <Route
          path="/profiles/view/:id"
          element={
            <DefaultLayout>
              <ViewProfile />
            </DefaultLayout>
          }
        ></Route>
        <Route
          path="/profiles/edit/:id"
          element={
            <DefaultLayout>
              <EditProfile />
            </DefaultLayout>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
