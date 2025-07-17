
import Header from '../other/Header'
import CreateTask from '../other/CreateTask';
import AllTask from '../other/AllTask';
import React from "react";



const AdminDashboard = ( props) => {
  return (
    <div className="p-10 h-screen" >
      <h1 className="text-5xl font-extrabold mb-8 text-center text-gradient bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg">
        Admin Panel
      </h1>
      <Header changeUser={props.changeUser} />
      <br />
      <CreateTask />
      <AllTask />
    </div>
  );
}

export default AdminDashboard