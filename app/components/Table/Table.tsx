import React from "react";

const Table = () => {
  return (
    <div className="Header w-96 flex flex-col p-8 bg-gray-500 rounded-3xl shadow-lg shadow-slate-500/50">
      <div className="Row w-80 flex justify-between items-center bg-slate-400 p-4 text-xl font-semibold rounded-xl text-slate-300">
        <h1>Name</h1>
        <h1>Grade</h1>
        <h1>Score</h1>
      </div>
      <div className="cursor-pointer hover:bg-cyan-500/75 Row w-80 flex justify-between items-center p-4 text-xl font-light text-white rounded-xl">
        <h1>Kimhab</h1>
        <h1>E1</h1>
        <h1>168</h1>
      </div>
      <div className="cursor-pointer hover:bg-cyan-500/75 Row w-80 flex justify-between items-center p-4 text-xl font-light text-white rounded-xl">
        <h1>Kimhab</h1>
        <h1>E1</h1>
        <h1>168</h1>
      </div>
      <div className="cursor-pointer hover:bg-cyan-500/75 bg-slate-400/25 Row w-80 flex justify-between items-center p-4 text-xl font-light text-white rounded-xl">
        <h1>Kimhab</h1>
        <h1>E1</h1>
        <h1>168</h1>
      </div>
      <div className="cursor-pointer hover:bg-cyan-500/75 Row w-80 flex justify-between items-center p-4 text-xl font-light text-white rounded-xl">
        <h1>Kimhab</h1>
        <h1>E1</h1>
        <h1>168</h1>
      </div>
    </div>
  );
};

export default Table;
