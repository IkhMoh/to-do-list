import React from "react";
import { MdKeyboardBackspace } from "react-icons/md";
import { Link } from "react-router-dom";
import { ChangeEmoji } from "../contexts/changeEmoji";
import { useContext } from "react";
const Settings = () => {
  const { emoji, setEmoji, newEmoji, setNewEmoji } = useContext(ChangeEmoji);

  function handleSaveClick() {
    setEmoji({
      first: newEmoji.first,
      second: newEmoji.second,
      yas: newEmoji.yas,
      no: newEmoji.no,
    });
  }
  return (
    <div>
      <div>
        <h1 className="font-bold grid text-5xl md:text-6xl relative text-[var(--text)]">
          <Link
            className="drop-shadow-lg justify-self-start h-14 w-14 ml-6 mt-5  text-gray-500 hover:bg-[#dfdfdf] transition rounded-full"
            to="/"
          >
            <MdKeyboardBackspace />
          </Link>
          <span className="justify-self-center mt-3 absolute ">Settings</span>
        </h1>
      </div>

      <div className="w-7/7 mt-12 sm:w-4/7 md:w-4/7  h-96  mx-auto  rounded-lg  bg-[var(--graylite)]  drop-shadow">
        <div className="h-80">
          <div className="h-1/5 m-3 flex items-center font-bold space-x-44 ">
            <span className="flex-1">Replace : {emoji.first} </span>
            <span className="bg-gray-300 px-2 py-0.5 rounded-md">with</span>
            <input
              title="Press ' Win + . '  for emoji 😊"
              onChange={(e) => setNewEmoji({ ...emoji, first: e.target.value })}
              value={newEmoji.first}
              type="text"
              className="flex-1 border-2 border-black"
            />
          </div>
          <div className="h-1/5 m-3 flex items-center font-bold space-x-44">
            {" "}
            <span className="flex-1">Replace : {emoji.second} </span>
            <span className="bg-gray-300 px-2 py-0.5 rounded-md">with</span>
            <input
              title="Press ' Win + . '  for emoji 😊"
              onChange={(e) =>
                setNewEmoji({ ...emoji, second: e.target.value })
              }
              value={newEmoji.second}
              type="text"
              className="flex-1 border-2 border-black"
            />
          </div>
          <div className="h-1/5 m-3 flex items-center font-bold space-x-44">
            {" "}
            <span className="flex-1">Replace : {emoji.yas} </span>
            <span className="bg-gray-300 px-2 py-0.5 rounded-md">with</span>
            <input
              title="Press ' Win + . '  for emoji 😊"
              onChange={(e) => setNewEmoji({ ...emoji, yas: e.target.value })}
              value={newEmoji.yas}
              type="text"
              className="flex-1 border-2 border-black"
            />
          </div>
          <div className="h-1/5 m-3 flex items-center font-bold space-x-44">
            <span className="flex-1">Replace : {emoji.no} </span>
            <span className="bg-gray-300 px-2 py-0.5 rounded-md">with</span>
            <input
              title="Press ' Win + . '  for emoji 😊"
              onChange={(e) => setNewEmoji({ ...emoji, no: e.target.value })}
              value={newEmoji.no}
              type="text"
              className="flex-1 border-2 border-black"
            />
          </div>
          <div className=" h-1/5 flex justify-between m-3 ">
            <div className="mt-8 text-gray-400">Press ' Win + . ' for emoji 😊 </div>

            <div className=" flex justify-end mt-6    ">
              <Link to="/">
                <button className="py-1.5 h-fit  px-9 bg-[var(--gray)] text-[var(--text)] border-2 font-bold rounded-md hover:shadow-md mx-2">
                  Exit
                </button>
              </Link>
              <Link to="/">
                <button
                  onClick={handleSaveClick}
                  className="py-2 h-fit px-9 bg-[var(--asasy)] text-white font-bold rounded-md hover:shadow-md"
                >
                  Save
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
