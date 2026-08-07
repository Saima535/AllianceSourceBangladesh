import Hero from "./homepage/Hero";
import AllServices from "./homepage/AllServices";
import WorkProcess from "./homepage/WorkProcess";
import BuyingHouse from "./homepage/BuyingHouse";
import BuyingHouseServices from "./homepage/BuyingHouseService";
import Catalog from "./homepage/Catalog";
import FactoryAndMachinery from "./homepage/FactoryAndMachinery";
import ConnectWithUs from "./homepage/ConnectWithUs";
import type { Route } from "../+types/root";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Aliance Sourcing BD | Home" },
    { name: "description", content: "Alliance Sourcing BD Home page" },
  ];
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <AllServices />
      <WorkProcess />
      <BuyingHouse />
      <BuyingHouseServices />
      <Catalog />
      <FactoryAndMachinery />
      <ConnectWithUs />
    </>
  );
}
