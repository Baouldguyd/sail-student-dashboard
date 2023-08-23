import {React, useState} from 'react'
import Sidebar from '../Components/DashboardComponents/Sidebar'
import {  useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate()
    const [modalIsOpen, setModalIsOpen] = useState(true);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className=' flex h-[100vh] w-screen'>
    <Sidebar/>

    <div className=" relative inset-0 flex items-center justify-center rounded-lg p-6">
      <div className="relative w-auto max-w-lg p-4 mx-auto my-6 bg-white rounded-lg shadow-lg">
        <div className="absolute top-0 right-0 p-2">
          <button
            onClick={closeModal}
            className="text-gray-400 hover:text-gray-500"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="p-6">
          <h3 className="text-lg font-bold text-gray-900"> Log you out?</h3>
          <p className="mt-2 text-sm text-gray-500">
            Are you sure you want to log out?
          </p>
          <div className=" px-3 py-3 gap-8 sm:flex sm:flex-row-reverse sm:px-6">
            <button
              onClick={closeModal}
              type="button"
              className="mt-3 inline-flex w-full justify-center rounded-md bg-red-600 px-6 py-1.5 text-sm font-semibold text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600  ring-gray-300 hover:bg-red-700 sm:mt-0 sm:w-auto"
            >
              No
            </button>

              <button
              onClick={()=>{navigate("/landing", {replace:true})}}
                type="button"
                className="mt-3 inline-flex w-full justify-center rounded-md bg-blue-600 px-6 py-1.5 text-sm font-semibold text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 shadow-sm ring-gray-300 hover:bg-blue-700 sm:mt-0 sm:w-auto"
              >
                Yes
              </button>

          </div>
        </div>
      </div>
    </div>

</div>
  )
}

export default Logout