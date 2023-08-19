import React from 'react'
// import { useHistory } from 'react-router-dom';
import Avatar from "../Assets/avatar.svg"
// import EditProfile from "../Pages/EditProfile"



const UserSettings = () => {


    // const history = useHistory();

    // const handleEditProfile = () => {
    //     history.push('/edit-profile'); 
    //   };



  return (
   
    < >
        <div className='bg-gray-300 h-screen pt-8'>
            <h1 className='pl-14 text-xl font-bold'>Dashboard</h1>
            <p className='pl-14 text-xs' >Dashboard  Folajimi's Profile</p>

            <div className='flex h-5/6 w-11/12 bg-white ml-14 mt-4 border-2 shadow-md'>

            
                    <div className='w-72'>
                    <img src={Avatar} alt="" className='h-28 ml-4 mt-4' />
                    </div>

                    <div className='flex-grow'>


                        <div className='h-36 border-b border-r'>
                        <div className='pt-2'> <button  className='bg-blue-500 rounded-2xl text-white text-xs absolute right-20 p-2'>Edit Profile</button></div>
                            <h1 className='text-xl font-bold pt-1'>Folajomi Bello</h1>
                            <p className='text-xs'>Student Id: 14G00855TT</p>
                            <p className='text-xs'>Students <button className='bg-teal-500 text-white rounded-xl p-1'>FULL TIME COURSE</button></p>
                            
                            <div className='pt-10'>
                                <p>About</p>
                            </div>
                            
                        </div>

                       <div className=''>

                       </div>
                    </div>
                    


            </div>
        </div>
    
    
    </>
  )
}

export default UserSettings