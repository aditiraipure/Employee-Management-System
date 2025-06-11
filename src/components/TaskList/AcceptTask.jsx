import React from 'react'

const AcceptTask = ({ data }) => {
  console.log()
  
  return (
    <div className=" flex-shrink-0 h-full w-[300px] bg-orange-400 rounded-xl">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 text-sm  px-5 py-1 ml-3 mt-2 rounded">
          {data.category}
        </h3>
        <h4 className="text-sm pr-5">{data.date}</h4>
      </div>
      <div className="mt-5 ml-5">
        <h2 className=" text-2xl font-semibold"> {data.title}</h2>
        <p className="text-sm mt-2">{data.description}</p>

        <div className="flex justify-between mt-4 ">
          <button className="bg-green-500 py-1 px-2 text-sm">
            {" "}
            Mark as Completed
          </button>
          <button className="bg-red-500 py-1 px-2 mr-5 text-sm">Failed</button>
        </div>
      </div>
    </div>
  );
}

export default AcceptTask