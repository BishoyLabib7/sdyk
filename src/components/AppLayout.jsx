import React from "react";
import { Outlet } from "react-router";
import Footer from "./Footer";
import Navbar from "../feathers/home/Navbar";
import Hero from "../feathers/home/Hero";

export default function AppLayout() {
  return (
    <div className="w-full h-screen ">
      <header className="bg-[url(/background-hero.png)] bg-no-repeat bg-cover md:mx-8 md:mt-8">
        <Navbar /> <Hero />
      </header>
      <Outlet />
      <footer className="lg:p-3">
        <Footer />
      </footer>
    </div>
  );
}
