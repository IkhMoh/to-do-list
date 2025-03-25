import "./App.css";
import AddTask from "./components/AddTask";
import Filter from "./components/Filter";
import Task from "./components/Task";
import EditTaxt from "./components/EditTaxt";
import InputTaxt from "./components/InputTaxt";
import { useState, useEffect, useMemo } from "react";
import { v4 as uuidv4 } from "uuid";
import Settings from "./components/Settings";
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

  function handleAlertTaxt() {
    setExit(!exit);
  }
  function handleAlertEdit() {
    setExitEdit(!exitEdit);
  }

  function handleDeletTaskClick(id) {
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
  function shawuId(id) {
    taskvalue.map((task1) =>
      task1.id == id ? setNewTaxt({ value: task1.texttsak, idd: id }) : task1
    );
  }

  function handleCheckboxClick(id) {
    setTaskvalue(
      taskvalue.map((task1) =>
        task1.id == id ? { ...task1, checkbox: !task1.checkbox } : task1
      )
    );
  }
  function handleSupmitClick(newTaxt) {
    const now = new Date();
    setTaskvalue([
      ...taskvalue,
      {
        id: uuidv4(),
        texttsak: newTaxt,
        time: now.toLocaleTimeString(),
        year: now.toLocaleDateString(),
        checkbox: false,
      },
    ]);
  }
  const nocheck = useMemo(() => {
    return taskvalue.filter((task) => !task.checkbox);
  }, [taskvalue]);

  const check = useMemo(() => {
    return taskvalue.filter((task) => task.checkbox);
  }, [taskvalue]);

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
      <InputTaxt
        handleAlertTaxt={handleAlertTaxt}
        exit={exit}
        handleSupmitClick={handleSupmitClick}
      />
      <EditTaxt
        handleAlertEdit={handleAlertEdit}
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
          <div className="w-8/9 lg:w-5/6 mx-auto mt-20 flex justify-between">
            <AddTask handleAlertTaxt={handleAlertTaxt} exit={exit} />
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
              handleCheckboxClick={handleCheckboxClick}
              handleDeletTaskClick={handleDeletTaskClick}
              handleAlertEdit={handleAlertEdit}
              shawuId={shawuId}
            />
          ))}
        </div>
       {/* <Settings/> */}
      </main>
    </div>
  );
};

export default App;
