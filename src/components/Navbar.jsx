import { useState } from "react";
import {
  Menu,
} from "lucide-react";
const Navbar = () => {
    const [isDrawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };
  return (
    <div className="bg-white">
          <header className="px-4 lg:px-6 h-16 flex items-center">
        <a className="flex items-center justify-center" href="#">
          <span className="text-2xl font-bold text-blue-600">Capital Fi</span>
        </a>
        <nav className="ml-auto flex items-center">
          <div className="hidden md:flex gap-4 sm:gap-12 items-center">
            <a
              className="text-md font-medium hover:text-primary transition-colors"
              href="#"
            >
              About
            </a>
            <a
              className="text-md font-medium hover:text-primary transition-colors"
              href="#"
            >
              Features
            </a>
            <a
              className="text-md font-medium hover:text-primary transition-colors"
              href="#"
            >
              Contact
            </a>
            <button className="bg-black text-white hover:bg-black/90 px-4 py-2 rounded-md font-semibold">
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
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <span className="text-xl font-bold text-blue-600">Capital Fi</span>
          <button onClick={toggleDrawer} className="text-blue-600">
            ✕
          </button>
        </div>
        <nav className="flex flex-col items-start p-4 space-y-4">
          <a
            href="#"
            className="text-sm font-medium text-gray-800 hover:text-blue-600"
          >
            About
          </a>
          <a
            href="#"
            className="text-sm font-medium text-gray-800 hover:text-blue-600"
          >
            Features
          </a>
          <a
            href="#"
            className="text-sm font-medium text-gray-800 hover:text-blue-600"
          >
            Contact
          </a>
          <button className="bg-black text-white hover:bg-black/90 px-4 py-2 rounded-md w-full font-semibold">
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
        </div>
  )
}

export default Navbar