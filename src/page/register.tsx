/* eslint-disable react-hooks/rules-of-hooks */
import { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../Redux/slice/UserSlice";
import { useNavigate } from "react-router-dom";

const register = () => {
  
  const [formData, setFormData] = useState({
    name: "",
    password: ""
  })
  const dispath = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    })
  };

  const handleManual = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispath(addUser(formData))
    navigate("/")
  };

  return (
    <main className="sm:max-w-[500px] w-[85%] flex flex-col shadow-[-1px_4px_16px_0px_#718096] rounded-lg border p-5 gap-3 justify-center items-center m-auto mt-14 mb-28">
      <div className="w-full flex justify-center flex-col m-auto items-center">
        <h1 className="text-black font-bold portrait:text-center text-xl sm:text-3xl">
          Welcome!
        </h1>
        <p className="text-xs sm:text-sm portrait:text-center tracking-wider">
          {" "}
          Welcome Back! Please enter your details
        </p>
      </div>

      <form
        onSubmit={handleManual}
        className="w-full flex justify-center items-center m-auto flex-col gap-6"
      >
        <div className="w-[79%]">
          <p className="text-gray-950">Name</p>
          <input
            type="Name"
            className="p-[10px] w-[100%] text-sm rounded border-gray-700 border-[1px]"
            required
            placeholder="Name"
            id="name"
            onChange={handleChange}
          />
        </div>
        <div className="w-[79%]">
          <p className="text-gray-950">Password</p>
          <input
            type="password"
            className="p-[10px] w-[100%] text-sm border-gray-700 rounded border-[1px]"
            required
            placeholder="password"
            id="password"
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          className="bg-gray-700 text-white font-semibold p-[10px]  w-[80%] sm:w-[80%]  rounded-md  duration-300 ease-in-out hover:scale-105"
        >
          Register
        </button>
      </form>
    </main>
  );
};

export default register;
