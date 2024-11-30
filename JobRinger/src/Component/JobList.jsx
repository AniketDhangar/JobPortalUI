import React from 'react'

function JobList() {

    const featureJobs = [
        {
            id: 1,
            title: "Software Engineer",
            location: "Remote",
            description: "Develop scalable applications and maintain systems.",
            salary: "₹12,00,000 - ₹20,00,000 per annum",
        },
        {
            id: 2,
            title: "Data Analyst",
            location: "Mumbai",
            description: "Analyze data trends and provide insights to stakeholders.",
            salary: "₹8,00,000 - ₹12,00,000 per annum",
        },
        {
            id: 3,
            title: "UI/UX Designer",
            location: "Pune",
            description: "Design intuitive user experiences and prototypes.",
            salary: "₹6,00,000 - ₹10,00,000 per annum",
        },
        {
            id: 4,
            title: "Backend Developer",
            location: "Hyderabad",
            description: "Build and maintain APIs and backend systems.",
            salary: "₹10,00,000 - ₹15,00,000 per annum",
        },

    ];

    const remoteJobs = [
        { title: "Frontend Developer", company: "Tech Innovators", location: "Remote", type: "Full Time" },
        { title: "Backend Developer", company: "Cloud Solutions", location: "Remote", type: "Part Time" },
        { title: "Data Scientist", company: "DataPros", location: "Remote", type: "Contract" },
        { title: "UI/UX Designer", company: "Design Studio", location: "Remote", type: "Freelance" },

    ];

    return (
        <>
            <section className="container  mx-auto py-10 px-4 ">
                <h3 className="text-blue-700   text-2xl font-bold mb-8">Featured Jobs</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {featureJobs.map((job) => (
                        <div
                            key={job.id}
                            className=" mx-10 w-72 bg-white border rounded-sm  text-start shadow-xl p-2 hover:shadow-2xl transition"
                        >
                            <h4 className="text-xl text-blue-700 font-bold mb-2">{job.title}</h4>
                            <p className="text-gray-500 mb-1">Location: {job.location}</p>
                            <p className="text-gray-700 text-sm mb-2">{job.description}</p>
                            <p className="text-green-600 text-sm font-semibold mb-4">Salary: {job.salary}</p>
                            <button className="bg-teal-500 text-white py-2 px-4  rounded hover:bg-blue-700 w-full">
                                Apply Me
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            <div className="px-4 mx-auto py-10  ">
                <h2 className="text-2xl font-bold text-blue-900 mb-4">Remote Jobs</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-16 gap-6">
                    {remoteJobs.map((job) => (
                        <div

                            key={job.id}
                            className=" mx-10 w-72 bg-white border rounded-sm  text-start shadow-xl p-2 hover:shadow-2xl transition"
                        >
                            <h4 className="text-xl text-blue-700 font-bold mb-2">{job.title}</h4>

                            <p className="text-gray-500 mb-1">Company: {job.company}</p>
                            <p className="text-gray-500 mb-1">Location: {job.location}</p>

                            <p className="text-gray-700 text-sm mb-2">{job.description}</p>
                            <p className="text-green-600 text-sm font-semibold mb-4">Salary: After Interviewed</p>
                            <button className="bg-teal-500 text-white py-2 px-4  rounded hover:bg-blue-700 w-full">
                                Apply Me
                            </button>
                        </div>
                    ))}
                </div>
            </div>
            
        </>
    )
}

export default JobList