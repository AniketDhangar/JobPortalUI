import React from 'react'

function FeaturedEmployer() {
    const employers = [
        { id: 1, name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
        { id: 3, name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
        { id: 4, name: "Facebook", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" },
        { id: 7, name: "IBM", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
        { id: 10, name: "Netflix", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" },
    ]
      
  return (
   
      <div className="py-6 py-8">
                        <hr className='border-gray-950 mb-10' />

      <h2 className="text-2xl font-bold text-blue-900 ">Featured Employers</h2>
      <div className="grid grid-cols-2 md:grid-cols-5 ">
        {employers.map((employer) => (
          <div
            key={employer.id}
            className="relative group w-24 h-24 md:w-28 md:h-28 mx-auto cursor-pointer rounded-full "
          >
            {/* Company Logo */}
            <img
              src={employer.logo}
              alt={`${employer.name} `}
              className="w-full  h-full mb-8 object-contain border rounded-full shadow-md group-hover:opacity-100 transition-opacity duration-300"
            />
            {/* Hover Name */}
            <div className="absolute inset-0 bg-white text-black font-bold text-sm flex items-center justify-center rounded-full opacity-0 group-hover:opacity-100  transition-opacity duration-300 ">
              {employer.name}
            </div>
          </div>
        ))}
      </div>
      <hr className='border-gray-950 mt-10' />

    </div>
  )
}

export default FeaturedEmployer