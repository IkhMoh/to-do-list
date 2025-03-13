import "react";
// import {useState} from "react";

const AddTask = ({alerttaxt}) => {
  return (
    <div
      onClick={alerttaxt}
      className="px-8 py-3 bg-asasy font-bold  h-fit w-fit text-xl text-black border-2 rounded-lg cursor-pointer shadow-lg hover:drop-shadow-md transition">
      Add Task
    </div>
  );
};

export default AddTask;
