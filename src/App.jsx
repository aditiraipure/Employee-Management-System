import { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";



const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData ,setLoggedInUserData]= useState(null)
  const [ userData, setUserData ] = useContext(AuthContext);  

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser')

    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setLoggedInUserData(userData.data);
    }
  }, []);





  const handleLogin = (email, password) => {
    if (email == "admin@me.com" && password == "1234") {
      setUser('admin');
      localStorage.setItem("loggedInUser", JSON.stringify({  role: "admin" }));
    } else if (userData) {
      const employee = userData.find(
        (e) => email == e.email && e.password == password
      );
      if (employee) {
        setUser('employee')
        setLoggedInUserData(employee)
        localStorage.setItem("loggedInUser",JSON.stringify({ role: "employee", data: employee })
        );
      }
    } else {
      alert("Invalid credentials");
    }
    // Here you would typically set the user state based on the login response
  };

  const data = useContext(AuthContext);
  console.log("Data from AuthContext:", data);

  return (
    <>
      {!user ? <Login handleLogin={handleLogin}></Login> : ""}
      {user === "admin" ? (
        <AdminDashboard
          changeUser={setUser}
          userData={userData}
          setUserData={setUserData}
        />
      ) : user == "employee" ? (
        <EmployeeDashboard
          changeUser={setUser}
          data={loggedInUserData}
          // setLoggedInUserData={setLoggedInUserData}
        />
      ) : null}
    </>
  );
};
export default App;
