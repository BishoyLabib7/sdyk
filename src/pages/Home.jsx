import React from "react";
import Hero from "../feathers/home/Hero";
import Navbar from "../feathers/home/Navbar";
import Categories from "../feathers/home/Categories";
import Offers from "../feathers/home/Offers";
import Services from "../feathers/home/Services";
import MostFamous from "../feathers/home/MostFamous";
import Advertisement from "../feathers/home/Advertisement";
import News from "../feathers/home/News";

export default function Home() {
  return (
    <div className="w-full h-screen ">
      <header className="bg-[url(/background-hero.png)] bg-no-repeat bg-cover md:m-8">
        <Navbar />
        <Hero />
      </header>
      <main>
        <Categories />
        <Offers />
        <Services />
        <MostFamous />
        <Advertisement />
        <News />
      </main>
    </div>
  );
}
