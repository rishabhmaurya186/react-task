import React from 'react'

function Mybutton({text}) {
  return (
    <div className="flex items-center justify-between">
              <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:border-indigo-700 focus:ring focus:ring-indigo-200 active:bg-indigo-700 transition duration-150 ease-in-out">
                {text}
              </button>
            </div>
  )
}

export default Mybutton