import React from "react";
import {
  AiOutlineSlack,
  AiOutlineBook,
  AiOutlineCarryOut,
  AiOutlineSnippets,
  AiOutlineDashboard,
  AiOutlineExport,
  AiFillSetting
} from "react-icons/ai";
import { RiDashboardFill } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";


const Sidebar = () => {
  
  const location = useLocation(); // Get the current location of nav items

  const Navs = [
    { title: "Dashboard", icon: <RiDashboardFill />, path:'/dashboard' },
    { title: "Course Content", icon: <AiOutlineBook />, path:'/coursecontent' },
    { title: "Attendance", icon: <AiOutlineCarryOut />, path: '/attendance' },
    { title: "Task", icon: <AiOutlineSnippets />, path: '/task' },
    { title: "Program Duration", icon: <AiOutlineDashboard />, path:'/programduration' },
    { title: "Settings", icon: <AiFillSetting/>, path:'/settings', spacing: true},
    { title: "Logout", icon: <AiOutlineExport />, path:'/signin' },
  ];

  return (
    <div className=" flex w-[20%]">
      <div className="bg-inherit h-screen p-5 pt-8">
        <div className=" inline-flex">
          <AiOutlineSlack className="bg-blue-500 text-white text-4xl rounded cursor-pointer block" />
          <h1 className="text-blue-500 origin-left font-bold text-2xl ml-2">
            Student
          </h1>
        </div>

        <ul className="pt-6">
          {Navs.map((nav, index) => (
            <>
              <li
                key={index}
                className={`text-gray-300 flex items-center gap-x-4 cursor-pointer p-2 hover:bg-blue-500 rounded-md ${
                  nav.spacing ? "mt-9" : "mt-2"
                } mt-2 ${nav.path === location.pathname ? "bg-blue-600" : ""}`}
              >
                <Link to={nav.path}>
                <span className="text-2xl block float-left">{nav.icon}</span>
                </Link>
                <Link to={nav.path}>
                <span className="text-sm font-bold flex-1">
                  {nav.title}
                </span>
                </Link>
              </li>
            </>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
