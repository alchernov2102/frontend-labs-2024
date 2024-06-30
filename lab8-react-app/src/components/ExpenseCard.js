import React from "react";
import DateTag from "./DateTag";
import PriceTag from "./PriceTag";


export default function ExpenseCard({ Date, Title, Amount }) {
  return (
    <div className="w-auto h-[7rem] rounded-lg bg-[#4b4b4b] p-4 flex flex-row justify-between items-center my-4">
      <DateTag Date={Date} />
      <div className="flex-1 flex-row justify-start px-5"><p className="text-lg font-bold text-white">{Title}</p></div>
      <PriceTag Amount={Amount} />
    </div>
  );
}
