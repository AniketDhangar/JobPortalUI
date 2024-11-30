import React from 'react'

function MobileDownload() {
  return (
    <section className="bg-gray-50 py-10 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 ">


        <div className="space-y-6 flex flex-col content-center justify-start  px-20">
          <h2 className="text-2xl text-start md:text-3xl font-bold text-gray-800">
            APPLY TO JOBS ON-THE-GO
          </h2>
          <p className="text-blue-700 text-start text-3xl">
            Jobringer Mobile App
          </p>
          <div className="flex  gap-4">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
              className="h-12"
            />
            <img
              src="https://imgs.search.brave.com/SMKs9WhihXJokLP4LgnRdRRfjc3yPiRfDHC-JiskbBg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy81/YTkwMmRiOTdmOTY5/NTFjODI5MjI4NzQu/cG5n"
              alt="App Store"
              className="h-12"
            />
          </div>
          <p className="text-blue-600 font-semibold text-start text-3xl">
            Mobile App <span className="underline">Download</span>
          </p>
        </div>


        <div className="flex justify-center">
          <img
            src="https://imgs.search.brave.com/gGmqI_vyNSqc5P9m_kSvCypBpFmR5u4QAWGkLpFxH_I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/ZHJpYmJibGUuY29t/L3VzZXJzLzQzMTk1/NDYvc2NyZWVuc2hv/dHMvMTc0MjEzNTUv/bWVkaWEvZWZjN2Jh/ZDAwNTQ2ZjM5ZDVk/YTgyOGRkZjY5OWEz/ZDcuanBnP3Jlc2l6/ZT00MDB4MA"
            alt="Jobringer Mobile App Mockup"
            className="h-80 w-full  md:w-80 "
          />
        </div>
      </div>


      <div className="mt-10rounded-lg text-center  p-6">
        <div className="grid md:grid-cols-2 gap-10">
          <div className=' bg-gray-200 rounded-md '>
            <h3 className="text-3xl font-semibold mt-4 text-gray-800">
              JOBS IN INDIA
            </h3>
            <div className="flex flex-wrap gap-2 mt-6 text-blue-600">
              <span>#Mumbai</span>
              <span>#Delhi</span>
              <span>#Ajmer</span>
              <span>#Pune</span>
              <span>#Hyderabad</span>
              <span>#Agra</span>
              <span>#Chennai</span>
              <span>#Kolkata</span>
              <span>#Indore</span>
              <span>#Gurugram</span>
              <span>#Jaipur</span>
              <span>#Ahmedabad</span>
               <span>#Agra</span>
              <span>#Chennai</span>
              <span>#Kolkata</span>
              <span>#Indore</span>
              <span>#Gurugram</span>
              <span>#Jaipur</span>
              <span>#Ahmedabad</span>
            </div>
          </div>
          <div className=' bg-gray-200 h-[150px] rounded-md'>
            <h3 className="text-3xl font-semibold mt-4 text-gray-800">
              INTERNATIONAL JOBS
            </h3>
            <div className="flex flex-wrap gap-2 mt-4 text-blue-600">
              <span>#Africa</span>
              <span>#USA</span>
              <span>#UK</span>
              <span>#Australia</span>
              <span>#Canada</span>
              <span>#Singapore</span>
              <span>#Dubai</span>
              <span>#Saudi Arabia</span>
              <span>#New Zealand</span> 
              <span>#Canada</span>
              <span>#Singapore</span>
              <span>#Dubai</span>
              <span>#Saudi Arabia</span>
              <span>#New Zealand</span>
            </div>
          </div>
        </div>
      </div>
      <hr className="w-full border-gray-600 " />
      <div className=" bg-gray-100 rounded-lg shadow-lg p-6 flex flex-col md:flex-row justify-around items-center text-center gap-4">
        <div>
          <p className="text-blue-700 text-xl">Jobs Posted</p>
          <h4 className="text-3xl font-bold text-blue-600">31,091</h4>
          
        </div>
        <div>
          <p className="text-blue-700 text-xl">Jobs Filled</p>
          <h4 className="text-3xl font-bold text-blue-600">15,153</h4>
          
        </div>
        <div>
          <p className="text-blue-700 text-xl">Employers</p>
          <h4 className="text-3xl font-bold text-blue-600">19,879</h4>
          
        </div>
        <div>
          <p className="text-blue-700 text-xl">Active Users</p>
          <h4 className="text-3xl font-bold text-blue-600">12,941,80</h4>
          
        </div>

      </div>
      <hr className="w-full border-gray-600 " />

    </section>
  )
}

export default MobileDownload