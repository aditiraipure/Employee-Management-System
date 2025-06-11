import React from 'react'

const CompleteTask = ({ data }) => {
  console.log();
  return (
    <div className=" flex-shrink-0 h-full w-[300px] bg-purple-400 rounded-xl">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 text-sm  px-5 py-1 ml-3 mt-2 rounded">
          {data.category}
        </h3>
        <h4 className="text-sm pr-5">{data.date}</h4>
      </div>
      <div className="mt-5 ml-5">
        <h2 className=" text-2xl font-semibold"> {data.title}</h2>
        <p className="text-sm mt-2">{data.description}</p>
      </div>
      <div className="mt-5">
        <button className=" flex justify-center items-center ml-10 w-[70%] bg-green-400">
          Completed
        </button>
      </div>
    </div>
  );
}

export default CompleteTask