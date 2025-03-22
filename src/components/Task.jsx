import { MdCheckBoxOutlineBlank, MdCheckBox, MdDelete } from "react-icons/md";
import { FiEdit3 } from "react-icons/fi";

const Task = ({ task, Checkboxset, delettask, alertEdit, bb }) => {
  return (
    <div className="bg-[var(--withe)]  shadow-lg mx-7 my-5 h-16  rounded-lg flex justify-between ">
      <div className="flex ml-2 space-x-2  w-11/12  whitespace-nowrap overflow-hidden ">
        <span className="mt-3.5 ">
          {task.checkbox ? (
            <MdCheckBox
              onClick={() => Checkboxset(task.id)}
              className="w-8 h-8 md:w-9 md:h-9 text-[var(--asasy)] cursor-pointer hover:drop-shadow transition"
            />
          ) : (
            <MdCheckBoxOutlineBlank
              onClick={() => Checkboxset(task.id)}
              className="w-8 h-8 md:w-9 md:h-9 text-[var(--gray)] cursor-pointer hover:drop-shadow transition"
            />
          )}
        </span>
        <div className="mt-1.5 sm:mt-2 space-y-2 sm:space-y-0.5 ">
          <h2 className="text-sm sm:text-lg   max-h-10">
            <span>👉 </span>
            <span className={task.checkbox ? "line-through  " : "  "}>
              {task.texttsak}
            </span>{" "}
            <span> 👀</span>
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
              alertEdit(), bb(task.id);
            }}
            className="w-7 h-7 md:w-8 md:h-8 text-[var(--text)] bg-[var(--graylite)] p-0.5 sm:p-1.5 rounded cursor-pointer hover:drop-shadow transition"
          />
        </span>
        <span>
          <MdDelete
            onClick={() => delettask(task.id)}
            className="w-7 h-7 md:w-8 md:h-8 text-[var(--text)] bg-[var(--graylite)] p-0.5 sm:p-1 rounded cursor-pointer hover:drop-shadow transition"
          />
        </span>
      </div>
    </div>
  );
};

export default Task;
