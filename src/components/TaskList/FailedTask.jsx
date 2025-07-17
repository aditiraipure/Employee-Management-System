import React from 'react';

const FailedTask = ({ data, updateTaskStatus }) => {
  
  const handleFail = () => updateTaskStatus(data.id, "failed");

  const statusStyles = {
    new: "bg-blue-100 text-blue-800",
    accepted: "bg-yellow-100 text-yellow-800",
    completed: "bg-green-100 text-green-800",
    failed: "bg-red-100 text-red-800",
  };

  return (
    <div className="flex-shrink-0 h-full w-[320px] bg-gradient-to-br from-red-400 to-red-600 rounded-2xl shadow-lg p-4 transition-transform hover:scale-105">
      <div className="flex justify-between items-center mb-2">
        <span className="bg-red-700 text-white text-xs px-4 py-1 rounded-full shadow">
          {data.category}
        </span>
        <span className="text-xs text-red-100 font-medium">{data.date}</span>
      </div>
      <div className="mt-4">
        <h2 className="text-2xl font-bold text-white drop-shadow">{data.title}</h2>
        <p className="text-sm text-red-100 mt-2">{data.description}</p>
      </div>
      <div className="mt-6 flex justify-center items-center">
        <button
          onClick={handleFail}
          className="bg-red-800 text-white text-large px-4 py-1 rounded-full shadow cursor-not-allowed opacity-80"
        >
          Failed
        </button>
      </div>
      <div className={`mt-4 text-xs px-3 py-1 rounded-full font-semibold inline-block ${statusStyles[data.status]}`}>
          Status: {data.status.charAt(0).toUpperCase() + data.status.slice(1)}
        </div>
    </div>
  );
};

export default FailedTask;