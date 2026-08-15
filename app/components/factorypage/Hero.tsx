export default function Hero() {
  return (
    <div>
      <div className="relative bg-black">
        <div className="w-full h-73 overflow-hidden shrink-0 opacity-60">
          <img
            src="/heroA.jpg"
            alt="Cloth"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center absolute inset-0 text-center">
          <div className="mx-[18%]">
            <h2 className="text-[60px] text-white font-[syne]">
              Our Manufacturing Excellence
            </h2>
            <p className="text-white font-[inter]  mt-5">
              State-of-the-art facilities meeting the highest global ethical and
              quality standards through innovation and precision.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
