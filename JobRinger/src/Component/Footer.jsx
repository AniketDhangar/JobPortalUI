import React from "react";

function Footer() {
  return (
    <footer className="bg-blue-50 py-6 px-4 text-sm text-gray-600">
      <div className="max-w-7xl mx-auto">
        {/* Disclaimer Section */}
        <div className="flex flex-col">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <p className="leading-relaxed text-lg">
            <strong>Disclaimer:</strong> All Trademarks and Logos are the
            property of their respective owners, depicted here purely for
            representation purpose. Jobringer.com has taken all reasonable steps
            to ensure that information on this site is genuine. Job Applicants
            are advised to evaluate independently. Jobringer.com shall not have
            any responsibility in this regard. All Jobseeker services are
            strictly designed & meant only for job search assistance and to
            maximize the chances for the jobseekers to get their dream job. All
            Job Seeker Credentials and Employment Opportunities are subject to
            individual merit & evaluation. We do not guarantee any job to any
            jobseeker.
          </p>

          {/* Recognized By Section */}
          <div className="text-center text-left">
            <p className="text-gray-700">Recognized By</p>
            <span className="text-orange-500 font-semibold text-3xl">
              #startupindia
            </span>
          </div>
        </div>

             {/* Social Media Icons */}

           
             <div className="flex items-center self-end gap-2 py-3 ">
             <p className="text-xl font-bold">Follow us on:</p>
            <a href="#" className="text-white    hover:text-blue-500 ">
              <i className="fab fa-whatsapp text-lg bg-cyan-950 rounded-full p-3"></i>
            </a>
            <a href="#" className="text-white hover:text-blue-500 ">
              <i className="fab fa-facebook text-lg bg-cyan-950 rounded-full p-3"></i>
            </a>
            <a href="#" className="text-white hover:text-blue-500 ">
              <i className="fab fa-twitter text-lg bg-cyan-950 rounded-full p-3"></i>
            </a>
            <a href="#" className="text-white hover:text-blue-500 ">
              <i className="fab fa-instagram text-lg bg-cyan-950 rounded-full p-3"></i>
            </a>
            <a href="#" className="text-white hover:text-blue-500 ">
              <i className="fab fa-linkedin text-lg bg-cyan-950 rounded-full p-3"></i>
            </a>
            <a href="#" className="text-white hover:text-blue-500 ">
              <i className="fab fa-youtube text-lg bg-cyan-950 rounded-full p-3"></i>
            </a>
            <a href="#" className="text-white hover:text-blue-500 ">
              <i className="fab fa-telegram text-lg bg-cyan-950 rounded-full p-3"></i>
            </a>
          </div>

        </div>

        <hr className="my-6 w-full border-gray-600 " />
        
       
          {/* Policies Links */}
          <div className="text-center flex flex-col mt-5 justify-center items-center text-lg ">
            <p className="flex gap-6   mt-5">
              <a href="#" className="hover:underline">
                Terms and conditions
              </a>{" "}
              |{" "}
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>{" "}
              |{" "}
              <a href="#" className="hover:underline">
                Refund / Cancellation Policy
              </a>{" "}
              |{" "}
              <a href="#" className="hover:underline">
                About Us
              </a>{" "}
              |{" "}
              <a href="#" className="hover:underline">
                Contact Us
              </a>{" "}
              |{" "}
              <a href="#" className="hover:underline">
                FAQ
              </a>
            </p>
            <p className="flex self-center  mt-5 text-gray-500">
              © All Rights Reserved @ 2024 Jobtech Ventures Private Limited.
            </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
