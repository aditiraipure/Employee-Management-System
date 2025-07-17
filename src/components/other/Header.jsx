import React from "react";

const Header = (props) => {
  const logOutUser = () => {
    localStorage.removeItem("loggedInUser");
    props.changeUser(null);
  };

  return (
    <div className="flex items-center justify-between mt-2 px-8 py-6 shadow-lg">
      <div>
        <h1 className="text-3xl font-bold text-white drop-shadow-lg">
          Welcome,
        </h1>
        <span className="text-4xl font-extrabold text-yellow-300 drop-shadow-lg">
          {props.user?.firstName || "User"}
        </span>
      </div>
      <button
        onClick={logOutUser}
        className="bg-white text-red-600 hover:bg-red-600 hover:text-white transition-colors duration-200 px-6 py-3 rounded-lg font-semibold shadow-md border-2 border-red-500"
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
