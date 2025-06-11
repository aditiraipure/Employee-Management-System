import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";


const AllTask = () => {

  const [userData , setUserData] = useContext(AuthContext)

  return (
    <div className="bg-[1c1c1c] p-5 rounded mt-5 h-60 ">
      <div className="bg-red-400 mb-2 py-2 px-4 flex justify-between">
        <h2 className="text-lg font-medium w-1/5 ">Employee Name</h2>
        <h3 className=" text-lg font-medium w-1/5 ">New Task</h3>
        <h4 className="text-lg font-medium w-1/5 ">Active Task</h4>
        <h4 className="text-lg font-medium w-1/5 ">completed</h4>
        <h4 className="text-lg font-medium w-1/5 ">Failed</h4>
      </div>

      <div className="h-[80%] overflow-auto">
        {userData.map(function (elem, idx) {
          return (
            <div
              key={idx}
              className=" text-lg font-medium border-2 border-emerald-500 mb-2 py-2 px-4 flex justify-between"
            >
              <h2 className=" text-lg font-medium w-1/5 bg-White-600">
                {elem.firstName}
              </h2>
              <h3 className=" text-lg font-medium w-1/5 text-blue-600">
                {elem.taskNumbers.newTask}
              </h3>
              <h4 className=" text-lg font-medium w-1/5 text-yellow-400">
                {elem.taskNumbers.active}
              </h4>
              <h4 className=" text-lg font-medium w-1/5 text-white-500">
                {elem.taskNumbers.completed}
              </h4>
              <h4 className="text-lg font-medium w-1/5 text-red-600">
                {elem.taskNumbers.failed}
              </h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTask;
