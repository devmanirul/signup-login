import { FaUser } from "react-icons/fa";
import { GoMail } from "react-icons/go";
import { HiLockClosed } from "react-icons/hi";

const SignupLogin = () => {
  return (
    <div className="max-w-2xl mx-auto flex flex-col justify-center items-center gap-6 py-16">
      {/* heading */}
      <div className="">
        <p className="underline text-blue-900 text-3xl font-bold">Sign Up</p>
      </div>
      {/* inputs */}
      <div className="flex flex-col gap-7">
        {/* users name */}
        <label className="flex items-center gap-5 shadow-lg border pl-5 pr-10 py-2 rounded-md">
          <FaUser className="h-8 w-8" />
          <input type="text" className="outline-none" placeholder="Username" />
        </label>
        {/* gmail */}
        <label className="flex items-center gap-5 shadow-lg border pl-5 pr-10 py-2 rounded-md">
          <GoMail className="h-8 w-8" />
          <input type="text" className="outline-none" placeholder="Email" />
        </label>
        <label className="flex items-center gap-5 shadow-lg border pl-5 pr-10 py-2 rounded-md">
          <HiLockClosed className="h-8 w-8" />

          <input type="password" className="outline-none" value="password" />
        </label>
      </div>
      {/* button */}
      <div className="flex flex-row gap-5">
        <button className="bg-blue-900 text-white rounded-full px-8 py-2">
          Sign Up
        </button>
        <button className="bg-gray-300 text-blue-900 font-medium rounded-full px-8 py-2">
          Login
        </button>
      </div>
    </div>
  );
};
export default SignupLogin;
