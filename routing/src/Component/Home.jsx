import React, { useEffect, useState } from "react";

const Home = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const [error, setError] = useState({});

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError((prevError) => {
      const newError = { ...prevError };
      delete newError[name];
      return newError;
    });
  };

  const valiate = () => {
    const newError = {};
    if (!formData.firstName.trim()) {
      newError.firstName = "First name is required!";
    }
    if (!formData.lastName.trim()) {
      newError.lastName = "Last name is required!";
    }
    if (!formData.email.trim()) {
      newError.email = "Email is required!";
    } else if (!formData.phone.trim()) {
      newError.phone = "Phone is required!";
    }
    setError(newError);
    return Object.keys(newError).length === 0;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (valiate()) {
      console.log("form sumiitted successfully....");
    } else {
      alert("something went wrong!!");
    }
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label>First Name *</label>
        <input type="text" name="firstName" onChange={handleInputChange} />
        {error.firstName && <p>{error.firstName}</p>}
        <br />
        <label>Last Name*</label>
        <input type="text" name="lastName" onChange={handleInputChange} />
        {error.lastName && <p>{error.lastName}</p>}

        <br />
        <label>Email*</label>
        <input type="text" name="email" onChange={handleInputChange} />
        {error.email && <p>{error.email}</p>}

        <br />
        <label>Phone*</label>
        <input type="text" name="phone" onChange={handleInputChange} />
        {error.phone && <p>{error.phone}</p>}

        <br />
        <button type="sumit">Regiister</button>
      </form>
    </div>
  );
};

export default Home;
