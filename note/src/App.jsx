import "./App.css";
import Navbar from "./component/Navbar";
import { Form } from "./component/Form";
import { Card } from "./component/Box";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

function App() {
  const [allData, setAllData] = useState([]);
  const getFormData = (noteData) => {
    console.log(noteData);
    setAllData([...allData, { ...noteData, id: uuidv4() }]);
  };
  console.log(allData);

  const deleteHandler = (id) => {
    console.log(id);
    const filteredData = allData.filter((note) => {
      return note.id !== id;
    });
    console.log(filteredData);
    setAllData(filteredData);
  };
  return (
    <>
      <Navbar className="Navbar" name="Notes" />
      <Form getFormData={getFormData} btnText={"Submit"} />
      <div className="allCard">
        {allData.map((item) => {
          return (
            <div
              className="card"
              key={item.id}
              style={{ backgroundColor: item.color }}
            >
              <Card
                name={item.title}
                title={item.desc}
                btnText={"Delete"}
                deleteHandler={() => deleteHandler(item.id)}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
