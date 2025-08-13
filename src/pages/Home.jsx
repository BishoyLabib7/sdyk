import Hero from "../feathers/home/Hero";
import Categories from "../feathers/home/Categories";
import Offers from "../feathers/home/Offers";
import Services from "../feathers/home/Services";
import MostFamous from "../feathers/home/MostFamous";
import Advertisement from "../feathers/home/Advertisement";
import News from "../feathers/home/News";
import Bannar from "../feathers/home/Bannar";

export default function Home() {
  return (
    <>
      <div className="h-screen">
        <div className="bg-[url(/background-hero.png)] bg-no-repeat bg-cover lg:h-auto h-[100%] md:mx-8 md:mt-8">
          <Hero />
        </div>
      </div>

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
