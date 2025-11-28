import React, { useState } from "react";

export const Form = () => {
  const [title, settitle] = useState("");

  const titleChangeHandle = (event) => {
    console.log(event.target.value);
    settitle(event.target.value);
  };

  const descriptionChangeHandler = (event) => {
    console.log(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted using onsubmit");
  };
  console.log(title);
  return (
    <div>
      <h1>{title}</h1>
      <h1>crete note</h1>
      <form>
        <label htmlFor="title">name</label>
        <input type="text" id="title" onChange={titleChangeHandle} />
        <button type="submit" onClick={handleBtnClick}>
          Submit
        </button>
      </form>
    </div>
  );
};
