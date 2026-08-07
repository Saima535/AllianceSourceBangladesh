export default function CTA() {
  return (
    <>
      <section
        className="flex justify-center items-center px-16 py-12 min-h-[335px] bg-cover bg-center relative"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/buying-house.png')",
        }}
      >
        <div className="flex flex-col items-center text-center gap-8 max-w-3xl">
          <div className="flex flex-col items-center gap-6">
            <h2 className="text-white text-6xl font-medium tracking-tight">
              Become Our Partner
            </h2>

            <p className="text-white text-xl leading-[30px]">
              Scaling your supply chain starts with the right alliance. Let’s
              discuss your next collection.
            </p>
          </div>
          <button className="px-6 py-3 bg-[#0C97D5] border border-[#0C97D5] rounded-md text-white text-lg font-medium">
            Contact Sourcing
          </button>
        </div>
      </section>
    </>
  );
}
