"use client";
import React, { useState } from "react";

const page = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [mainTask, setMainTask] = useState([]);
  const submitHandler = (e) => {
    e.preventDefault();
    setMainTask([...mainTask, { title, desc }]);
    settitle("");
    setdesc ("");
    console.log(mainTask);
  }
  
  const deleteHandler = (i) => {
    let copytask = [...mainTask]
    copytask.splice(i,1)
    setMainTask(copytask)
  };

  let renderTask = <h2>No Task Available</h2>;

  if(mainTask.length > 0){
    renderTask = mainTask.map((t, i) => {
      return (
        <li key={i} className="flex items-center justify-between mb-8">
          <div className="flex items-center justify-between w-2/3">
            <h5 className="text-2x1 font-semibold">{t.title}</h5>
            <h6 className="text-lg font-medium" >{t.desc}</h6>
          </div>
          <button
          onClick={()=>{
            deleteHandler (i)
          }}
          className=" bg-red-600 text-white px-4 py-2 rounded font-bold">
            Delete
          </button>
        </li>
      );
    });
  }
  return(
    <>
      <h1 className=" bg-black text-white p-5 text-5xl font-bold text-center">
        Write your Notes
      </h1>
      <form onSubmit={submitHandler} className="flex justify-between">
        <input
          type="text"
          className="text-2xl border-zinc-800 border-4 m-8 px-4 py-2"
          placeholder="Enter Title here"
          value={title}
          onChange={ (e) => {
            settitle(e.target.value);
          }}
        />
        <input
          type="text"
          className="w-6/12 text-2xl border-zinc-800 border-4 m-8 px-4 py-2"
          placeholder="Enter Description here"
          value={desc}
          onChange={ (e) => {
            setdesc(e.target.value);
          }}
        />
        <button className="bg-black text-white px-4 text-2xl font-bold rounded m-5">
        Add Task
        </button>
      </form>
      <hr/>
      < div className="p-5 bg-slate-200">
        <ul> {renderTask}</ul>
      </div>
    </>
  );
};

export default page;