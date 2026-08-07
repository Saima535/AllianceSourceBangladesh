import { NavLink } from "react-router";

export default function NavBar() {
  return (
    <div className="sticky top-0 z-50 w-full bg-white px-10 py-4 flex justify-between items-center shadow-sm">
      {/* Left Section */}
      <div className="flex items-center gap-3">
        <div className="w-10 overflow-hidden shrink-0">
          <img src="/logo1.png" alt="Logo 1" className="w-full object-cover" />
        </div>

        <div className="font-bold leading-tight">
          <p>ALLIANCE</p>
          <p>SOURCING BD</p>
        </div>

        <div className="w-50 overflow-hidden shrink-0 mt-1">
          <img src="/logo2.png" alt="Logo 2" className="w-full object-cover" />
        </div>
      </div>

      {/* Middle Navigation */}
      <div className="flex items-center gap-8 font-normal">
        <NavLink to="/" className="text-lg hover:text-blue-500 transition">
          Home
        </NavLink>

        <NavLink to="/about" className="text-lg hover:text-blue-500 transition">
          About Us
        </NavLink>

        <NavLink
          to="/buyinghouse"
          className="text-lg hover:text-blue-500 transition"
        >
          Buying House
        </NavLink>

        <NavLink
          to="/factory"
          className="text-lg hover:text-blue-500 transition"
        >
          Factory & Machinery
        </NavLink>

        <NavLink
          to="/partners"
          className="text-lg hover:text-blue-500 transition"
        >
          Global Partners
        </NavLink>
      </div>

      {/* Right Button */}
      <div>
        <button
          className="
            bg-[linear-gradient(280.65deg,_#1F75FF_0%,_#61DAFF_55%,_#1F75FF_90%)]
            shadow-[0px_0px_20px_rgba(71,184,255,0.5),0px_5px_5px_-1px_rgba(58,125,233,0.25),inset_4px_4px_8px_rgba(175,230,255,0.5),inset_-4px_-4px_8px_rgba(19,95,216,0.35)]
            hover:bg-[linear-gradient(54.78deg,_#1F75FF_-17.46%,_#61DAFF_56.75%,_#1F75FF_103.97%)]
            rounded-[8px]
            px-6 py-3
            text-white font-semibold
            transition-all duration-300
            hover:scale-[1.03]
            active:scale-[0.98]
          "
        >
          Speak with us
        </button>
      </div>
    </div>
  );
}
