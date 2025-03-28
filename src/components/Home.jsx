import React from "react";
import AddTask from "./AddTask";
import Filter from "./Filter";
import Task from "./Task";
import { MdSettingsSuggest } from "react-icons/md";
import { Link } from "react-router-dom";
const Home = ({
  handleAlertTaxt,
  exit,
  setFilterButton,
  filterButton,
  finalfilter,
  handleCheckboxClick,
  handleDeletTaskClick,
  handleAlertEdit,
  shawuId,
}) => {
  return (
    <>
      <div>
        <h1 className="font-bold grid text-5xl md:text-6xl relative text-[var(--text)]">
          <span className="justify-self-center mt-3 absolute ">TODO LIST</span>
          <Link
            className="justify-self-end h-14 w-14 p-0.5 mr-6 mt-5  text-gray-500 transition drop-shadow-lg"
            to="/settings"
          >
            <MdSettingsSuggest />
          </Link>
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
    </>
  );
};

export default Home;
