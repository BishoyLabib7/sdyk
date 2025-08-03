import React from "react";
import Hero from "../feathers/home/Hero";
import Navbar from "../feathers/home/Navbar";

export default function Home() {
  return (
    <div className="m-8">
      <header className="w-full h-screen">
        <div className="bg-[url(/background-hero.png)] no-repeat bg-cover bg-center">
          <Navbar />
          <Hero />
        </div>
      </header>
    </div>
  );
}
