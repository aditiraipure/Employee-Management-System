import React from 'react';

const statusStyles = {
  new: "bg-blue-100 text-blue-800",
  accepted: "bg-yellow-100 text-yellow-800",
  completed: "bg-green-100 text-green-800",
  failed: "bg-red-100 text-red-800",
  
};

const AcceptTask = ({ data, updateTaskStatus }) => {
  const handleAccept = () => updateTaskStatus(data.id, "accepted");
  const handleComplete = () => updateTaskStatus(data.id, "completed");
  const handleFail = () => updateTaskStatus(data.id, "failed");

  return (
    <div className="flex-shrink-0 h-full w-[340px] bg-gradient-to-br from-orange-300 to-orange-500 shadow-xl rounded-2xl p-5 transition-all duration-300 hover:scale-105">
      <div className="flex justify-between items-center mb-2">
        <h3 className="bg-red-600 text-white text-xs px-4 py-1 rounded-full shadow">{data.category}</h3>
        <h4 className="text-white text-xs font-medium bg-black/30 px-2 py-1 rounded">{data.date}</h4>
      </div>
      <div className="mt-3">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">{data.title}</h2>
        <p className="text-sm text-gray-800 mb-4">{data.description}</p>
        <div className="flex items-center gap-3 mt-2">
          {data.status === "new" && (
            <button
              onClick={handleAccept}
              className="bg-blue-600 text-white text-sm px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition"
            >
              Accept
            </button>
          )}
          {data.status === "accepted" && (
            <>
              <button
                onClick={handleComplete}
                className="bg-green-600 text-white text-sm px-4 py-2 rounded-lg shadow hover:bg-green-700 transition"
              >
                Mark as Completed
              </button>
              <button
                onClick={handleFail}
                className="bg-red-600 text-white text-sm px-4 py-2 rounded-lg shadow hover:bg-red-700 transition"
              >
                Failed
              </button>
            </>
          )}
          {data.status === "completed" && (
            <span className="flex items-center gap-2 bg-green-600 text-white text-sm px-4 py-2 rounded-lg shadow">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              Task Completed
            </span>
          )}
          {data.status === "failed" && (
            <span className="flex items-center gap-2 bg-red-500 text-white text-sm px-4 py-2 rounded-lg shadow">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
              Task Failed
            </span>
          )}
        </div>
        <div className={`mt-4 text-xs px-3 py-1 rounded-full font-semibold inline-block ${statusStyles[data.status]}`}>
          Status: {data.status.charAt(0).toUpperCase() + data.status.slice(1)}
        </div>
      </div>
    </div>
  );
};

export default AcceptTask;


