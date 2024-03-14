import React from "react";
import { Link, NavLink } from "react-router-dom";

const HeaderView = () => {
  return (
    <header className="p-4 bg-black flex justify-between">
      <h1>
        <Link to={"/"} className="text-yellow-500 font-bold text-2xl">
          Forum Dev
        </Link>
      </h1>

      <nav className="text-white flex gap-4 items-center">
        <NavLink to={"/"}>Posts</NavLink>
        <NavLink to={"/create"}>Create post</NavLink>
      </nav>
    </header>
  );
};

export default HeaderView;
