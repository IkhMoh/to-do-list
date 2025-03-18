import "react";
import { useRef } from "react";

const InputTaxt = ({ alerttax, exit, Supmit }) => {
  const inputref = useRef();

  return (
    <>
      <div
        className={
          exit
            ? "hidden"
            : "z-50 fixed  h-screen w-screen bg-[#4e4e4e5a] flex justify-center "
        }
        >
        <div className="bg-white  h-3/9 md:w-2/4  lg:w-2/4 flex mt-32 rounded-md justify-center ">
          <div className="w-full">
            <input
              type="text"
              className="block   h-8 w-11/12 mt-12 mx-auto border-2"
              ref={inputref}
            />
            <div className=" flex justify-end mt-16 mr-2  md:mr-4 ">
              <button
                onClick={alerttax}
                className="py-1.5 px-9 bg-[var(--gray)] text-[var(--text)] border-2 font-bold rounded-md hover:shadow-md mx-2"
              >
                Exit
              </button>
              <button
                onClick={() => {
                  alerttax();
                  Supmit(inputref.current.value);
                  inputref.current.value = "";
                }}
                className="py-2 px-9 bg-[var(--asasy)] text-white font-bold rounded-md hover:shadow-md"
              >
                Supmit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InputTaxt;
