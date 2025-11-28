import Logo from "../assets/react.svg";
import { Button } from "./Button";
// function Navbar(props)
// destructure
function Navbar({ name, user, count = 0, btnText }) {
  return (
    <div className="nav">
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>
      <ul>
        {/* /* <li>{props.name}</li> */}
        <li>{name}</li>
        <li>{user}</li>
        <li>{count}</li>
      </ul>
      <Button btnText={btnText} />
    </div>
  );
}

export default Navbar;
