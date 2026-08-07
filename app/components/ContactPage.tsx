import type { Route } from "../+types/root";
import ContatctComponent from "./contactpage/ContatctComponent";
import Hero from "./contactpage/Hero";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Alince Sourcing BD | About Us" },
    { name: "description", content: "About us" },
  ];
}

export default function ContactPage() {
  return (
    <>
      <Hero />
      <ContatctComponent />
    </>
  );
}
