import React from 'react'
import {
  DollarSign,
  Send,
  ShieldCheck,
  CreditCard,
} from "lucide-react"

const Unify = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-[#eff6fe]">
      <div className="container px-4 md:px-6">
        <div className="space-y-6 mb-12 text-center">
          <h2 className="text-4xl font-bold tracking-tighter">
            Unifying Global Payments
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            One digital identity—borderless, instant, and accessible to all. CapitalFi is revolutionizing cross-border payments with cutting-edge technology and user-centric design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <div className="p-8 bg-white rounded-2xl shadow-lg flex flex-col items-center space-y-4 text-center">
            <DollarSign className="w-12 h-12 text-blue-600 mb-2" />
            <h3 className="text-2xl font-bold">Effortless, Low-Cost Transfers Across Borders</h3>
            <p className="text-gray-500 text-sm">
              Experience nearly fee-free transfers between global currencies with CapitalFi. Pay friends or handle expenses in any currency without worrying about high fees or hidden charges. To keep transactions stable and predictable, we utilize a digital US dollar as our core asset, avoiding sudden currency fluctuations.
            </p>
          </div>

          <div className="p-8 bg-white rounded-2xl shadow-lg flex flex-col items-center space-y-4 text-center">
            <Send className="w-12 h-12 text-blue-600 mb-2" />
            <h3 className="text-2xl font-bold">Simple Payments, Anytime, Anywhere</h3>
            <p className="text-gray-500 text-sm">
              CapitalFi makes it easy to send and request money, even if the other person doesn’t have an account. Whether you’re sharing expenses, helping family abroad, or paying someone back, you can handle transactions effortlessly with anyone in your contacts. Just a few taps, and your payment or request is taken care of—no extra steps needed.
            </p>
          </div>

          <div className="p-8 bg-white rounded-2xl shadow-lg flex flex-col items-center space-y-4 text-center">
            <ShieldCheck className="w-12 h-12 text-blue-600 mb-2" />
            <h3 className="text-2xl font-bold">Your Unique CapitalFi ID and QR Code</h3>
            <p className="text-gray-500 text-sm">
              With CapitalFi, sending and receiving money is as easy as sharing your unique ID or scanning a QR code. No need for complicated account details—just a simple, secure way to connect with others. Whether you’re paying friends, family, or businesses, your unique CapitalFi ID and QR code make transactions quick, seamless, and hassle-free, wherever you are.
            </p>
          </div>

          <div className="p-8 bg-white rounded-2xl shadow-lg flex flex-col items-center space-y-4 text-center">
            <CreditCard className="w-12 h-12 text-blue-600 mb-2" />
            <h3 className="text-2xl font-bold">Effortless Payments for Your Business</h3>
            <p className="text-gray-500 text-sm">
              CapitalFi streamlines payments for businesses, making it simple to receive funds with just a unique ID or QR code. Connect with customers globally without complicated setups or high fees. With CapitalFi, your business can handle cross-border transactions as easily as local ones, allowing you to focus on growth, not logistics.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Unify
