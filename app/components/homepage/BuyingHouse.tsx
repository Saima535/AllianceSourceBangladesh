export default function BuyingHouse() {
  return (
    <section className="w-full bg-[#FCEADA] px-16 py-28">
      <div className="mx-auto flex max-w-[1312px] items-center gap-20">
        <div className="w-1/2">
          <img
            src="/buying-house.png"
            alt="Buying House"
            className="h-[640px] w-full rounded-[10px] object-cover"
          />
        </div>

        <div className="flex w-1/2 flex-col">
          <span className="mb-8 text-[16px] font-semibold text-black">
            Services
          </span>

          <h2 className="max-w-[620px] text-[64px] font-normal leading-[1.08] tracking-[-2px] text-black">
            Professional buying house services
          </h2>

          <p className="mt-10 max-w-[620px] text-[20px] leading-[1.5] text-[#1F1F1F]">
            We handle the complexity of sourcing so you can focus on your
            business. Our buying house team brings years of experience in
            connecting buyers with the right manufacturers.
          </p>

          <div className="mt-10 flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <img src="/vector9.png" alt="" />

              <p className="text-[18px] text-[#1F1F1F]">
                Product development and sampling
              </p>
            </div>

            <div className="flex items-center gap-4">
              <img src="/vector10.png" alt="" />

              <p className="text-[18px] text-[#1F1F1F]">
                Supplier selection and evaluation
              </p>
            </div>

            <div className="flex items-center gap-4">
              <img src="/vector11.png" alt="" />

              <p className="text-[18px] text-[#1F1F1F]">
                Price negotiation and order placement
              </p>
            </div>
          </div>

          <button className="mt-12 w-fit rounded-[8px] border border-[#D4C5B8] bg-white px-8 py-4 text-[18px] font-medium text-black transition-all duration-300 hover:bg-black hover:text-white">
            Explore
          </button>
        </div>
      </div>
    </section>
  );
}
