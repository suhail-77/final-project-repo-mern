import React from 'react'

const Sidebar = () => {
  return (
    <aside className="w-48 bg-gray-200 p-5 flex flex-col h-screen">
      <h2 className="text-xl font-bold">Menu</h2>
      <ul className="flex flex-col">
        <li className="mt-3 font-medium cursor-pointer hover:underline">Dashboard</li>
        <li className="mt-3 font-medium cursor-pointer hover:underline">Donations</li>
        <li className="mt-3 font-medium cursor-pointer hover:underline">NGOs</li>
        <li className="mt-3 font-medium cursor-pointer hover:underline">Settings</li>
      </ul>
    </aside>
  )
}

export default Sidebar
