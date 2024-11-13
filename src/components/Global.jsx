import React, { useState, useRef } from 'react'
import toast, { Toaster } from 'react-hot-toast'

const Global = ({ showForm }) => {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isFormVisible, setIsFormVisible] = useState(false)

  const sectionRef = useRef(null)

  const handleGetStartedClick = () => {
    setIsFormVisible(true) // Show form when "Get Started" is clicked
    setIsSubmitted(false) // Reset submission state
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  // Show form whenever the parent triggers showForm
  React.useEffect(() => {
    if (showForm) {
      handleGetStartedClick()
    }
  }, [showForm])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      toast.success("Email added to waitlist")
      setIsSubmitted(true)
      setIsFormVisible(false) // Hide form after submission
      setEmail('') // Clear the input field
    }
  }

  return (
    <section ref={sectionRef} className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="rounded-2xl bg-blue-600 px-6 py-12 md:py-24 text-center text-white relative">
          <Toaster position="top-center" reverseOrder={false} />
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Ready to Go Global?
          </h2>
          <p className="mx-auto mt-4 max-w-[600px] text-xl text-white/90">
            Join Capital Fi today and experience the future of cross-border payments. Fast, secure, and nearly free.
          </p>

          {!isFormVisible && !isSubmitted && (
            <button
              onClick={handleGetStartedClick}
              className="mt-8 px-8 py-3 rounded-full bg-white text-blue-600 font-medium hover:bg-blue-100 transition-colors shadow-md"
            >
              Get Started
            </button>
          )}

          {isFormVisible && !isSubmitted && (
            <form onSubmit={handleSubmit} className="mt-8 flex flex-col items-center space-y-4">
              <h3 className="text-lg font-semibold text-white">
                Join Our Waitlist - Get Updates from YC on Email
              </h3>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="px-5 py-3 rounded-full text-gray-800 w-full max-w-md shadow-lg outline-none transition-all focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="mt-2 px-8 py-3 rounded-full bg-white text-blue-600 font-medium hover:bg-blue-100 transition-colors shadow-md"
              >
                Submit
              </button>
            </form>
          )}

          {isSubmitted && (
            <p className="text-lg font-semibold mt-4 text-white">
              Thank you! Your email has been added to our waitlist.
            </p>
          )}
        </div>
      </div>
    </section>
  )
}

export default Global
