const PerformanceAnalytics = ({ analytics }) => {
    return (
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4 text-white">Employee Performance</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {analytics.map((emp) => (
            <div key={emp.email} className="bg-gray-800 p-5 rounded-xl shadow-md text-white">
              <h3 className="text-xl font-semibold">{emp.name}</h3>
              <p className="text-sm text-gray-300 mb-2">{emp.email}</p>
              <p>Total Tasks: {emp.total}</p>
              <p>Completed: {emp.completed}</p>
              <p>Failed: {emp.failed}</p>
              <p>Accepted: {emp.active}</p>
              <p>New: {emp.newTask}</p>
              <p className="mt-2 font-bold">
                Completion Rate: {emp.completionRate}%
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  export default PerformanceAnalytics;
  