
import { FaClipboardList, FaCheckCircle, FaTimesCircle, FaPlayCircle } from "react-icons/fa";

const TaskNumber = ({ data = {} }) => {
  const cardClass = "rounded-xl w-full py-6 px-6 bg-gradient-to-br text-white shadow-md hover:shadow-xl transition-all duration-300";

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-5">
      <div className={`${cardClass} from-red-500 to-pink-500`}>
        <div className="flex items-center gap-4">
          <FaClipboardList className="text-4xl" />
          <div>
            <h2 className="text-3xl font-bold">{data.taskNumbers.newTask}</h2>
            <h3 className="text-xl font-medium">New Task</h3>
          </div>
        </div>
      </div>

      <div className={`${cardClass} from-green-500 to-emerald-500`}>
        <div className="flex items-center gap-4">
          <FaPlayCircle className="text-4xl" />
          <div>
            <h2 className="text-3xl font-bold">{data.taskNumbers.active}</h2>
            <h3 className="text-xl font-medium">Accepted</h3>
          </div>
        </div>
      </div>

      <div className={`${cardClass} from-blue-500 to-indigo-500`}>
        <div className="flex items-center gap-4">
          <FaCheckCircle className="text-4xl" />
          <div>
            <h2 className="text-3xl font-bold">{data.taskNumbers.completed}</h2>
            <h3 className="text-xl font-medium">Completed</h3>
          </div>
        </div>
      </div>

      <div className={`${cardClass} from-yellow-400 to-orange-500`}>
        <div className="flex items-center gap-4">
          <FaTimesCircle className="text-4xl" />
          <div>
            <h2 className="text-3xl font-bold">{data.taskNumbers.failed}</h2>
            <h3 className="text-xl font-medium">Failed</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskNumber;

