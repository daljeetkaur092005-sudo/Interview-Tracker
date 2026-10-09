import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div
      className="
      min-h-screen
      w-[250px]
      bg-[#0B0D10]
      text-white
      flex
      flex-col
      gap-3
      p-6
      border-r
      border-[#252A31]
    "
    >
      <h1
        className="
        text-xl
        font-semibold
        mb-6
        pb-5
        border-b
        border-[#252A31]
      "
      >
        Interview
        <span className="text-[#C9B458]"> Tracker</span>
      </h1>

      <NavLink
        to={""}
        className={({ isActive }) =>
          isActive
            ? "bg-[#C9B458] text-black px-4 py-3 rounded-xl"
            : "text-[#9CA2AB] px-4 py-3 rounded-xl hover:bg-[#171A1F] hover:text-white"
        }
      >
        Home
      </NavLink>

      <NavLink
        to={"/detail"}
        className={({ isActive }) =>
          isActive
            ? "bg-[#C9B458] text-black px-4 py-3 rounded-xl"
            : "text-[#9CA2AB] px-4 py-3 rounded-xl hover:bg-[#171A1F] hover:text-white"
        }
      >
        Detail
      </NavLink>

      <NavLink
        to={"/progress"}
        className={({ isActive }) =>
          isActive
            ? "bg-[#C9B458] text-black px-4 py-3 rounded-xl"
            : "text-[#9CA2AB] px-4 py-3 rounded-xl hover:bg-[#171A1F] hover:text-white"
        }
      >
        Progress
      </NavLink>

      <NavLink
        to={"/question"}
        className={({ isActive }) =>
          isActive
            ? "bg-[#C9B458] text-black px-4 py-3 rounded-xl"
            : "text-[#9CA2AB] px-4 py-3 rounded-xl hover:bg-[#171A1F] hover:text-white"
        }
      >
        Question
      </NavLink>
    </div>
  );
};

export default Navbar;
