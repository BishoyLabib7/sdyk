import React from "react";
import { Outlet } from "react-router";
import Footer from "./Footer";

export default function AppLayout() {
  return (
    <div>
      <Outlet />
      <footer className="lg:p-3">
        <Footer />
      </footer>
    </div>
  );
}
