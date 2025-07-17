import React from 'react'

const CompleteTask = ({ data }) => {

  const statusStyles = {
    new: "bg-blue-100 text-blue-800",
    accepted: "bg-yellow-100 text-yellow-800",
    completed: "bg-green-100 text-green-800",
    failed: "bg-red-100 text-red-800",
  };
  
  return (
    <div className="flex-shrink-0 h-full w-[320px] bg-gradient-to-br  from-pink-500 via-red-500 to-red-300 rounded-2xl shadow-lg p-5 transition-transform hover:scale-105">
      <div className="flex justify-between items-center mb-4">
        <span className="bg-red-600 text-white text-xs  px-4 py-1 rounded-full shadow">
          {data.category}
        </span>
        <span className="text-white text-xs font-medium bg-black/30 px-2 py-1 rounded">
          {data.date}
        </span>
      </div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-white mb-2">{data.title}</h2>
        <p className="text-sm text-purple-100">{data.description}</p>
      </div>
      <div className="flex justify-center items-center">
        <button
          className="bg-gradient-to-r from-green-500 to-green-700 text-white text-sm px-5 py-2 rounded-full font-semibold shadow cursor-not-allowed flex items-center gap-2"
          disabled
        >
          <svg
            className="w-4 h-4 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
          Task Completed
        </button>
      </div>
      <div className={`mt-4 text-xs px-3 py-1 rounded-full font-semibold inline-block ${statusStyles[data.status]}`}>
          Status: {data.status.charAt(0).toUpperCase() + data.status.slice(1)}
        </div>
    </div>
  );
};

export default CompleteTask;