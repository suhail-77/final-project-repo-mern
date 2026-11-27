import React, { useState, useEffect } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log('Food Rescue Counter count:', count)
  }, [count])

  return (
    <div className="bg-white shadow-md p-6 flex flex-col">
      <div className="bg-red-600 text-white text-xl font-bold p-3 mb-3 text-center">
        Food Rescue Counter
      </div>
      <div className="bg-gray-200 p-4 text-center text-2xl font-bold mb-4">
        {count}
      </div>
      <div className="flex gap-2 justify-center">
        <button
          onClick={() => setCount(count + 1)}
          className="bg-blue-500 text-white px-4 py-2 rounded font-semibold hover:bg-blue-600"
        >
          Increment
        </button>
        <button
          onClick={() => setCount(count - 1)}
          className="bg-red-500 text-white px-4 py-2 rounded font-semibold hover:bg-red-600"
        >
          Decrement
        </button>
      </div>
    </div>
  )
}

export default Counter
