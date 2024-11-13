import React from 'react'
import { ArrowRight } from "lucide-react"
import heroVideo from "../assets/heroVid.mp4"

const Hero = ({ onGetStartedClick }) => {
  return (
    <section className="w-full py-8 md:py-16 lg:py-20 flex justify-center items-center bg-[#eff6fe]">
      <div className="container px-4 md:px-6 lg:px-20 flex flex-col lg:flex-row items-center lg:justify-between pl-6">
        {/* Text and Button Section */}
        <div className="flex flex-col items-center lg:items-start space-y-4 text-center lg:text-left lg:w-1/2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
            Send Money Across Borders{" "}
            <span className="block">
              in <span className="text-blue-600">Nanoseconds</span>
            </span>
          </h1>
          <p className="mx-auto lg:mx-0 max-w-[700px] text-gray-500 md:text-xl font-semibold">
            Experience near-zero fee transfers as seamless as a local payment.
          </p>
          <p className="mx-auto lg:mx-0 max-w-[700px] text-gray-500 md:text-xl font-semibold">
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

        {/* Video Section */}
        <div className="mt-8 lg:mt-0 lg:w-1/2 flex justify-center">
          <video
            className="rounded-lg shadow-lg max-w-full"
            src={heroVideo}
            autoPlay
            loop
            muted
            width={300} // adjust width as needed for visual balance
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
