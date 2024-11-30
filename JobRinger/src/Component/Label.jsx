import React from 'react'

function Label() {
    return (
        <div className='flex justify-around h-16 bg-blue-700 p-3 rounded-lg mx-4 my-4'>
            <div className='hover:text-black text-white text-4xl'>EMPLOYER</div>
            <div className='text-white text-xl'>WELCOME OFFER - FREE JOB Postings and Much More.</div>
            <div>
                <button className=" bg-yellow-400  hover:bg-blue-500 hover:text-white transition-all duration-300 px-4 py-2 rounded-md">Register for FREE</button>
                <button className=" bg-white  hover:bg-blue-500 hover:text-white transition-all duration-300 mx-8 px-4  py-2 rounded-md">Post A Job</button>
            <button className='text-white underline'>Sales Enquiry</button>
            </div>
        </div>
    )
}

export default Label