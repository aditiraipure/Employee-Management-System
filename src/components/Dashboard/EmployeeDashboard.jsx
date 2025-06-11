import React from "react";
import Header from "../other/Header";
import TaskNumber from "../other/TaskNumber";
import TaskList from "../TaskList/TaskList";


const EmployeeDashboard = (props) => {
  return (
    <div className="p-10 bg-[#1c1c1c] h-screen">
      <h1 className="font-bold flex justify-center text-5xl mt-7">
        Employee panel
      </h1>
      <Header changeUser={props.changeUser} user={props.data} />
      
      <TaskNumber data={props.data} />
      <TaskList data={props.data} />
    </div>
  );
};

export default EmployeeDashboard;

