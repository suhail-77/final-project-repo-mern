import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import DashBoard from './pages/DashBoard'
import Login from './pages/Login'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <DashBoard />
        <Login />
      </div>
      <Footer />
    </div>
  )
}

export default App
