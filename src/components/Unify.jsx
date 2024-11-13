import React from 'react'
import {
    ArrowRight,
    DollarSign,
    QrCode,
    Calculator,
    Globe,
    Zap,
    CreditCard,
    QrCodeIcon,
    Menu,
  } from "lucide-react";
const Unify = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-[#eff6fe]">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold tracking-tighter">
                Unifying Global Payments
              </h2>
              <p className="text-xl text-gray-600">
                One digital identity—borderless, instant, and accessible to all.
                Capital Fi is revolutionizing cross-border payments with
                cutting-edge technology and user-centric design.
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
  )
}

export default Unify