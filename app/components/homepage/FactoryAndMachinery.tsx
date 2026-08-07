export default function FactoryAndMachinery() {
  const features = [
    {
      image: "/vector19.png",
      title: "Garment production support",
      description:
        "Full-scale manufacturing with quality control at each stage.",
    },
    {
      image: "/vector20.png",
      title: "Machinery supply and installation",
      description: "We source and install equipment tailored to your needs.",
    },
    {
      image: "/vector21.png",
      title: "Maintenance and technical support",
      description: "Our team keeps machines running smoothly year-round.",
    },
    {
      image: "/vector22.png",
      title: "Production optimization",
      description: "We improve efficiency and reduce waste on every line.",
    },
  ];
  return (
    <div className="flex flex-col items-center mt-[64px] px-16 py-28 gap-20 w-[1440px] h-[864px] bg-[#FCEADA]">
      <div className="flex w-full h-full gap-16">
        <div className="w-1/2 flex flex-col justify-between">
          <div>
            <img src="/vector18.png" alt="" />

            <h1 className="text-[60px] font-[500] mt-2">
              Factory and machinery capabilities
            </h1>

            <p className="mt-4">
              We work with modern facilities equipped for precision production.
              Our network includes mills and factories with the latest
              technology.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 mt-8">
            {features.map((item, index) => (
              <div key={index} className="flex gap-3">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-10 h-10 object-contain"
                />

                <div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <button className="border border-gray-200 px-6 py-3 font-[600] rounded-md hover:text-white hover:bg-blue-700 transition">
              Details
            </button>
          </div>
        </div>

        <div className="w-1/2 h-full px-[32px]">
          <img
            src="/machinary.jpg"
            alt="Catalog"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
      </div>
    </div>
  );
}
