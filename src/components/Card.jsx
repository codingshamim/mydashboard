import React from "react";

export default function Card({cardTitle}) {
  return (
    <div className="card text-center">
      <h1 className="text-2xl">100+</h1>
      <p className="text-[#7d7d7d]">{cardTitle}</p>
    </div>
  );
}
