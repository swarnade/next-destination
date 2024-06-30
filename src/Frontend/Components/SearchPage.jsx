// import React from 'react'
import "../../App.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoMdSearch } from "react-icons/io";

export default function SearchPage() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = () => {
    // trim the string input and replace the spaces with plus sign
    let temp = input;
    setInput(temp.trim().replace(" ", "+"));
    navigate(`/place/${input}`);
  };
  return (
    <div className="linear-bg w-full h-screen">
      <form
        onSubmit={handleSubmit}
        className="flex justify-center items-center gap-4 md:items-end flex-col md:flex-row"
      >
        <input
          className="w-4/5 md:w-2/4 p-2 pl-5 bg-gray-500 text-gray-100 font-bold text-lg mt-40 rounded-lg"
          type="text"
          onChange={handleChange}
          value={input}
          placeholder="Search Your Favorite place"
        />
        <button
          type="submit"
          className="flex bg-gray-500 px-4 py-2 font-bold text-white cursor-pointer rounded-lg ml-3"
        >
          Search
          <IoMdSearch className="inline mt-1" />
        </button>
      </form>
    </div>
  );
}
