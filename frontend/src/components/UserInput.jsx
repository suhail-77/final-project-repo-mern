import React, { useState, useEffect } from 'react'

const UserInput = () => {
  const [value, setValue] = useState('')

  useEffect(() => {
    console.log('Search Nearby Food:', value)
  }, [value])

  return (
    <div className="bg-white shadow-md p-6 flex flex-col">
      <div className="bg-gray-200 p-3 text-xl font-bold mb-3">
        Search Nearby Food
      </div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter city or food item..."
        className="border border-gray-400 p-2 rounded mb-3"
      />
      <p className="text-gray-700 font-medium">{value}</p>
    </div>
  )
}

export default UserInput
