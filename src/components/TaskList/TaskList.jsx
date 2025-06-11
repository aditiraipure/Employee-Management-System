import React from 'react'
import AcceptTask from './AcceptTask';
import NewTask from './NewTask';
import CompleteTask from './CompleteTask';
import FailedTask from './FailedTask';

const TaskList = ({data}) => {
  return (
    <div
      id="tasklist"
      className="h-[45%] overflow-x-auto flex items-center justify-start gap-7  w-full py-5  mt-10"
    >

      {data.tasks.map((elem, idx) => {
          {
           data?.tasks?.length === 0 && (
          <p className="text-gray-400">No tasks available</p>
        );
}
        if (elem.newTask) {
          return <NewTask key={idx} data={elem}></NewTask>;
        }
        if (elem.active) {
          return <AcceptTask key={idx} data={elem}></AcceptTask>
        }
        
        if (elem.completed) {
          return <CompleteTask key={idx} data={elem}></CompleteTask>;
        }
        if (elem.failed) {
          return <FailedTask key={idx} data={elem}></FailedTask>;
        }
        
        
      })}
      
    </div>
  );
}

export default TaskList