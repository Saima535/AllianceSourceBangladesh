export default function ConnectWithUs() {
  return (
    <div>
      <div className="relative bg-black">
        <div className="w-full h-160 overflow-hidden shrink-0 opacity-60">
          <img
            src="/hero.png"
            alt="Cloth"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center absolute inset-0 text-center">
          <div className="mx-[25%]">
            <h2 className="text-[60px] text-white font-[syne]">
              Ready to start sourcing?
            </h2>
            <p className="text-white font-[inter] text-[20px] mt-5">
              Let us handle your next apparel order from start to finish.
            </p>
          </div>
          <div className="flex justify-center gap-8 mt-8">
            <button className="px-[24px] py-[12px] bg-[#0C97D5] text-white rounded-[6px] border-1-[#0C97D5] text-lg">
              Contact
            </button>
            <button className="text-[#0C97D5] px-[24px] py-[12px] bg-white rounded-[6px] border-1-white text-lg">
              Learn
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
