import React from 'react'
import {useState} from 'react'
import logo from "../Assets/Sail logo.png"
// import { Link } from 'react-router-dom'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signin = () => {
  
  //This state holds the data entered by the user in the form fields and updates it
  const [formInfo, setFormInfo] = useState({
    email: '',
    password: '',
  });
 
  //This state holds the error messages and allows the display of it when there issues with the form inputs
  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormInfo((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formInfo.email) {
      newErrors.email = 'Email is required';
    }
    if (!formInfo.password) {
      newErrors.password = 'Password is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const navigate = useNavigate();

const handleSubmit = async (e) => {
  e.preventDefault();
 
  try {

    if (validateForm()) {
      const { email, password } = formInfo;
      console.log(email , password);
    // Form is valid, send a POST request to the API
    const response = await axios.post(
      'https://ssmp-api.onrender.com/api/v1/user/login',
      { email, password }
    );

    // Handle the response, e.g., redirect to a new page on successful login
    console.log('Login successful:', response.data.data);

    // Store the token in session storage
    sessionStorage.setItem('token', response.data.data.token);

    // Navigate to the dashboard page
    navigate('/dashboard');
   }
   else {
    console.log('Form has errors');
    window.alert('Incorrect Login detaisl, Kindly Try again')
  }
    
  }

  catch (error) {
    console.error('Login failed:', error);
    window.alert( error.response.data.responseMessage)
    
  }

   
};



  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 h-screen bg-white">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <div className=' absolute top-0 left-0 p-4'>
          <img
            className="mx-auto h-16 w-auto"
            src={logo}
            alt="logo"
          />
          </div>
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-black">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" method="POST" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-black">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  onChange={handleInputChange}
                  className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                    {errors.email && <p className="text-red-500">{errors.email}</p>}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-black">
                  Password
                </label>
                <div className="text-sm">
                  <a href="/" className="font-semibold text-blue-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  onChange={handleInputChange}
                  className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.password && <p className="text-red-500">{errors.password}</p>}
              </div>
            </div>

            <div>
                {/* <Link to= "/dashboard"> */}
                <button
                type="submit"
                // htmlType="submit"
                className="flex w-full justify-center rounded-md  bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Sign in
              </button>
                {/* </Link> */}
            </div>
          </form>
        </div>
      </div>

  )
}

export default Signin;