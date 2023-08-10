import React, { useState } from "react";
import Login from "./auth/Login";
import { useSelector } from "react-redux";
import { RootState } from "../store/reducers";
import Profiles from "./profiles/Profiles";
import DefaultLayout from "./DefaultLayout";

const Home = () => {
  const loggedIn = useSelector((state: RootState) => state.auth.loggedIn);
  return (
    <div>
      {!loggedIn ? (
        <Login />
      ) : (
        <DefaultLayout>
          <Profiles />
        </DefaultLayout>
      )}
    </div>
  );
};

export default Home;
