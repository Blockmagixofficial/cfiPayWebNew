import React from 'react'
import { ArrowRight } from "lucide-react"

const Hero = ({ onGetStartedClick }) => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 flex flex-col items-center bg-[#eff6fe]">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
            Send Money Across Borders{" "}
            <span className="block">
              in <span className="text-blue-600">Nanoseconds</span>
            </span>
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl font-semibold">
            Experience near-zero fee transfers as seamless as a local payment.
          </p>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl font-semibold">
            Your universal key to global payments.
          </p>
          <button
            className="bg-black text-white hover:bg-black/90 px-6 py-3 rounded-md inline-flex items-center gap-2 text-lg font-semibold"
            onClick={onGetStartedClick}
          >
            Get Started
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
