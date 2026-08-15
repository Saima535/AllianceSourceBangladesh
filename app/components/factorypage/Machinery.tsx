export default function Machinery() {
  const machines = [
    {
      image: "/machinary.jpg",
      title: "Factory Overview",
    },
    {
      image: "/machinary.jpg",
      title: "Industrial Machinery",
    },
  ];

  return (
    <div className="px-6 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {machines.map((machine, index) => (
          <div
            key={`${machine.title}-${index}`}
            className="relative overflow-hidden rounded-2xl shadow-lg group"
          >
            <img
              src={machine.image}
              alt={machine.title}
              className="w-full h-[420px] md:h-[520px] object-cover transition-transform duration-300 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

            <p className="absolute bottom-0 left-0 w-full p-4 text-white text-lg font-medium uppercase tracking-wide">
              {machine.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
