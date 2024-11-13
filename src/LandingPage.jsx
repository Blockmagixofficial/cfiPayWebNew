import React, { useRef } from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import How from "./components/How"
import Unify from "./components/Unify"
import Global from "./components/Global"
import Footer from "./components/Footer"

export default function LandingPage() {
  const globalRef = useRef(null)

  const scrollToGlobal = () => {
    globalRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <div className="bg-white">
      <Navbar onGetStartedClick={scrollToGlobal} />
      <Hero onGetStartedClick={scrollToGlobal} />
      <How />
      <Global ref={globalRef} />
      <Unify />
      <Footer />
    </div>
  )
}
