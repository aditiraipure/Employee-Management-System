import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import React, { useState } from "react";

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext);
  const updateUser = (newData) => {
    setUserData(newData); // Update the userData state with the new data
    localStorage.setItem("employees", JSON.stringify(newData)); // Update localStorage
  };

  const [taskTitle, setTaskTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    // build the new task object
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

    // clone userData to avoid direct mutation
    const updatedUserData = [...userData];

    updatedUserData.forEach((elem) => {
      if (assignTo === elem.firstName) {
        if (!elem.tasks) elem.tasks = [];
        elem.tasks.push(task);

        if (!elem.taskNumbers) elem.taskNumbers = { newTask: 0 };
        elem.taskNumbers.newTask = (elem.taskNumbers.newTask || 0) + 1;
      }
    });

    updateUser(updatedUserData); // <-- update state here

    // clear form fields
    setTaskTitle("");
    setDescription("");
    setDate("");
    setAssignTo("");
    setCategory("");

    alert("Task created successfully!");
  };

  return (
    <div className=" p-5  bg-[#1c1c1c] rounded border w-full">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex  flex-wrap w-full items-start justify-between "
      >
        <div className="w-1/2">
          <div className="p-1 rounded-xl w-full max-w-md ">
            <h2 className="text-xl font-semibold mb-4">📝 Create Task</h2>
          </div>

          <div>
            <h3 className="text-sm text-gray-300 mb-o.5"> Task Title</h3>
            <input
              name="taskTitle"
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-[#1c1c1c]  border-[1px] border-gray-400 mb-4 "
              type="text"
              placeholder="UI=design"
            />
          </div>

          <div>
            <h3 className="text-sm text-gray-300 mb-o.5">Date</h3>
            <input
              name="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-[#1c1c1c]  border-[1px] border-gray-400 mb-4 "
              type="date"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-o.5">Assign to</h3>
            <input
              name="assignTo"
              value={assignTo}
              onChange={(e) => setAssignTo(e.target.value)}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-[#1c1c1c] border-[1px] border-gray-400 mb-4 "
              type="text"
              placeholder="Employee name"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-o.5">catagory</h3>
            <input
              name="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none border-[1px]  bg-[#1c1c1c]  border-gray-400 mb-4 "
              type="text"
              placeholder="design , dev, etc"
            />
          </div>
        </div>
        <div className=" w-2/5 flex flex-col items-start ">
          <h3 className="text-sm text-gray-300 mb-o.5">Description</h3>
          <textarea
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-[#1c1c1c]  border-[1px] border-gray-200"
          ></textarea>
          <button className=" bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded-md text-medium mt-4 text-white font-semibold transition-colors duration-300 flex justify-center item-center">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
