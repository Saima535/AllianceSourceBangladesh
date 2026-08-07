const services = [
  {
    image: "/vector10.png",
    title: "Supplier selection and evaluation",
    description: "We find manufacturers who meet your standards.",
  },
  {
    image: "/vector11.png",
    title: "Price negotiation and order placement",
    description: "We secure the best terms for your orders.",
  },
  {
    image: "/vector13.png",
    title: "Production follow-up and quality inspection",
    description: "We monitor every batch from loom to shipment.",
  },
];

export default function BuyingHouseService() {
  return (
    <div className="mx-[32px] px-[16px] py-[32px] mt-[64px]">
      <div className="text-center mb-10">
        <p>Services</p>
        <h1 className="text-[60px] font-[400]">Buying house services</h1>
        <p>We manage every step of your sourcing journey with precision.</p>
      </div>

      <div className="grid grid-cols-4 gap-[32px]">
        <div className="bg-[#0C97D5] text-white rounded-md w-[296px] h-[328px] px-[8px] py-[16px]">
          <div className="flex flex-col justify-between px-[8px] py-[16px] h-[217px]">
            <div className="w-[40px]">
              <img src="/vector12.png" alt="" />
            </div>
            <div className="mt-[35%]">
              <h2 className="text-[26px]">Product Development and sampling</h2>
              <p className="text-[18px]">
                We create samples that match your vision exactly.
              </p>
            </div>
          </div>
        </div>
        {services.map((item, index) => (
          <div
            key={index}
            className="rounded-md border border-gray-200 w-[296px] h-[328px] px-[8px] py-[16px]"
          >
            <div className="flex flex-col justify-between px-[8px] py-[16px] h-[217px]">
              <div className="w-[40px]">
                <img src={item.image} alt={item.title} />
              </div>

              <div className="mt-[35%]">
                <h2 className="text-[26px]">{item.title}</h2>
                <p className="text-[18px]">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
