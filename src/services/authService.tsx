import { useState } from "react";

export const storeUserData = () => {
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
  }
};
