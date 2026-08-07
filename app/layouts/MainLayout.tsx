import NavBar from "../components/shared/NavBar";
import Footer from "../components/shared/Footer";
import { Outlet } from "react-router";

export default function MainLayout() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}
