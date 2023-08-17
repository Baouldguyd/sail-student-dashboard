import React from 'react'
import { useState } from 'react'
import logo from '../Assets/Sail logo.png'
import PinInput from 'react-pin-input'
import Modal from '../Components/Modal'

const Reset = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const pin = '1234'; // Replace with the actual PIN input
    const newPassword = event.target.password.value;

    const url = 'http://ssmp-api.onrender.com/api/v1/user/changePassword';

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ pin, newPassword }),
      });

      if (response.ok) {
        // Handle successful password reset (e.g., show a success message)
        openModal();
      } else {
        // Handle error (e.g., show an error message)
        console.error('Password reset failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 h-screen bg-white">
      <div className=' '>
      <div className=' absolute top-0 left-0 p-4'>
          <img
            className="mx-auto h-16 w-auto"
            src={logo}
            alt="logo"
          />
          </div>
        </div>
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-black">
            Reset your password
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" method="POST" onSubmit={handleSubmit}>

            <div>
              <div className=' mb-4'>
            <h2 className="text-sm font-medium mb-3">Enter Your PIN</h2>
            <div className=' flex gap-6 justify-center'>
            <PinInput
              length={1} 
              initialValue=""
              secret
            />
            <PinInput
              length={1} 
              initialValue=""
              secret
            />
            <PinInput
              length={1} 
              initialValue=""
              secret
            />
            <PinInput
              length={1} 
              initialValue=""
              secret
            />

            </div>

              </div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-black">
                 New Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-black">
                  Confirm New Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
             
             <button
                type="submit"
                onClick={openModal}
                className="flex w-full justify-center rounded-md  bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Reset Password
              </button>
              <Modal isOpen={modalIsOpen} onRequestClose={closeModal} />

             
            </div>
          </form>
        </div>
      </div>
  )
}

export default Reset