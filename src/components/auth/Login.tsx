import React, { useState } from "react";
import { login, logout } from "../../actions/authActions";
import { RootState } from "../../store/reducers";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../store/store";
import { Link } from "react-router-dom";
import Profiles from "../profiles/Profiles";
const Login = () => {
  //Set credentials on first load if none is found
  const [userData, setUserData] = useState({
    user: "joanne",
    password: "SyDOqnd82",
  });
  localStorage.clear();
  if (!localStorage.getItem("userData")) {
    const storedUserData = localStorage.getItem("userData");
    const userDataArray = storedUserData ? JSON.parse(storedUserData) : [];
    userDataArray.push(userData); // Add user to array
    localStorage.setItem("userData", JSON.stringify(userDataArray));
    console.log(localStorage.getItem("userData"));
  }
  const [credentials, setCredentials] = useState({ user: "", password: "" });

  const dispatch = useAppDispatch();
  const loggedIn = useSelector((state: RootState) => state.auth.loggedIn);

  const handleLogout = () => {
    dispatch(logout());
  };
  const handleLogin = () => {
    dispatch(login(credentials));
  };

  const handleChange = (e: React.ChangeEvent<any>) => {
    setCredentials((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
    console.log(credentials);
  };

  return (
    <div>
      {loggedIn ? (
        <>
          <Profiles />
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <input name="user" onChange={(e) => handleChange(e)}></input>
          <input name="password" onChange={(e) => handleChange(e)}></input>
          <button onClick={handleLogin}>Login</button>
        </>
      )}
    </div>
  );
};

export default Login;
