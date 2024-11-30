import React from 'react'
import JobList from './JobList';
import FeaturedEmployer from './FeaturedEmployer';
import MobileDownload from './MobileDownload';

function Hero() {
    const tags = [
        "Fresher",
        "Work From Home",
        "WFH",
        "IT",
        "HR",
        "Back Office",
        "BPO Jobs",
        "ITES",
        "Finance",
        "Accounts",
        "Medical",
        "Pharma",
        "Manager",
        "Developer",
        "Marketing",
        "Engineering",
        "Non Government Jobs",
    ];
    return (
        <>
            <section className=" text-center text-blue-700 mb-10 ">
                <h2 className="text-xl font-bold mb-2">Bringing You the Perfect Job</h2>
                <p className="text-md mb-2">
                    Explore 11,000+ active jobs and connect with top employers.
                </p>
                <button className="bg-blue-600 text-white py-2 px-4 mb-6 rounded hover:bg-yellow-300  hover:text-blue-500">
                    Explore Jobs
                </button>
                <hr className='border-gray-950' />

            </section>

            <div className='flex justify-around '>
                <div className="w-full md:w-[45%] bg-teal-300 p-6 rounded-lg flex flex-col space-y-4">
                    {/* Input Section */}
                    <div className="flex w-full">
                        <input
                            type="text"
                            placeholder="Search Jobs Now"
                            className="flex-grow p-3 mr-3 rounded-l border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button className="bg-yellow-400 text-white font-semibold px-4 py-2 rounded-r shadow hover:bg-yellow-500">
                            Search
                        </button>
                    </div>

                    {/* Buttons Section */}
                    <div className="flex w-full justify-end space-x-4">
                        <button className="bg-white text-gray-800 border border-gray-300 font-semibold px-4 py-2 rounded shadow hover:bg-gray-100">
                            View Jobs
                        </button>
                        <button className="bg-yellow-400 text-white font-semibold px-4 py-2 rounded shadow hover:bg-yellow-500">
                            Register For FREE
                        </button>
                    </div>
                </div>


                <div className="w-[45%] bg-teal-300 p-6 rounded-lg">
                    <h2 className="text-xl font-semibold text-blue-900 flex items-center">
                        Quick Job Search <span className="ml-2 text-lg">🔍</span>
                    </h2>
                    <div className="flex flex-wrap gap-2 mt-4">
                        {tags.map((tag, index) => (
                            <span
                                key={index}
                                className="bg-white text-gray-800 px-3 py-1 rounded-full text-sm shadow-sm hover:bg-gray-100 cursor-pointer"
                            >
                                #{tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            <div className='text-center my-8'>
                <JobList />
                <FeaturedEmployer />
                <MobileDownload />
            </div>
        </>
    )
}

export default Hero