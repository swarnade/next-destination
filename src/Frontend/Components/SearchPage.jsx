// import React from 'react'
import "../../App.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
      <form onSubmit={handleSubmit}>
        <input
          className="w-2/4 p-2 pl-5 bg-gray-500 text-gray-100 font-bold text-lg ml-80 mt-40 rounded-lg"
          type="text"
          onChange={handleChange}
          value={input}
          placeholder="Explore Your Next Destination"
        />
        <button
          type="submit"
          className="bg-gray-500 p-2 font-bold text-white cursor-pointer rounded-lg ml-3"
        >
          Search
        </button>
      </form>
    </div>
  );
}
