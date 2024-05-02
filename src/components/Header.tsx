import React from "react";
import { SiGooglekeep } from "react-icons/si";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex flex-row justify-between items-center p-4 border-b mx-6">
      <div className="flex gap-1 items-center font-bold text-xl ">
        <SiGooglekeep className="text-yellow-400 text-2xl" />
        <Link to={"/"} ><h1 className="text-base">Keeper - QuadB</h1></Link>
      </div>

      <nav className="flex gap-2 mr-4">
        <Link to={"/"}>Home</Link>
        <Link to={"/register"}>Register</Link>
      </nav>
    </header>
  );
};

export default Header;
