import React from "react";


const Header = (props) => {
  const logOutUser = () => {
    localStorage.removeItem("loggedInUser");
    props.changeUser(null);
  };

  return (
    <div className="flex items-end justify-between mt-5">
      <h1 className="text-2xl font-medium ">
        Wellcome <br />
        <span className="text-3xl font-semibold">
          {props.user?.firstName || "user"}
        </span>
      </h1>
    
      <button
        onClick={logOutUser}
        class=" bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md font-medium"
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
