import React from 'react'

const NewTask = ({ data }) => {
  console.log()
  return (
    <div className=" flex-shrink-0 h-full w-[300px] bg-pink-400 rounded-xl">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 text-sm  px-5 py-1 ml-3 mt-2 rounded">
          {data.category}
        </h3>
        <h4 className="text-sm pr-5">{data.date}</h4>
      </div>
      <div className="mt-5 ml-5">
        <h2 className=" text-2xl font-semibold"> {data.title}</h2>
        <p className="text-sm mt-2">{data.description}</p>
        <div className=" mt-4 ">
          <button className="bg-blue-600 py-1 px-2 text-sm">Accept Task </button>
        </div>
      </div>
    </div>
  );
};

export default NewTask;