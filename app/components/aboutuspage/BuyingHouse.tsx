export default function BuyingHouse() {
  return (
    <section className="w-full px-16 py-28">
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
            Established Excellence
          </span>

          <h2 className="max-w-[620px] text-[64px] font-normal leading-[1.08] tracking-[-2px] text-black">
            Professional buying house services
          </h2>

          <p className="mt-10 max-w-[620px] text-[20px] leading-[1.5] text-[#1F1F1F]">
            Founded with a vision to revolutionize the apparel industry,
            Alliance Sourcing BD has grown into a global leader in garment
            sourcing. With decades of collective expertise, we bridge the gap
            between world-class brands and high-quality manufacturing units in
            Bangladesh and beyond.
          </p>
          <br />
          <p>
            Our journey is defined by a relentless pursuit of excellence,
            ethical practices, and a deep understanding of the fast-evolving
            fashion landscape. We started as a small team with a big ambition:
            to make international sourcing transparent, efficient, and
            sustainable.
          </p>
        </div>
      </div>
    </section>
  );
}
