import React from "react";
import { Outlet } from "react-router";
import Footer from "./Footer";
import Navbar from "../feathers/home/Navbar";
import Hero from "../feathers/home/Hero";

export default function AppLayout() {
  return (
    <div className="w-full h-screen relative">
      <header className="bg-[url(/background-hero.png)] bg-no-repeat bg-cover md:h-screen h-[120%] md:mx-8 md:mt-8">
        <Hero />
      </header>
      <Outlet />
      <footer className="lg:p-3">
        <Footer />
      </footer>
    </div>
  );
}
