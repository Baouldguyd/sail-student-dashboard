import React from "react";
import Tab from "./Tab";


const TaskContent = () => {

  return (
    <div className=" w-[80%] p-8"
    style={{backgroundColor : "#F4F7FE" }}>
      <h2 className="text-2xl font-bold">Tasks</h2>
      <Tab/>
    </div>
  );
};

export default TaskContent;
