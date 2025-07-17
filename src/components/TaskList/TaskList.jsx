import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskList = ({ data, updateTaskStatus }) => {
  const tasks = data.tasks;

  return (
    <div
    className="grid grid-cols-2 md:grid-cols-4 gap-7 mt-10">
      {!tasks || tasks.length === 0 ? (
        <p className="text-gray-400">No tasks available</p>
      ) : (
        tasks.map((elem) => {
          switch (elem.status) {
            case "new":
              return (
                <NewTask
                  key={elem.id}
                  data={elem}
                  updateTaskStatus={updateTaskStatus}
                />
              );
            case "accepted":
              return (
                <AcceptTask
                  key={elem.id}
                  data={elem}
                  updateTaskStatus={updateTaskStatus}
                />
              );
            case "completed":
              return <CompleteTask key={elem.id} data={elem} />;
            case "failed":
              return <FailedTask key={elem.id} data={elem} />;
            default:
              return null;
          }
        })
      )}
    </div>
  );
};

export default TaskList;
 