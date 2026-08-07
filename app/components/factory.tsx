import type { Route } from "../+types/root";
import Hero from "./factorypage/Hero";
import FactoryComponent from "./factorypage/Factory";
import Machinery from "./factorypage/Machinery";
import InventoryPage from "./factorypage/InventoryComponent";
import InventoryComponent from "./factorypage/InventoryComponent";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Alince Sourcing BD | Factory and Machinery" },
    { name: "description", content: "Factory and Machinery" },
  ];
}

export default function Factory() {
  return (
    <>
      <Hero />
      <FactoryComponent />
      <Machinery />
      <InventoryComponent />
    </>
  );
}
