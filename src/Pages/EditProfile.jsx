import React, { useState } from 'react';
import { useUserContext } from '../Pages/UserContext';
import { Link } from 'react-router-dom';

// a use state is created here
const EditProfile = () => {
  const [firstName, setFirstName] = useState('');
  const [otherNames, setOtherNames] = useState('');
  const [lastName, setLastName] = useState('');
  const [userName, setuserName] = useState('');
  const [email, setemail] = useState('');
  const [gender, setgender] = useState('');
  const [phone, setPhone] = useState('');

  const { userInfo, setUserInfo } = useUserContext();

  // linking the user info from usersetting page to the edit page to ensure that the changes made on the edit page is updated on the user info page
  const handleSave = () => {
    setUserInfo({
      ...userInfo,
      firstName: firstName,
      otherNames: otherNames,
      lastName: lastName,
      userName: userName,
      email: email,
      phone: phone,
      gender: gender,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSave(); // Call handleSave when the form is submitted
  };

  return (
    // creating the top part of the page
    <div className='bg-gray-300 h-screen pt-8'>
      <h1 className='pl-14 text-xl font-bold'>User Profile</h1>
      <p className='pl-14 text-xs'>Dashboard User Profile</p>

     {/* //creating the main page that will hold the input boxes, a grid is created to divide the page */}
      <div className='grid grid-cols-2 h-5/6 w-11/12 bg-white ml-14 mt-4 border-2 shadow-md'>
        {/* the first section of the grid */}
        <div className='ml-8'>
          <h1 className='text-xl font-bold pt-10'>Profile Setting</h1>

          <form action='' className='pt-10' onSubmit={handleSubmit}>

       <label className='block mb-1'>
               First Name <br />
              <input type="text" className='border w-full' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
           </label> <br />

           
         <label className='block mb-1'>
              Other Name <br />
             <input type="text" className='border w-full' value={otherNames} onChange={(e) => setOtherNames(e.target.value)} />
          </label> <br />

          <label  className='block mb-1'>
              Last Name <br />
               <input type="text" className='border w-full' value={lastName} onChange={(e) => setLastName(e.target.value)} />
          </label> <br />
           <label  className='pt-5'>
             Phone No <br />
              <input type="number" className='border w-full' value={phone} onChange={(e) => setPhone(e.target.value)} />
            </label> <br />
          
            <button
              className='bg-red-500 text-white py-2 px-4 mt-8 rounded-2xl hover:bg-blue-700'
              type='submit'
            >
              Save
            </button>
            
          </form>

          {/* the second section of the grid */}
        </div>
        <div className='pt-[4.3rem] pl-3'>
          <form action="" className='pt-10' onSubmit={handleSubmit}>

          <label className='block mb-1'>
               User Name <br />
              <input type="text" className='border w-full' value={userName} onChange={(e) => setuserName(e.target.value)} />
           </label> <br />

           <label className='block mb-1'>
               Email <br />
              <input type="text" className='border w-full' value={email} onChange={(e) => setemail(e.target.value)} />
           </label> <br />

           <label htmlFor="">
           <select id='gender' className='mt-5' value={gender} onChange={(e) => setgender(e.target.value) }>
           <option value=''>Select Gender</option>
          <option value='male'>Male</option>
        <option value='female'>Female</option>
          </select>
      
           </label>

          </form>
        </div>
        
      </div>
    </div>
  );
};

export default EditProfile;
