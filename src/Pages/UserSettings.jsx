import React from "react";
import Avatar from "../Assets/avatar.svg";
import { Link } from 'react-router-dom';
import { useUserContext } from "../Pages/UserContext";
import Sidebar from "../Components/DashboardComponents/Sidebar";

const UserSettings = () => {
  const { userInfo } = useUserContext();

  return (
    <div className="flex">
      <div>
        {/* Sidebar */}
        <Sidebar />
      </div>

      <div className='bg-gray-300 pt-8 w-full'>
        {/* Header */}
        <h1 className='pl-14 text-xl font-bold'>Dashboard</h1>
        <p className='pl-14 text-xs'>Dashboard {userInfo.firstName}'s Profile</p>

        {/* User Profile */}
        <div className='flex h-5/6 bg-white ml-14 mt-4 border-2 shadow-md'>
          <div className='w-72'>
            <img src={Avatar} alt="" className='h-28 ml-4 mt-4' />
          </div>
          <div className=''>
            <div className='h-36'>
              <div className='pt-2'>
                <Link to="/editprofile">
                  <button className='bg-blue-500 rounded-2xl text-white text-xs absolute right-20 p-2'>Edit Profile</button>
                </Link>
              </div>
              <h1 className='text-xl font-bold pt-1'>{userInfo.firstName} {userInfo.lastName}</h1>
              <p className='text-xs'>Student Id: {userInfo.studentId}</p>
              <p className='text-xs'>Students <button className='bg-teal-500 text-white rounded-xl p-1'>FULL TIME COURSE</button></p>
              <div className='pt-10'>
                <p>About</p>
              </div>
            </div>
            <div className='grid grid-cols-3'>
              <div className='h-80'>
                <p className="pt-2 font-bold">Personal Information</p>
                <div className="pt-3">
                  <p> First Name <br /> <span className="font-bold">{userInfo.firstName}</span></p>
                  <p className="pt-2"> User Name <br /> <span className="font-bold">{userInfo.userName}</span></p>
                  <p className="pt-2"> Email <br /> <span className="font-bold">{userInfo.email}</span> </p>
                </div>
              </div>
              <div className='h-80'>
                <div className="pt-10">
                  <p> Other Name <br /> <span className="font-bold">{userInfo.otherNames}</span> </p>
                  <p className="pt-2"> Phone No <br /> <span className="font-bold"> {userInfo.phone}</span> </p>
                </div>
              </div>
              <div className='h-80'>
                <div className="pt-10">
                  <p> Last Name <br /> <span className="font-bold">{userInfo.lastName}</span>  </p>
                  <p className="pt-2">Gender <br /> <span className="font-bold">{userInfo.gender}</span>  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserSettings;

