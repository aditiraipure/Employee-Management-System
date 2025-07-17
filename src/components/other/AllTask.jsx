import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const statusColors = {
  newTask: "bg-blue-100 text-blue-700",
  active: "bg-yellow-100 text-yellow-700",
  completed: "bg-green-100 text-green-700",
  failed: "bg-red-100 text-red-700",
};

const AllTask = () => {
  const [userData] = useContext(AuthContext);

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 p-8 rounded-xl mt-8 shadow-lg h-80">
      <div className="bg-gradient-to-r from-emerald-500 to-purple-500 mb-4 py-3 px-6 flex justify-between rounded-lg shadow">
        <h2 className="text-lg font-semibold text-white w-1/5">Employee Name</h2>
        <h3 className="text-lg font-semibold text-white w-1/5 text-center">New Task</h3>
        <h4 className="text-lg font-semibold text-white w-1/5 text-center">Active Task</h4>
        <h4 className="text-lg font-semibold text-white w-1/5 text-center">Completed</h4>
        <h4 className="text-lg font-semibold text-white w-1/5 text-center">Failed</h4>
      </div>

      <div className="h-[80%] overflow-auto scrollbar-thin scrollbar-thumb-emerald-500 scrollbar-track-gray-800">
        {userData.map((elem, idx) => (
          <div
            key={idx}
            className="border border-gray-700 rounded-lg mb-3 py-3 px-6 flex justify-between items-center bg-gray-800 hover:bg-gray-700 transition"
          >
            <h2 className="text-base font-medium w-1/5 text-white">{elem.firstName}</h2>
            <h3 className={`text-base font-medium w-1/5 text-center rounded py-1 px-2 `}>
              {elem.taskNumbers.newTask}
            </h3>
            <h4 className={`text-base font-medium w-1/5 text-center rounded py-1 px-2 `}>
              {elem.taskNumbers.active}
            </h4>
            <h4 className={`text-base font-medium w-1/5 text-center rounded py-1 px-2`}>
              {elem.taskNumbers.completed}
            </h4>
            <h4 className={`text-base font-medium w-1/5 text-center rounded py-1 px-2 `}>
              {elem.taskNumbers.failed}
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTask;
