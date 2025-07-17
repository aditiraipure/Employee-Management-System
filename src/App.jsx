// import { useContext, useEffect, useState } from "react";
// import Login from "./components/Auth/Login";
// import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
// import AdminDashboard from "./components/Dashboard/AdminDashboard";
// import { AuthContext } from "./context/AuthProvider";



// const App = () => {
//   const [user, setUser] = useState(null);
//   const [loggedInUserData ,setLoggedInUserData]= useState(null)
//   const [ userData, setUserData ] = useContext(AuthContext);  

//   const [tasks, setTasks] = useState([]);

//   useEffect(() => {
//     const loggedInUser = localStorage.getItem('loggedInUser')

//     if (loggedInUser) {
//       const userData = JSON.parse(loggedInUser);
//       setUser(userData.role);
//       setLoggedInUserData(userData.data);
//     }
//   }, []);

//   const updateTaskStatus = (taskId, newStatus) => {
//     setTasks((prevTasks) =>
//       prevTasks.map((task) =>
//         task.id === taskId ? { ...task, status: newStatus } : task
//       )
//     );
//   };

//   const handleLogin = (email, password) => {
//     if (email == "admin@me.com" && password == "1234") {
//       setUser('admin');
//       localStorage.setItem("loggedInUser", JSON.stringify({  role: "admin" }));
//     } else if (userData) {
//       const employee = userData.find(
//         (e) => email == e.email && e.password == password
//       );
//       if (employee) {
//         setUser('employee')
//         setLoggedInUserData(employee)
//         setTasks(employee.tasks || []);
//         localStorage.setItem("loggedInUser",JSON.stringify({ role: "employee", data: employee })
//         );
//       }
//     } else {
//       alert("Invalid credentials");
//     }
//     // Here you would typically set the user state based on the login response
//   };

//   const data = useContext(AuthContext);
//   console.log("Data from AuthContext:", data);

//   return (
//     <>
//       {!user ? <Login handleLogin={handleLogin}></Login> : ""}
//       {user === "admin" ? (
//         <AdminDashboard
//           changeUser={setUser}
//           userData={userData}
//           setUserData={setUserData}
//         />
//       ) : user == "employee" ? (
//         <EmployeeDashboard
//           changeUser={setUser}
//           data={loggedInUserData}
//           // setLoggedInUserData={setLoggedInUserData}
//           tasks={tasks}
//           updateTaskStatus={updateTaskStatus}
//         />
//       ) : null}
//     </>
//   );
// };
// export default App; 

import { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const [userData, setUserData] = useContext(AuthContext);
  const [tasks, setTasks] = useState([]);

  // 🟢 Normalize old format to use "status" field
  const normalizeTasks = (tasks) => {
    return tasks.map((task, index) => {
      const status =
        task.status ||
        (task.newTask && "new") ||
        (task.active && "accepted") ||
        (task.completed && "completed") ||
        (task.failed && "failed") ||
        "new";
  
      return {
        ...task,
        id: task.id || `${task.title}-${index}`, // generate unique ID if not exists
        status,
      };
    });
  };
  

  // 🟢 Task status update logic
  const updateTaskStatus = (taskId, newStatus) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
  };

  // 🟢 Count status types for UI
  const getTaskCounts = (tasks) => {
    let counts = { newTask: 0, active: 0, completed: 0, failed: 0 };
    tasks.forEach((task) => {
      switch (task.status) {
        case "new":
          counts.newTask++;
          break;
        case "accepted":
          counts.active++;
          break;
        case "completed":
          counts.completed++;
          break;
        case "failed":
          counts.failed++;
          break;
      }
    });
    return counts;
  };

  const taskCounts = getTaskCounts(tasks);

  // 🟢 Check for existing login
  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setLoggedInUserData(userData.data);
      if (userData.data?.tasks) {
        setTasks(normalizeTasks(userData.data.tasks));
      }
    }
  }, []);

  // 🟢 Login handling
  const handleLogin = (email, password) => {
    if (email === "admin@me.com" && password === "1234") {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (userData) {
      const employee = userData.find(
        (e) => e.email === email && e.password === password
      );
      if (employee) {
        setUser("employee");
        setLoggedInUserData(employee);
        const normalized = normalizeTasks(employee.tasks || []);
        setTasks(normalized);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee", data: employee })
        );
      } else {
        alert("Invalid credentials");
      }
    }
  };

  return (
    <>
      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : user === "admin" ? (
        <AdminDashboard
          changeUser={setUser}
          userData={userData}
          setUserData={setUserData}
        />
      ) : user === "employee" ? (
        <EmployeeDashboard
          changeUser={setUser}
          data={loggedInUserData}
          tasks={tasks}
          updateTaskStatus={updateTaskStatus}
          taskCounts={taskCounts}
        />
      ) : null}
    </>
  );
};

export default App;