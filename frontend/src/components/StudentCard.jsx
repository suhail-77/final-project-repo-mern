import React from 'react'

const StudentCard = (props) => {
  return (
    <div className="bg-white shadow-md p-6 hover:shadow-lg transition-shadow duration-300 flex flex-col">
      <div className="bg-orange-100 p-5 border border-gray-500 text-xl font-bold mb-2">
        {props.name}
      </div>
      <div className="bg-red-100 p-5 border border-gray-500 text-2xl text-gray-600">
        {props.rollno}
      </div>
    </div>
  )
}

export default StudentCard
