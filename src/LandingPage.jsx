import React, { useState } from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import How from "./components/How"
import Unify from "./components/Unify"
import Global from "./components/Global"
import Footer from "./components/Footer"

export default function LandingPage() {
  const [showForm, setShowForm] = useState(false)

  const handleGetStartedClick = () => {
    setShowForm((prev) => !prev) // Toggle showForm to trigger the form visibility and scroll
  }

  return (
    <div className="bg-white">
      <Navbar onGetStartedClick={handleGetStartedClick} />
      <Hero onGetStartedClick={handleGetStartedClick} />
      <How />
      <Global showForm={showForm} />
      <Unify />
      <Footer />
    </div>
  )
}
