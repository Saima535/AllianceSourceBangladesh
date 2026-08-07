export default function Machinery() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="relative overflow-hidden rounded-lg shadow-lg">
        <img src="/machine1.png" className="w-full h-[687px] object-cover" />

        <p className="absolute bottom-0 left-0 w-full p-3 text-white  text-sm font-medium">
          NEEDLE DETECTOR MACHINE
        </p>
      </div>

      <div className="relative overflow-hidden rounded-lg shadow-lg">
        <img src="/machine2.png" className="w-full h-[687px] object-cover" />

        <p className="absolute bottom-0 left-0 w-full p-3 text-white text-sm font-medium">
          THREAD SUCKING MACHINE
        </p>
      </div>
    </div>
  );
}
