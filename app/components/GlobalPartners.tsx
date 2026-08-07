import Hero from "./globalpartners/Hero";
import Partners from "./globalpartners/Partners";
import Strengths from "./globalpartners/Strengths";
import FAQS from "./globalpartners/FAQS";
import CTA from "./globalpartners/CTA";
import type { Route } from "../+types/root";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Alince Sourcing BD | Global Partners" },
    { name: "description", content: "Global partners of Alliance Sourcing BD" },
  ];
}

export default function GlobalPartners() {
  return (
    <main className="flex flex-col w-full bg-white">
      <Hero />
      <Partners />
      <Strengths />
      <FAQS />
      <CTA />
    </main>
  );
}
