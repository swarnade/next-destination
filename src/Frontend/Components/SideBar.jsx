import React, { useState } from "react";
import Iternary from "./Iternary";
import { ImSpinner9 } from "react-icons/im";

export default function SideBar() {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [budget, setBudget] = useState("");
  const [loading, setLoading] = useState(false);

  const handleCheckInChange = (e) => {
    setCheckIn(e.target.value);
  };

  const handleCheckOutChange = (e) => {
    setCheckOut(e.target.value);
  };

  const handleBudgetChange = (e) => {
    setBudget(e.target.value);
  };

  return (
    <div className=" max-w-md border-r-2 border-gray-500 pl-5 pr-8 pt-1 mt-10 ml-12 mb-5 min-h-80 max-h-96  overflow-y-auto">
      <div>
        <input
          className="bg-transparent border mr-4 p-1 pl-5 "
          placeholder="check-in"
          type="date"
          name=""
          id=""
          value={checkIn}
          onChange={handleCheckInChange}
        />
        <input
          className="bg-transparent border p-1 pl-5 "
          placeholder="check-out"
          type="date"
          name=""
          id=""
          value={checkOut}
          onChange={handleCheckOutChange}
        />
      </div>
      <div>
        <input
          className="bg-transparent border p-3 pl-5 mt-4"
          placeholder="your budget"
          type="number"
          name=""
          id=""
          value={budget}
          onChange={handleBudgetChange}
        />
      </div>
      <button
        className="bg-btnColor text-black font-bold w-auto m-auto p-3 rounded-lg mt-4"
        onClick={() => setLoading(true)}
      >
        {loading ? <ImSpinner9 /> : "Plan my Tour"}
      </button>

      {/* api response */}
      <div className="mt-5">
        <Iternary
          checkIn={checkIn}
          checkOut={checkOut}
          budget={budget}
          loading={loading}
          setLoading={setLoading}
        />
      </div>
    </div>
  );
}
