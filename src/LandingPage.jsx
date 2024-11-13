import React, { useState } from 'react'
import { ArrowRight, DollarSign, QrCode, Calculator, Globe, Zap, CreditCard, QrCodeIcon, Menu } from 'lucide-react'

export default function LandingPage() {
  const [isDrawerOpen, setDrawerOpen] = useState(false)
  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen)
  }

  return (
    <div className="bg-white">
      <header className="px-4 lg:px-6 h-16 flex items-center">
        <a className="flex items-center justify-center" href="#">
          <span className="text-2xl font-bold text-blue-600">Capital Fi</span>
        </a>
        <nav className="ml-auto flex items-center">
          <div className="hidden md:flex gap-4 sm:gap-6 items-center">
            <a className="text-sm font-medium hover:text-primary transition-colors" href="#">About</a>
            <a className="text-sm font-medium hover:text-primary transition-colors" href="#">Features</a>
            <a className="text-sm font-medium hover:text-primary transition-colors" href="#">Contact</a>
            <button className="bg-black text-white hover:bg-black/90 px-4 py-2 rounded-md">
              Get Started
            </button>
          </div>
          <div className="md:hidden">
            <button onClick={toggleDrawer} className="text-blue-600">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </nav>
      </header>
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform ${
          isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <span className="text-xl font-bold text-blue-600">Capital Fi</span>
          <button onClick={toggleDrawer} className="text-blue-600">
            ✕
          </button>
        </div>
        <nav className="flex flex-col items-start p-4 space-y-4">
          <a href="#" className="text-sm font-medium text-gray-800 hover:text-blue-600">
            About
          </a>
          <a href="#" className="text-sm font-medium text-gray-800 hover:text-blue-600">
            Features
          </a>
          <a href="#" className="text-sm font-medium text-gray-800 hover:text-blue-600">
            Contact
          </a>
          <button className="bg-black text-white hover:bg-black/90 px-4 py-2 rounded-md w-full">
            Get Started
          </button>
        </nav>
      </div>
      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50"
          onClick={toggleDrawer}
        ></div>
      )}
      <section className="w-full py-12 md:py-24 lg:py-32 flex flex-col items-center bg-[#eff6fe]">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Send Money Across Borders{" "}
              <span className="block">
                in{" "}
                <span className="text-blue-600">Nanoseconds</span>
              </span>
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
              Experience near-zero fee transfers as seamless as a local payment.
            </p>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
              Your universal key to global payments.
            </p>
            <button className="bg-black text-white hover:bg-black/90 px-6 py-3 rounded-md inline-flex items-center gap-2 text-lg">
              Get Started
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg">
              <div className="mb-4">
                <DollarSign className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Effortless Transfers</h3>
              <p className="text-gray-500">
                Experience nearly fee-free transfers between global currencies. Pay friends or handle expenses in any currency without worrying about high fees or hidden charges.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg">
              <div className="mb-4">
                <QrCode className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Simple Payments</h3>
              <p className="text-gray-500">
                Send and request money easily, even if the other person doesn't have an account. Just a few taps, and your payment or request is taken care of—no extra steps needed.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg">
              <div className="mb-4">
                <Calculator className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Business Solutions</h3>
              <p className="text-gray-500">
                Streamline payments for your business with just a unique ID or QR code. Connect with customers globally without complicated setups or high fees.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#eff6fe]">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold tracking-tighter">
                Unifying Global Payments
              </h2>
              <p className="text-xl text-gray-600">
                One digital identity—borderless, instant, and accessible to all. Capital Fi is revolutionizing cross-border payments with cutting-edge technology and user-centric design.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Globe className="h-6 w-6 text-blue-600" />
                  <span className="text-lg">Global Access</span>
                </div>
                <div className="flex items-center gap-4">
                  <Zap className="h-6 w-6 text-blue-600" />
                  <span className="text-lg">Instant Transfers</span>
                </div>
                <div className="flex items-center gap-4">
                  <CreditCard className="h-6 w-6 text-blue-600" />
                  <span className="text-lg">Nearly Zero Fees</span>
                </div>
                <div className="flex items-center gap-4">
                  <QrCodeIcon className="h-6 w-6 text-blue-600" />
                  <span className="text-lg">QR Code Payments</span>
                </div>
              </div>
            </div>
            <div className="lg:ml-auto">
              <div className="p-8 bg-white rounded-2xl shadow-xl">
                <Globe className="h-24 w-24 text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold mb-2">Global Access</h3>
                <p className="text-gray-600">
                  Send money across borders with ease
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="rounded-2xl bg-blue-600 px-6 py-12 md:py-24 text-center text-white">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Ready to Go Global?
            </h2>
            <p className="mx-auto mt-4 max-w-[600px] text-xl text-white/90">
              Join Capital Fi today and experience the future of cross-border payments. Fast, secure, and nearly free.
            </p>
            <button className="mt-8 inline-flex items-center justify-center rounded-lg border-2 border-white bg-transparent px-8 py-3 text-lg font-medium text-white transition-colors hover:bg-white hover:text-blue-600">
              Get Started Now
            </button>
          </div>
        </div>
      </section>
      <footer className="w-full py-12 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <p className="text-gray-500">© 2023 Capital Fi. All rights reserved.</p>
            <p className="text-gray-500">Unifying global payments with one digital identity.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
