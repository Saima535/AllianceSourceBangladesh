import {
  type RouteConfig,
  route,
  index,
  layout,
} from "@react-router/dev/routes";

export default [
  layout("./layouts/MainLayout.tsx", [
    index("../app/routes/home.tsx"),
    route("about", "./components/AboutUs.tsx"),
    route("factory", "./components/factory.tsx"),
    route("contactus", "./components/ContactPage.tsx"),
    route("partners", "./components/GlobalPartners.tsx"),
    route("buyinghouse", "./components/BuyingHouse.tsx"),
  ]),
] satisfies RouteConfig;
