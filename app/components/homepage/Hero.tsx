export default function Hero() {
  return (
    <div>
      <div className="relative bg-black">
        <div className="w-full h-160 overflow-hidden shrink-0 opacity-60">
          <img
            src="/heroA.jpg"
            alt="Cloth"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center absolute inset-0 text-center">
          <div className="mx-[40%] w-[305px] h-[54px]">
            <p className="font-[inter] text-white bg-white/10 backdrop-blur-md rounded-[100px] px-[24px] py-[12px] mb-6">
              House of fashion stitching
            </p>
          </div>
          <div className="mx-[25%]">
            <h2 className="text-[84px] text-white font-[syne]">
              Your trusted partner in apparel sourcing
            </h2>
            <p className="text-white font-[inter]  mt-5">
              We connect international buyers with reliable manufacturers across
              Bangladesh. From product development to final shipment, we handle
              every detail with precision and care.
            </p>
          </div>
          <div className="flex justify-center gap-8 mt-8">
            <button className="px-[24px] py-[12px] bg-[#0C97D5] text-white rounded-[6px] border-1-[#0C97D5] text-lg">
              Contact Us
            </button>
            <button className="text-[#0C97D5] px-[24px] py-[12px] bg-white rounded-[6px] border-1-white text-lg">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
