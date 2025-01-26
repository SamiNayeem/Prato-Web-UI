import React from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";

const LoginPage: React.FC = () => {
  return (
    <div className="font-sans">
      <div className="relative min-h-screen flex flex-col sm:justify-center items-center bg-[#FFF4D9]">
        <div className="relative sm:max-w-sm w-full">
          <div className="card bg-[#53b1b1] shadow-lg w-full h-full rounded-3xl absolute transform -rotate-6"></div>
          <div className="card bg-orange-500 shadow-lg w-full h-full rounded-3xl absolute transform rotate-6"></div>
          <div className="relative w-full rounded-3xl px-6 py-4 bg-gray-100 shadow-md">
            <label
              htmlFor="login"
              className="block mt-3 text-sm text-gray-700 text-center font-semibold"
            >
              Login
            </label>
            <form method="post" action="#" className="mt-10">
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                  required
                />
              </div>

              <div className="mt-7">
                <input
                  type="password"
                  placeholder="Password"
                  className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                  required
                />
              </div>

              <div className="mt-7 flex">
                <label
                  htmlFor="remember_me"
                  className="inline-flex items-center w-full cursor-pointer"
                >
                  <input
                    id="remember_me"
                    type="checkbox"
                    className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                  <span className="ml-2 text-sm text-gray-600">
                    Remember me
                  </span>
                </label>

                <div className="w-full text-right">
                  <a
                    className="underline text-sm text-gray-600 hover:text-gray-900"
                    href="#"
                  >
                    Forgot your password?
                  </a>
                </div>
              </div>

              <div className="mt-7">
                <button
                  type="submit"
                  className="bg-orange-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105"
                >
                  Login
                </button>
              </div>

              <div className="flex mt-7 items-center text-center">
                <hr className="border-gray-300 border-1 w-full rounded-md" />
                <label className="block font-medium text-sm text-gray-600 w-full">
                  Or login with
                </label>
                <hr className="border-gray-300 border-1 w-full rounded-md" />
              </div>

              <div className="flex mt-7 justify-center w-full">
                <button
                  type="button"
                  className="flex items-center mr-5 bg-blue-700 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105"
                >
                  <FaFacebook className="mr-2" size={20} />
                  Facebook
                </button>

                <button
                  type="button"
                  className="flex items-center bg-[#4285F4] border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105"
                >
                  <FaGoogle className="mr-2" size={20} />
                  Google
                </button>
              </div>

              <div className="mt-7">
                <div className="flex justify-center items-center">
                  <label className="mr-2">New here?</label>
                  <a
                    href="#"
                    className="text-blue-500 transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105"
                  >
                    Create an account
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
