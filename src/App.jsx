import "./App.css";
import AddTask from "./components/AddTask";
import Filter from "./components/Filter";
import Task from "./components/Task";
import InputTaxt from "./components/InputTaxt";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import "./index.css";

// import EditTaxt from "./components/EditTaxt";

const App = () => {
  const [exit, setExit] = useState(true);
  const [taskvalue, setTaskvalue] = useState(
    localStorage.getItem("the_data_of_list")
      ? JSON.parse(localStorage.getItem("the_data_of_list"))
      : []
  );
  // useEffect(() => {
  //   const data = window.localStorage.getItem("the_data");
  //   setTaskvalue(JSON.parse(data));
  // });
  useEffect(() => {
    window.localStorage.setItem("the_data_of_list", JSON.stringify(taskvalue));
  }, [taskvalue]);

  function alerttaxt() {
    setExit(!exit);
  }

  function delettask(id) {
    setTaskvalue(taskvalue.filter((task1) => task1.id !== id));
  }
  // function Edit(id) {
  //   setTaskvalue(
  //     taskvalue.map((task1) =>
  //       task1.id == id ? { ...task1, isEdit: !task1.isEdit } : task1
  //     )
  //   );
  // }

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
        isEdit: true,
        id: uuidv4(),
        texttsak: value,
        time: now.toLocaleTimeString(),
        year: now.toLocaleDateString(),
        checkbox: false,
      },
    ]);
  }

  return (
    <div className="h-lvh overflow-hidden ">
      <InputTaxt alerttax={alerttaxt} exit={exit} Supmit={Supmit} />
      {/* {taskvalue.isEdit ? "" : <EditTaxt taskvalue={taskvalue}  />} */}

      <main className="bg-[var(--prim)]  h-lvh mx-10 my-8 ">
        <div>
          <h1 className="font-bold text-6xl text-center  text-[var(--text)]">
            <span className=" mt-3">TODO LIST</span>
          </h1>
          <div className="w-3/5 mx-auto mt-24 flex justify-between">
            <AddTask alerttaxt={alerttaxt} exit={exit} />
            <Filter />
          </div>
        </div>
        <div className=" w-3/5 h-3/5 max-h-fit min-h-16 mx-auto mt-3 rounded-lg  bg-[var(--graylite)] overflow-auto drop-shadow">
          {taskvalue.map((task, index) => (
            <Task
              task={task}
              key={index}
              Checkboxset={Checkboxset}
              delettask={delettask}
              // Edit={Edit}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default App;
