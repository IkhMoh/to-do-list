import { MdCheckBoxOutlineBlank, MdCheckBox, MdDelete } from "react-icons/md";
import { FiEdit3 } from "react-icons/fi";
import { Emoji } from "../contexts/changeEmoji";
import { useContext } from "react";
import { Handles } from "../contexts/handles";
const Task = ({ task }) => {
  const { emoji } = useContext(Emoji);
  const {
    shawuId,
    handleAlertEdit,
    handleDeletTaskClick,
    handleCheckboxClick,
  } = useContext(Handles);
  return (
    <div className="bg-[var(--withe)]  shadow-lg mx-7 my-5 h-18  rounded-lg flex justify-between ">
      <div className="flex ml-2 space-x-2  w-11/12  whitespace-nowrap overflow-hidden ">
        <span className="mt-3.5 ">
          {task.checkbox ? (
            <MdCheckBox
              onClick={() => handleCheckboxClick(task.id)}
              className="w-8 h-8 md:w-9 md:h-9 text-[var(--asasy)] cursor-pointer hover:drop-shadow transition"
            />
          ) : (
            <MdCheckBoxOutlineBlank
              onClick={() => handleCheckboxClick(task.id)}
              className="w-8 h-8 md:w-9 md:h-9 text-[var(--gray)] cursor-pointer hover:drop-shadow transition"
            />
          )}
        </span>
        <div className="mt-1.5 sm:mt-2 space-y-2 sm:space-y-0.5 ">
          <h2 className="text-sm sm:text-lg   max-h-10">
            <span>{emoji.first} </span>
            <span className={task.checkbox ? "line-through  " : "  "}>
              {task.texttsak}
            </span>{" "}
            <span> {emoji.second}</span>
          </h2>
          <h5 className="text-sm sm:text-lg ">
            <span>{task.time}</span> <span>{task.year}</span>
          </h5>
        </div>
      </div>
      <div className="flex md:mr-4 mt-4 sm:space-x-1 md:space-x-4">
        <span>
          <FiEdit3
            onClick={() => {
              handleAlertEdit(), shawuId(task.id);
            }}
            className="w-7 h-7 md:w-8 md:h-8 text-[var(--text)] bg-[var(--graylite)] mr-2 sm:mr-0 p-1 sm:p-1.5 rounded cursor-pointer hover:drop-shadow transition"
          />
        </span>
        <span>
          <MdDelete
            onClick={() => handleDeletTaskClick(task.id)}
            className="w-7 h-7 md:w-8 md:h-8 text-[var(--text)] bg-[var(--graylite)] mr-2 md:mr-0 p-1 sm:p-1 rounded cursor-pointer hover:drop-shadow transition"
          />
        </span>
      </div>
    </div>
  );
};

export default Task;
