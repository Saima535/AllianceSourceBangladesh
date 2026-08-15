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
          <div className="mx-[25%]">
            <h2 className="text-[58px] text-white font-[syne]">
              About Alliance Sourcing BD
            </h2>
            <p className="text-white font-[inter]  mt-5">
              Your premier partner in seamless garment sourcing and global
              manufacturing excellence, bridging the gap between design
              andproduction.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
