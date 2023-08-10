import React, { useState } from "react";

const AddProfile = () => {
  const [profile, setProfile] = useState({
    name: "",
    age: "",
    email: "",
    gender: "",
  });
  const handleChange = (e: React.ChangeEvent<any>) => {
    setProfile((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = () => {};
  return (
    <>
      <h1>New Profile</h1>
      <input name="name" onChange={handleChange} />
      <input name="age" onChange={handleChange} />
      <input name="email" onChange={handleChange} />
      <input name="gender" onChange={handleChange} />
      <button onClick={() => handleSubmit}>Create Profile</button>
    </>
  );
};

export default AddProfile;
