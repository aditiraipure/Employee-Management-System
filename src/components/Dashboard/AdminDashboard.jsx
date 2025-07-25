
import Header from '../other/Header';
import CreateTask from '../other/CreateTask';
import AllTask from '../other/AllTask';
import React from "react";

const AdminDashboard = (props) => {
  return (
    <div className="p-4 sm:p-6 md:p-10 min-h-screen flex flex-col items-center ">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 sm:mb-8 text-center text-gradient bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg">
        Admin Panel
      </h1>
      <div className="w-full max-w-4xl flex flex-col gap-4">
        <Header changeUser={props.changeUser} />
        <CreateTask />
        <AllTask />
      </div>
    </div>
  );
}

export default AdminDashboard;
