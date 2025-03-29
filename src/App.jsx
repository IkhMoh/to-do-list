import "./App.css";
import { Routes, Route } from "react-router-dom";
import EditTaxt from "./components/EditTaxt";
import InputTaxt from "./components/InputTaxt";
import { useState, useEffect, useMemo, useReducer } from "react";
import Settings from "./components/Settings";
import Home from "./components/Home";
import { Emoji } from "./contexts/changeEmoji";
import { Handles } from "./contexts/handles";
import { State_of_List } from "./contexts/State_of_List";
import EmojiRedu from "./reducers/EmojiRedu";
import todoRedu from "./reducers/todoRedu";
const App = () => {
  // hooks
  const [emoji, dispatchEmo] = useReducer(EmojiRedu, {
    first: "👉",
    second: "👀",
    yas: "✔",
    no: "❌",
  });
  const [taskvalue, dispatch] = useReducer(todoRedu, []);
  const [exit, setExit] = useState(true);
  const [exitEdit, setExitEdit] = useState(true);
  const [newEmoji, setNewEmoji] = useState(emoji);
  const [newTaxt, setNewTaxt] = useState({ value: "", idd: 0 });
  const [filterButton, setFilterButton] = useState("all");

  useEffect(() => {
    dispatch({
      type: "dataFromloLocalStorage",
    });
  }, []);

  useEffect(() => {
    dispatchEmo({
      type: "dataEmofromLocalStorage",
    });
  }, []);
  const nocheck = useMemo(() => {
    return taskvalue.filter((task) => !task.checkbox);
  }, [taskvalue]);
  const check = useMemo(() => {
    return taskvalue.filter((task) => task.checkbox);
  }, [taskvalue]);
  // ====== hooks=====

  // handlers functions
  function handleAlertTaxt() {
    setExit(!exit);
  }
  function handleAlertEdit() {
    setExitEdit(!exitEdit);
  }
  function handleDeletTaskClick(id) {
    dispatch({ type: "delete", payload: { id } });
  }
  function handleEditClick() {
    dispatch({
      type: "edit",
      payload: { id: newTaxt.idd, text: newTaxt.value },
    });
    setExitEdit(!exitEdit);
  }
  function handleSaveClick() {
    dispatchEmo({ type: "Save", payload: { newEmoji } });
  }
  function handleShawuId(id) {
    dispatch({ type: "ShawuId", payload: { id, setNewTaxt } });
  }
  function handleCheckboxClick(id) {
    dispatch({
      type: "checkbox",
      payload: { id },
    });
  }
  function handleSupmitClick(newTaxt) {
    dispatch({ type: "add", payload: { newTaxt } });
  }
  // ============ handlers functions =====
  let finalfilter = taskvalue;
  if (filterButton == "non") {
    finalfilter = nocheck;
  } else if (filterButton == "yas") {
    finalfilter = check;
  } else {
    finalfilter = taskvalue;
  }
  return (
    <>
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
        <Handles.Provider
          value={{
            handleAlertTaxt,
            handleCheckboxClick,
            handleDeletTaskClick,
            handleAlertEdit,
            handleShawuId,
            handleSaveClick,
          }}
        >
          <Emoji.Provider value={{ emoji, newEmoji, setNewEmoji }}>
            <State_of_List.Provider
              value={{ exit, setFilterButton, filterButton }}
            >
              <main className="bg-[var(--prim)]  h-lvh mx-3 sm:mx-10 my-8 ">
                <Routes>
                  <Route
                    path="/"
                    element={<Home finalfilter={finalfilter} />}
                  />
                  <Route path="/settings" element={<Settings />} />
                </Routes>
              </main>
            </State_of_List.Provider>
          </Emoji.Provider>
        </Handles.Provider>
      </div>
    </>
  );
};

export default App;
