// import React from 'react'
import "../../App.css";
import { useNavigate } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";

export default function Homepage() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/search");
  };
  return (
    <div className="linear-bg w-full h-screen text-white flex flex-col gap-10 font-bold p-2">
      <div className="font-black text-slate-300 text-6xl lg:text-8xl font-sans flex justify-center pt-24 lg:pt-36">
        AI Trip Planner
      </div>
      <div className="text-paraColor flex justify-center items-center text-2xl">
        From sunrise to sunset, let your dreams take flight,
        <br /> We’ll plan every detail, making your journey just right
      </div>
      <button
        onClick={handleClick}
        className="flex gap-2 bg-btnColor text-black w-32 m-auto px-4 py-2 rounded-lg"
      >
        Lets Plan
        <MdArrowOutward className="inline mt-1" />
      </button>
    </div>
  );
}
