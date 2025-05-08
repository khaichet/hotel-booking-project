import React from 'react'
import Navbar from './components/Navbar'
import { useLocation } from 'react-router-dom'

export default function App() {

  const isOwnerPath = useLocation().pathname.includes("owner");

  return (
    <div>
      {!isOwnerPath && <Navbar />}
    </div>
  )
}
