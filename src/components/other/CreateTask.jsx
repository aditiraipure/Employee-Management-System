import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import React, { useState } from "react";

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext);
  const updateUser = (newData) => {
    setUserData(newData);
    localStorage.setItem("employees", JSON.stringify(newData));
  };

  const [taskTitle, setTaskTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    const task = {
      taskTitle,
      description,
      date,
      assignTo,
      category,
      active: true,
      newTask: true,
      completed: false,
      failed: false,
    };

    if (!taskTitle || !description || !date || !assignTo || !category) {
      alert("Please fill all fields");
      return;
    }

    const updatedUserData = [...userData];

    updatedUserData.forEach((elem) => {
      if (assignTo === elem.firstName) {
        if (!elem.tasks) elem.tasks = [];
        elem.tasks.push(task);

        if (!elem.taskNumbers) elem.taskNumbers = { newTask: 0 };
        elem.taskNumbers.newTask = (elem.taskNumbers.newTask || 0) + 1;
      }
    });

    updateUser(updatedUserData);

    setTaskTitle("");
    setDescription("");
    setDate("");
    setAssignTo("");
    setCategory("");

    alert("Task created successfully!");
  };

  return (
    <div className="p-8 bg-gradient-to-br from-[#232526] via-[#1c1c1c] to-[#0f2027] rounded-xl  border border-gray-700 shadow-lg w-full max-w-3xl mx-auto ">
      <form
        onSubmit={submitHandler}
        className="flex flex-wrap w-full gap-8 items-start justify-between"
      >
        <div className="w-full md:w-1/2">
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-emerald-400 mb-2 flex items-center gap-2">
              <span role="img" aria-label="note">📝</span> Create Task
            </h2>
            <p className="text-gray-400 text-sm">Assign a new task to your team member.</p>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-300 mb-1" htmlFor="taskTitle">
              Task Title
            </label>
            <input
              id="taskTitle"
              name="taskTitle"
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              className="text-base py-2 px-3 w-full rounded-lg outline-none bg-[#232526] border border-emerald-400 focus:ring-2 focus:ring-emerald-500 transition"
              type="text"
              placeholder="UI Design"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-300 mb-1" htmlFor="date">
              Date
            </label>
            <input
              id="date"
              name="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="text-base py-2 px-3 w-full rounded-lg outline-none bg-[#232526] border border-emerald-400 focus:ring-2 focus:ring-emerald-500 transition"
              type="date"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-300 mb-1" htmlFor="assignTo">
              Assign To
            </label>
            <input
              id="assignTo"
              name="assignTo"
              value={assignTo}
              onChange={(e) => setAssignTo(e.target.value)}
              className="text-base py-2 px-3 w-full rounded-lg outline-none bg-[#232526] border border-emerald-400 focus:ring-2 focus:ring-emerald-500 transition"
              type="text"
              placeholder="Employee name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-300 mb-1" htmlFor="category">
              Category
            </label>
            <input
              id="category"
              name="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="text-base py-2 px-3 w-full rounded-lg outline-none bg-[#232526] border border-emerald-400 focus:ring-2 focus:ring-emerald-500 transition"
              type="text"
              placeholder="Design, Dev, etc"
            />
          </div>
        </div>
        <div className="w-full md:w-2/5 flex flex-col items-start">
          <label className="block text-sm font-medium text-gray-300 mb-1" htmlFor="description">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full h-44 text-base py-3 px-4 rounded-lg outline-none bg-[#232526] border border-emerald-400 focus:ring-2 focus:ring-emerald-500 transition resize-none mb-6"
            placeholder="Describe the task details here..."
          ></textarea>
          <button
            className="bg-emerald-500 py-3 px-6 rounded-lg text-lg font-semibold text-white shadow-md hover:bg-emerald-600 transition-colors duration-300 flex items-center gap-2"
            type="submit"
          >
            <span role="img" aria-label="rocket">🚀</span> Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
