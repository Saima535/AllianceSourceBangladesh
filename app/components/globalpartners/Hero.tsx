export default function Hero() {
  return (
    <>
      <section
        className="relative flex flex-col justify-center items-center px-16 pt-36 pb-28 gap-12 w-full min-h-[594px] bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(10,102,194,0.8) 0%, rgba(0,0,0,0.8) 100%), url('/partners.jpg')",
        }}
      >
        <div className="flex flex-col items-center gap-2 text-center z-10">
          <p className="text-white/80 text-lg">
            Home &gt; <span className="font-semibold">Global Partners</span>
          </p>

          <h1 className="text-white text-6xl font-medium tracking-tight">
            Our Global Partners
          </h1>

          <p className="text-white text-xl leading-[30px] max-w-4xl">
            We connect global fashion brands with top Bangladeshi manufacturers,
            built on a decade of transparency and quality.
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-16">
          {[
            ["03+", "Regions"],
            ["40+", "Global Clients"],
            ["09+", "Years"],
          ].map(([number, label]) => (
            <div
              key={label}
              className="flex flex-col items-center gap-3 min-w-[169px]"
            >
              <h2 className="text-white text-6xl font-bold leading-none">
                {number}
              </h2>
              <p className="text-white text-xl">{label}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
