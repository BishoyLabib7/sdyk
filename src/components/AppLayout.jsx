import React from "react";
import { Outlet } from "react-router";
import Footer from "./Footer";
import Navbar from "./HomeNavbar";

export default function AppLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <footer className="lg:p-3">
        <Footer />
      </footer>
    </>
  );
}
