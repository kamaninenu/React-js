import { useContext } from "react";
import ModeContext from "../context/Mode_context";

export const AllToDo = () => {
  const { isDarkMode } = useContext(ModeContext);

  return (
    <div className={`${!isDarkMode ? "nav-dark" : "nav-light"}`}>
      <h1>Hello ........</h1>
    </div>
  );
};
