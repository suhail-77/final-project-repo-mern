import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-sky-400 text-2xl p-4 flex items-center justify-between">
      <div className="font-bold">Hyperlocal Food Rescue</div>
      <div className="flex items-center gap-4 text-xl font-bold">
        <a href="#help" className="hover:underline">help</a>
        <a href="#about" className="hover:underline">About</a>
        <a href="#login" className="hover:underline">LOGIN</a>
      </div>
    </nav>
  )
}

export default Navbar
