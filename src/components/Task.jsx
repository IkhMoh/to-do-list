import { MdCheckBoxOutlineBlank, MdCheckBox, MdDelete } from "react-icons/md";
import { FiEdit3 } from "react-icons/fi";

const Task = ({ task, Checkboxset, delettask, Edit }) => {
  return (
    <div className="bg-[var(--withe)]  shadow-lg mx-7 my-5 h-16  rounded-lg flex justify-between ">
      <div className="flex ml-2 space-x-2">
        <span className="mt-3.5 ">
          {task.checkbox ? (
            <MdCheckBox 
              onClick={() => Checkboxset(task.id)}
              className="w-9 h-9 text-[var(--asasy)] cursor-pointer hover:drop-shadow transition"
            />
          ) : (
            <MdCheckBoxOutlineBlank
              onClick={() => Checkboxset(task.id)}
              className="w-9 h-9 text-[var(--gray)] cursor-pointer hover:drop-shadow transition"
            />
          )}
        </span>
        <div className="mt-2">
          <h2>
            <span>👉 </span>
            <span className={task.checkbox ? "line-through " : ""}>
              {task.texttsak}
              <span> 👀</span>
            </span>
          </h2>
          <h5>
            <span>{task.time}</span>  <span>{task.year}</span>
          </h5>
        </div>
      </div>
      <div className="flex mr-4 mt-4 space-x-4">
        <span>
          <FiEdit3
            onClick={() => Edit(task.id)}
            className="w-8 h-8 text-[var(--text)] bg-[var(--graylite)] p-1.5 rounded cursor-pointer hover:drop-shadow transition"
          />
        </span>
        <span>
          <MdDelete
            onClick={() => delettask(task.id)}
            className="w-8 h-8 text-[var(--text)] bg-[var(--graylite)] p-1 rounded cursor-pointer hover:drop-shadow transition"
          />
        </span>
      </div>
    </div>
  );
};

export default Task;
