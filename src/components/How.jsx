import {

    DollarSign,
    QrCode,
    Calculator,

  } from "lucide-react";
const How = () => {
  return (
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
                Experience nearly fee-free transfers between global currencies.
                Pay friends or handle expenses in any currency without worrying
                about high fees or hidden charges.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg">
              <div className="mb-4">
                <QrCode className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Simple Payments</h3>
              <p className="text-gray-500">
                Send and request money easily, even if the other person doesn't
                have an account. Just a few taps, and your payment or request is
                taken care of—no extra steps needed.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg">
              <div className="mb-4">
                <Calculator className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Business Solutions</h3>
              <p className="text-gray-500">
                Streamline payments for your business with just a unique ID or
                QR code. Connect with customers globally without complicated
                setups or high fees.
              </p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default How