import React from "react";
import { useState, useEffect } from "react";
import Avatar from "../Assets/avatar.svg";
import Sidebar from "../Components/DashboardComponents/Sidebar";
import axios from "axios";


const UserSettings = () => {

  const [userProfile, setUserProfile] = useState(null); // State to hold user profile data

  const token = sessionStorage.getItem('token')

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get("https://ssmp-api.onrender.com/api/v1/user/getUserProfileInfo", {
          headers: {
            Authorization: `Bearer ${token}`, // Assuming userInfo contains the token
            "Content-Type": "application/json",
          },
        });

        setUserProfile(response.data.data);
        console.log(response.data.data); // Set user profile data in state
      } catch (error) {
        console.error("An error occurred while fetching user profile:", error);
      }
    };

    fetchUserProfile();
  }, [token]);


  return (
    <div className="flex">
      <div>
        {/* Sidebar */}
        <Sidebar />
      </div>

      <div className='bg-gray-300 pt-8 w-full'>
        {/* Header */}
        <h1 className='pl-14 text-xl font-bold'>Dashboard</h1>
        <p className='pl-14 text-xs'> {userProfile?.firstName}'s Profile</p>

        {/* User Profile */}
        <div className='flex h-5/6 bg-white ml-14 mt-4 border-2 shadow-md'>
        <div className='w-72'>
          <img src={Avatar} alt="" className='h-28 ml-4 mt-4' />
        </div>
        <div className=''>
          <div className='h-36'>
          
            <h1 className='text-xl font-bold pt-1'>{userProfile?.firstName} {userProfile?.lastName}</h1>
            

            <div className='grid grid-cols-3'>
              <div className='h-80'>
                <p className="pt-2 font-bold">Personal Information</p>
                <div className="pt-3">
                  <p> First Name <br /> <span className="font-bold">{userProfile?.firstName}</span></p>
                  <p className="pt-2"> User Name <br /> <span className="font-bold">{userProfile?.userName}</span></p>
                  <p className="pt-2"> Email <br /> <span className="font-bold">{userProfile?.email}</span> </p>
                </div>
              </div>

              <div className='h-80'>
                <div className="pt-10">
                 <p> Last Name <br /> <span className="font-bold">{userProfile?.lastName}</span>  </p>
                  <p className="pt-2"> Phone No <br /> <span className="font-bold"> {userProfile?.phoneNumber}</span> </p>
                </div>
              </div>


              <div className='h-80'>
                <div className="pt-10">
                <p> Home Address <br /> <span className="font-bold">{userProfile?.homeAddress}</span> </p>
                  <p className="pt-2">Programme <br /> <span className="font-bold">{userProfile?.programme}</span>  </p>
                  <p className="pt-2">Gender <br /> <span className="font-bold">{userProfile?.sex}</span>  </p>
                </div>
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

