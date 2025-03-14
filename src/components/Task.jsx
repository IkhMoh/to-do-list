import { MdCheckBoxOutlineBlank, MdCheckBox, MdDelete } from "react-icons/md";
import { FiEdit3 } from "react-icons/fi";

const Task = ({ year, time, taxt, checkbox, Checkboxset, key }) => {
  return (
    <div className="bg-withe shadow-lg mx-7 my-5 h-16  rounded-lg flex justify-between ">
      <div className="flex ml-2 space-x-2">
        <span className="mt-3.5 ">
          {checkbox ? (
            <MdCheckBox
              onClick={() => {Checkboxset(key);}}
              className="w-9 h-9 text-asasy cursor-pointer hover:drop-shadow transition"
            />
          ) : (
            <MdCheckBoxOutlineBlank
              onClick={() => {Checkboxset(key);}}
              className="w-9 h-9 text-gray cursor-pointer hover:drop-shadow transition"
            />
          )}
        </span>
        <div className="mt-2">
          <h2>
            <span>👉 </span>
            <span className={checkbox ? "line-through " : ""}>
              {taxt}
              <span>👀</span>
            </span>
          </h2>
          <h5>
            <span>{time}</span> ,<span>{year}</span>
          </h5>
        </div>
      </div>
      <div className="flex mr-4 mt-4 space-x-4">
        <span>
          <FiEdit3 className="w-8 h-8 text-text bg-graylite p-1.5 rounded cursor-pointer hover:drop-shadow transition" />
        </span>
        <span>
          <MdDelete className="w-8 h-8 text-text bg-graylite p-1 rounded cursor-pointer hover:drop-shadow transition" />
        </span>
      </div>
    </div>
  );
};

export default Task;
