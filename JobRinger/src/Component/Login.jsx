import React from 'react'

function Login() {
  return (
<section className="container mx-auto py-10">
      <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
        <h3 className="text-2xl font-bold text-center mb-6">Jobseeker Login</h3>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full p-2 border rounded"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Login
          </button>
          <p className="text-center mt-4">
            <a href="#" className="text-blue-600 hover:underline">Forgot Password?</a>
          </p>
        </form>
      </div>
    </section>  )
}

export default Login