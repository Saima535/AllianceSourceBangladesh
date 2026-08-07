import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Alince Sourcing BD" },
    { name: "description", content: "Welcome to Alince Sourcing BD" },
  ];
}

export default function Home() {
  return <Welcome />;
}
