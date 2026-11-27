import React from 'react'
import StudentCard from '../components/StudentCard'
import Counter from '../components/Counter'
import UserInput from '../components/UserInput'

const DashBoard = () => {
  return (
    <div className="flex-1 p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <StudentCard name="Surplus Bakery Loaves (15 kg)" rollno="DON-101 • Pickup 8:00 PM" />
      <StudentCard name="Cooked Rice & Curry (30 kg)" rollno="DON-102 • Pickup 9:30 PM" />
      <StudentCard name="Fresh Produce Box (20 kg)" rollno="DON-103 • Pickup 7:00 PM" />
      <Counter />
      <UserInput />
    </div>
  )
}

export default DashBoard
