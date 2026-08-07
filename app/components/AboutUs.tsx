import type { Route } from "../+types/root";
import Hero from "./aboutuspage/Hero";
import BuyingHouse from "./aboutuspage/BuyingHouse";
import Services from "./homepage/AllServices";
import WorkProcess from "./homepage/WorkProcess";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Alince Sourcing BD | About Us" },
    { name: "description", content: "About us" },
  ];
}

export default function AboutUs() {
  return (
    <>
      <Hero />
      <BuyingHouse />
      <Services />
      <WorkProcess />
    </>
  );
}
