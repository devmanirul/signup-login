import { GoMail } from "react-icons/go";
import { HiLockClosed } from "react-icons/hi";
import { Link } from "react-router-dom";

const LogIn = () => {
  return (
    <div className="max-w-xl mx-auto flex flex-col justify-center items-center gap-6 py-10 bg-gray-400 my-10">
      {/* heading */}
      <div className="">
        <p className="underline text-blue-900 text-3xl font-bold">Log In</p>
      </div>
      {/* inputs */}
      <div className="flex flex-col gap-7">
        {/* gmail */}
        <label className="flex items-center gap-5 shadow-lg border pl-5 p-5 py-2 rounded-md">
          <GoMail className="h-8 w-8" />
          <input
            type="text"
            className="outline-none  rounded-md pr-10 pl-5 py-2 bg-gray-300 text-white"
            placeholder="Email id"
          />
        </label>
        <label className="flex items-center gap-5 shadow-lg border pl-5 pr-5 py-2 rounded-md">
          <HiLockClosed className="h-8 w-8" />

          <input
            type="password"
            placeholder="Password"
            className="outline-none  rounded-md pr-10 pl-5 py-2 bg-gray-300 text-white"
          />
        </label>
        <div className="flex flex-col justify-center gap-2 items-center">
          <span className="text-blue-800 font-medium ">
            Already have an account.
          </span>
          <div className="flex flex-row justify-center gap-2 items-center">
            <p className="">Forget/Lost password ?</p>
            <span className="text-blue-800 font-medium cursor-pointer">click here!</span>
          </div>
        </div>
      </div>
      {/* button */}
      <div className="flex flex-row gap-5">
        <button className="bg-gray-300 text-blue-900 font-medium rounded-full px-8 py-2 cursor-pointer">
          <Link to="/">Sign Up</Link>
        </button>
        <button className="bg-blue-900 text-white rounded-full px-8 py-2 cursor-pointer">
          <Link to="">Log In</Link>
        </button>
      </div>
    </div>
  );
};
export default LogIn;
