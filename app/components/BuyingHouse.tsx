import type { Route } from "../+types/root";
import Hero from "./contactpage/Hero";
import BuyingHouseService from "./buyinghougepage/buyinghouseservices";
import ProductsComponent from "./buyinghougepage/products";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Alince Sourcing BD | Buying House" },
    { name: "description", content: "Buying House" },
  ];
}

export default function BuyingHouse() {
  return (
    <>
      <Hero />
      <BuyingHouseService />
      <ProductsComponent />
    </>
  );
}
