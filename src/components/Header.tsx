import React from "react";
import { SiGooglekeep } from "react-icons/si";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { UserStates } from "../Redux/Store";
import { removeUser } from "../Redux/slice/UserSlice";

const Header = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state: UserStates) => state.user )
  
  const handleLog = () => {
    dispatch(removeUser());
    navigate("/")
    console.log("logout");
  }

  return (
    <header className="flex flex-row justify-between items-center p-4 border-b mx-6">
      <div className="flex gap-1 items-center font-bold text-xl ">
        <SiGooglekeep className="text-yellow-400 text-lg sm:text-2xl" />
        <Link to={"/"} ><h1 className="text-sm sm:text-base">QuadB</h1></Link>
      </div>

      <nav className="flex text-xs sm:text-sm gap-2 mr-4">
        <Link to={"/"} className="hover:underline p-1">Home</Link>
        {
          user?.name ? <button className="hover:underline p-1" onClick={handleLog}>logout</button> :  <Link className="hover:underline p-1" to={"/register"}>Register</Link>
        }
      </nav>
    </header>
  );
};

export default Header;
