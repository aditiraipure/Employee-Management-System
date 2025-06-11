
import Header from '../other/Header'
import CreateTask from '../other/CreateTask';
import AllTask from '../other/AllTask';
import React from "react";


const AdminDashboard = ( props) => {
  return (
    <div className="   h-screen w-3/4 p-7 w-full ">
      <h1 className=" justify-center text-4xl font-bold mb-6 ">Admin Panel</h1>

      <Header changeUser={props.changeUser} ></Header>
      <br></br>
      <CreateTask  />
      <AllTask></AllTask>
    </div>
  );
}

export default AdminDashboard