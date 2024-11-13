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
      <Global/>
      <Unify/>
      <Footer/>
    </div>
  );
}
