import React from "react";
import Hero from "../feathers/home/Hero";
import Navbar from "../feathers/home/Navbar";
import Categories from "../feathers/home/Categories";
import Offers from "../feathers/home/Offers";
import Services from "../feathers/home/Services";
import MostFamous from "../feathers/home/MostFamous";
import Advertisement from "../feathers/home/Advertisement";
import News from "../feathers/home/News";
import Footer from "../components/Footer";
import Bannar from "../feathers/home/Bannar";

export default function Home() {
  return (
    <>
      <main>
        <Categories />
        <Offers />
        <Services />
        <MostFamous />
        <Advertisement />
        <News />
        <Bannar />
      </main>
    </>
  );
}
