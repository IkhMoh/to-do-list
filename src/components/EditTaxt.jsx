// import "react";
// import { useRef } from "react";

// const EditTaxt = ({ taskvalue }) => {
//   const inputref = useRef();
//   console.log(taskvalue);
//   return (
//     <>
//       <div
//         className={
//           taskvalue.isEdit
//             ? "hidden"
//             : "z-50 fixed  h-screen w-screen bg-[#4e4e4e5a] flex justify-center "
//         }
//       >
//         <div className="bg-white  h-3/9 w-1/3 flex mt-32 rounded-md justify-center ">
//           <div className="">
//             <input
//               type="text"
//               className="block h-8 w-96 mt-12  border-2"
//               ref={inputref}
//             />
//             <div className=" flex justify-end mt-16 ">
//               <button
//                 onClick={() => {
//                   // Edit(inputref.current.value);
//                   // inputref.current.value = "";
//                 }}
//                 className="py-2 px-9 bg-black text-white font-bold rounded-md hover:shadow-md"
//               >
//                 Edit
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default EditTaxt;
