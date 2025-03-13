// import {useState} from "react";
import "./App.css";
import AddTask from "./components/AddTask";
import Filter from "./components/Filter";
// import Hero from "./components/Hero";
import Task from "./components/Task";
import InputTaxt from "./components/InputTaxt";
import { useState } from "react";
import { CgLayoutGrid } from "react-icons/cg";

const App = () => {
  const [exit, setExit] = useState(true);
  const [taskvalue, setTaskvalue] = useState([]);
  const [checkbox, setCheckbox] = useState([]);
  function alerttaxt() {
    setExit(!exit);
    console.log("");
   
  }
  // function Checkboxset() {
  //   // setTaskvalue([{...taskvalue, checkbox: !taskvalue.checkbox }]);
  // }
  function Checkboxset(index) {
    setCheckbox([...checkbox, (checkbox[index] = !checkbox[index])]);
    console.log(checkbox[index]);
  }
  function delettask() {}
  function edetetask() {}
  function Supmit(value) {
    const now = new Date();
    setTaskvalue([
      ...taskvalue,
      {
        texttsak: value,
        time: now.toLocaleTimeString(),
        year: now.toLocaleDateString(),
      },
    ]);
    setCheckbox([...checkbox, false]);
  }

  return (
    <div className="h-lvh overflow-hidden ">
      <InputTaxt alerttax={alerttaxt} exit={exit} Supmit={Supmit} />
      <main className="bg-prim    h-lvh mx-10 my-8 ">
        <div>
          <h1 className="font-bold text-6xl text-center text-text">
            <span className=" mt-3">TODO LIST</span>
          </h1>
          <div className="w-3/5 mx-auto mt-24 flex justify-between">
            <AddTask alerttaxt={alerttaxt} exit={exit} />
            <Filter />
          </div>
        </div>
        <div className=" w-3/5 h-3/5 max-h-fit min-h-16 mx-auto mt-3 rounded-lg bg-graylite overflow-auto drop-shadow">
          {taskvalue.map((task, index) => {
            return (
              <Task
                Checkboxset={() => Checkboxset(index)}
                checkbox={checkbox}
                key={index}
                taxt={task.texttsak}
                time={task.time}
                year={task.year}
              />
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default App;
