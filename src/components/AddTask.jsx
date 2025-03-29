import "react";
import { useContext } from "react";
import { Handles } from "../contexts/handles";
const AddTask = () => {
  const { handleAlertTaxt } = useContext(Handles);
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
