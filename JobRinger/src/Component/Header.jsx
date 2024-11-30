import React from 'react'
import { Link } from "react-router-dom";


function Header() {
  return (
    <header className="bg-white shadow-2xl mx-2 sticky top-0">
       
    <div className="container mx-auto flex justify-between items-center py-4 px-6">
    
      <div className="text-2xl font-bold text-blue-700">jobRinger</div>
      <b>Bringing you <span className='text-blue-700'>the Perfect Job</span> </b>
      <nav className="flex items-center gap-6">
        <Link
          to="/"
          className="  hover:bg-blue-500 hover:text-white transition-all duration-300 px-4 py-2 rounded-md"
        >
          Jobs
        </Link>
        <Link
          to="/employers"
          className=" hover:bg-blue-500 hover:text-white  transition-all duration-300 px-4 py-2 rounded-md"
        >
          Employers
        </Link>
        <Link
          to="/pricing"
          className=" hover:bg-blue-500 hover:text-white transition-all duration-300 px-4 py-2 rounded-md"
        >
          Pricing
        </Link>
        <Link
          to="/login"
          className="bg-white hover:text-blue-700 px-4 py-2 rounded-md  hover:bg-yellow-300"
        >
          Jobseeker Login
        </Link>
        <Link
          to="/employer-login"
          className="bg-yellow-300 text-blue-700 px-4 py-2 rounded-md hover:bg-blue-500 hover:text-white "
        >
          Employer Login
        </Link>
      </nav>
    </div>
  </header>
   )
}

export default Header