import "react";
// import {useState} from "react";

const AddTask = ({ handleAlertTaxt }) => {
  return (
    <div
      onClick={handleAlertTaxt}
      className="px-5 sm:px-8 py-2 sm:py-3 bg-[var(--asasy)] font-bold  h-fit w-fit  md:text-xl text-white  rounded-lg cursor-pointer shadow-lg hover:drop-shadow-md transition"
    >
      Add Task  
    </div>
  );
};

export default AddTask;
