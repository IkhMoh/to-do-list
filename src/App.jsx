import "./App.css";
import AddTask from "./components/AddTask";
import Filter from "./components/Filter";
import Task from "./components/Task";
import EditTaxt from "./components/EditTaxt";
import InputTaxt from "./components/InputTaxt";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
// import "./index.css";

const App = () => {
  const [exit, setExit] = useState(true);
  const [exitEdit, setExitEdit] = useState(true);
  const [newTaxt, setNewTaxt] = useState({ value: "", idd: 0 });
  const [filterButton, setFilterButton] = useState("all");
  const [taskvalue, setTaskvalue] = useState(
    localStorage.getItem("the_data_of_list")
      ? JSON.parse(localStorage.getItem("the_data_of_list"))
      : []
  );

  useEffect(() => {
    window.localStorage.setItem("the_data_of_list", JSON.stringify(taskvalue));
  }, [taskvalue]);

  function alerttaxt() {
    setExit(!exit);
  }
  function alertEdit() {
    setExitEdit(!exitEdit);
  }

  function delettask(id) {
    setTaskvalue(taskvalue.filter((task1) => task1.id !== id));
  }

  function handleEditClick() {
    setTaskvalue(
      taskvalue.map((task1) =>
        task1.id == newTaxt.idd ? { ...task1, texttsak: newTaxt.value } : task1
      )
    );
    setExitEdit(!exitEdit);
  }
  function bb(id) {
    taskvalue.map((task1) =>
      task1.id == id ? setNewTaxt({ value: task1.texttsak, idd: id }) : task1
    );
  }
  function Checkboxset(id) {
    setTaskvalue(
      taskvalue.map((task1) =>
        task1.id == id ? { ...task1, checkbox: !task1.checkbox } : task1
      )
    );
  }
  function Supmit(value) {
    const now = new Date();
    setTaskvalue([
      ...taskvalue,
      {
        id: uuidv4(),
        texttsak: value,
        time: now.toLocaleTimeString(),
        year: now.toLocaleDateString(),
        checkbox: false,
      },
    ]);
  }
  const nocheck = taskvalue.filter((task) => !task.checkbox);

  const check = taskvalue.filter((task) => task.checkbox);
 let finalfilter = taskvalue;
  if (filterButton == "non") {
    finalfilter = nocheck;
  } else if (filterButton == "yas") {
    finalfilter = check;
  } else {
    finalfilter = taskvalue;
  }
  return (
    <div className="h-lvh overflow-hidden ">
      <InputTaxt alerttax={alerttaxt} exit={exit} Supmit={Supmit} />
      <EditTaxt
        alertEdit={alertEdit}
        exitEdit={exitEdit}
        setNewTaxt={setNewTaxt}
        newTaxt={newTaxt}
        handleEditClick={handleEditClick}
      />

      <main className="bg-[var(--prim)]  h-lvh mx-3 sm:mx-10 my-8 ">
        <div>
          <h1 className="font-bold text-5xl md:text-6xl text-center  text-[var(--text)]">
            <span className=" mt-3">TODO LIST</span>
          </h1>
          <div className="w-8/9 lg:w-5/6 mx-auto mt-24 flex justify-between">
            <AddTask alerttaxt={alerttaxt} exit={exit} />
            <Filter
              setFilterButton={setFilterButton}
              filterButton={filterButton}
            />
          </div>
        </div>
        <div className="   lg:w-5/6 h-3/5 max-h-fit min-h-16 mx-auto mt-3 rounded-lg  bg-[var(--graylite)] overflow-auto drop-shadow">
          {finalfilter.map((task, index) => (
            <Task
              task={task}
              key={index}
              Checkboxset={Checkboxset}
              delettask={delettask}
              alertEdit={alertEdit}
              bb={bb}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default App;
