import React, { useState } from "react";
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
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import How from "./components/How";
import Unify from "./components/Unify";
import Global from "./components/Global";
import Footer from "./components/Footer";
export default function LandingPage() {
  // const [isDrawerOpen, setDrawerOpen] = useState(false);
  // const toggleDrawer = () => {
  //   setDrawerOpen(!isDrawerOpen);
  // };

  return (
    <div className="bg-white">
      <Navbar/>
      <Hero/>
      <How/>
      <Unify/>
      <Global/>
      <Footer/>
      {/* <footer className="w-full py-12 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <p className="text-gray-500">
              © 2023 Capital Fi. All rights reserved.
            </p>
            <p className="text-gray-500">
              Unifying global payments with one digital identity.
            </p>
          </div>
        </div>
      </footer> */}
    </div>
  );
}
