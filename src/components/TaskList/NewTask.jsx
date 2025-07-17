
import React from 'react';

const NewTask = ({ data, updateTaskStatus }) => {
  const handleAccept = () => updateTaskStatus(data.id, "accepted");

  return (
    <div className="flex-shrink-0 h-full w-[320px] bg-gradient-to-br from-pink-400 via-fuchsia-400 to-purple-400 shadow-xl rounded-2xl p-5 transition-transform hover:scale-105">
      <div className="flex justify-between items-center mb-2">
        <h3 className="bg-red-600 text-white text-xs px-4 py-1 rounded-full shadow">
          {data.category}
        </h3>
        <span className="text-white text-xs font-medium bg-black/30 px-2 py-1 rounded">
          {data.date}
        </span>
      </div>
      <div className="mt-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">{data.title}</h2>
        <p className="text-sm text-gray-800 mb-4">{data.description}</p>
        <div className="mt-6 flex justify-center items-center">
          <button
            onClick={handleAccept}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm px-5 py-2 rounded-full shadow-lg hover:from-blue-700 hover:to-indigo-700 transition-colors font-semibold"
          >
            Accept Task
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default NewTask;
