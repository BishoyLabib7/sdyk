import React from "react";
import { Outlet } from "react-router";
import Footer from "./Footer";
import Navbar from "../feathers/home/Navbar";
import Hero from "../feathers/home/Hero";

export default function AppLayout() {
  return (
    <div className="w-full h-screen relative">
      <Outlet />
      <footer className="lg:p-3">
        <Footer />
      </footer>
    </div>
  );
}
