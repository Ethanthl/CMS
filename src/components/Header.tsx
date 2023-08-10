import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/reducers";

const Header = () => {
  const loggedInUser = useSelector((state: RootState) => state.auth.user);
  return (
    <div>
      <h1>{loggedInUser}</h1>
    </div>
  );
};

export default Header;
