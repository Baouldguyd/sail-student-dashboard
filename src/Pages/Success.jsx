import React from 'react'
import logo from "../Assets/Sail logo.png"
import { Link } from 'react-router-dom'

const Success = () => {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 h-screen bg-gray-800">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src={logo}
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
            Password reset successful!
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">

        
              <div className="flex items-center justify-between">
              <h2 className="mt-4 text-center text-md text-white">
                You can now use your new password to login to your account
          </h2>
              </div>
            

            
            <div>
             <Link to="/signin">
             <button
                type="submit"
                className="flex w-full justify-center rounded-md  bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Sign In
              </button>
             </Link>
            </div>
          </form>
        </div>
      </div>
  )
}

export default Success