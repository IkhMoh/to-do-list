import React from "react";
import AddTask from "./AddTask";
import Filter from "./Filter";
import Task from "./Task";
import { MdSettingsSuggest } from "react-icons/md";
import { Link } from "react-router-dom";

const Home = ({ finalfilter }) => {
  return (
    <>
      <div>
        <h1 className="font-bold grid text-[2.625rem] md:text-6xl relative text-[var(--text)] ">
          <span className="justify-self-center mt-3 absolute ">TODO LIST</span>
          <Link
            className="justify-self-end h-14 w-14 p-0.5   md:mr-6 mt-3  text-gray-500 transition drop-shadow-lg"
            to="/settings"
          >
            <MdSettingsSuggest />
          </Link>
        </h1>
        <div className="w-8/9 lg:w-5/6 mx-auto mt-12 flex justify-between">
          <AddTask />
          <Filter />
        </div>
      </div>
      <div className="   lg:w-5/6 h-3/5 max-h-fit min-h-16 mx-auto mt-3 rounded-lg  bg-[var(--graylite)] overflow-auto drop-shadow">
        {finalfilter.map((task, index) => (
          <Task task={task} key={index} />
        ))}
      </div>
    </>
  );
};

export default Home;
