import React from "react";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export default function DateTag({ Date }) {
  return (
    <div
      className="w-20 h-20 bg-[#2a2a2a] flex flex-col text-white items-center 
    justify-center border rounded-lg border-white"
    >
      <p className="font-bold">{months[Date.getMonth() - 1]}</p>
      <p className="text-xs">{Date.getFullYear()}</p>
      <p className="font-bold text-2xl">{Date.getDate()}</p>
    </div>
  );
}
