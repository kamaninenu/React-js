import "./App.css";
import Navbar from "./components/Navbar";

const DUMMY = [
  {
    id: 1,
    title: "first name",
  },
  {
    id: 2,
    title: "second name",
  },
  {
    id: 3,
    title: "third name",
  },
  {
    id: 4,
    title: "forth name",
  },
];
function App() {
  return (
    <>
      {DUMMY.map((item, index) => {
        return (
          <div key={index}>
            <Navbar name={item.title} btnText="login" />
          </div>
        );
      })}
      {/* <Navbar name="home" btnText="login" user="user" count={5} />
      <Navbar name="contact" btnText="abd" user="service" /> */}
    </>
  );
}

export default App;
