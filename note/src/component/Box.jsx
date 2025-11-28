import { Button } from "./Button";
export const Card = ({ name, title, btnText, deleteHandler }) => {
  return (
    <div>
      <h2>{name}</h2>
      <h3>{title}</h3>
      <p>Now I am Learning React-js</p>
      <button onClick={deleteHandler}>{btnText} </button>
    </div>
  );
};
