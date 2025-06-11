import React, { useState } from "react";

const Login = ({handleLogin}) => {
  console.log(handleLogin);
  // State to hold email and password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Function to handle form submission

  const submitHandler = (e) => {
    e.preventDefault();
    // Here you can handle the login logic, e.g., call an API or validate credentials
    handleLogin(email, password);
    console.log("Email is", email);
    console.log("password is is", password);

    setEmail("");
    setPassword("");
  };

  return (
    // <div className="flex h-screen w-screen items-center justify-center ">
    //   <div className="border-2 rounded-xl border-emerald-600 p-20 ">
    //     <form
    //       onSubmit={(e) => {
    //         submitHandler(e);
    //       }}
    //       className="flex flex-col items-center justify-center"
    //     >
    //       <input
    //         value={email}
    //         onChange={(e) => {
    //           setEmail(e.target.value);
    //         }}
    // required
    //         className=" text-white outline-none bg-transparent  border-2 border-emerald-600  py-3 px-5 rounded-full placeholder:grey-400"
    //         type="email"
    //         placeholder=" Enter your Email"
    //       ></input>
    //       <input
    // value={password}
    // onChange={(e) => {
    //   setPassword(e.target.value);
    // }}
    // required
    //         className=" text-white outline-none bg-transparent  border-2 border-emerald-600  mt-3 py-3 px-5 rounded-full placeholder:text-grey-400"
    //         type="password"
    //         placeholder=" Enter Password"
    //       ></input>
    //       <button className="  mt-5 text-white  border-none outline-none   bg-emerald-600  mt-3 py-3 px-5 rounded-full placeholder:text-white">
    //         Log in
    //       </button>
    //     </form>
    //   </div>
    // </div>

    <div
      className="bg-cover bg-center min-h-screen bg-gray-900 flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1470&q=80')",
      }}
    >
      <div className=" w-full max-w-md  bg-[#1c1c1c] p-8 rounded-lg shadow-md border-2 rounded-xl  p-20">
        <h2 className="text-2xl font-bold text-white mb-6">Welcome back</h2>

        {/* Social Login Buttons */}
        <div className="flex gap-5 mb-6">
          <button className="w-1/2 flex items-center justify-center border border-gray-600 text-white py-2 px-4   rounded-lg hover:bg-gray-700">
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              className="h-5 w-5 mr-2"
              alt="Google"
            />
            Log in with Google
          </button>
          <button className="w-1/2 flex items-center justify-center border border-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700">
            <img
              src="https://www.svgrepo.com/show/303128/apple-logo.svg"
              className="h-5 w-5 mr-2 invert"
              alt="Apple"
            />
            Log in with Apple
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center mb-6">
          <hr className="flex-grow border-gray-600" />
          <span className="text-gray-400 mx-4 text-sm">or</span>
          <hr className="flex-grow border-gray-600" />
        </div>

        {/* Form */}
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          {/* Email Input */}
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-white mb-1"
              htmlFor="email"
            >
              Email
            </label>
            <input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-white mb-1"
              htmlFor="password"
            >
              Password
            </label>
            <input
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
              id="password"
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Options Row */}
          <div className="flex items-center justify-between mb-6">
            <label className="flex items-center text-sm text-gray-300">
              <input type="checkbox" className="mr-2 accent-blue-600" />
              Remember me
            </label>
            <a href="#" className="text-sm text-blue-500 hover:underline">
              Forgot password?
            </a>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium"
          >
            Sign in to your account
          </button>

          {/* Footer Text */}
          <p className="mt-6 text-center text-sm text-gray-400">
            Don’t have an account yet?{" "}
            <a href="#" className="text-blue-500 hover:underline">
              Sign up here
            </a>
          </p>
        </form>
      </div>
    </div>
  );
 };

export default Login;
