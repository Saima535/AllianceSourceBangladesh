import { Mail, Phone, MapPin, ChevronRight } from "lucide-react";

export default function ContatctComponent() {
  return (
    <section className="flex flex-col items-center gap-20 px-16 py-28 w-full bg-white">
      <div className="w-full max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-black mb-6">Reach</p>

          <h1 className="text-7xl font-medium tracking-tight text-black mb-8">
            Contact us
          </h1>

          <p className="text-2xl text-gray-800 leading-relaxed">
            We are here to answer your questions and discuss your sourcing
            needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-20 items-start">
          <div className="flex flex-col gap-14">
            <div>
              <Mail className="w-9 h-9 text-black mb-6" strokeWidth={1.8} />

              <h3 className="text-4xl font-medium mb-4">Email</h3>

              <p className="text-2xl text-gray-800 mb-4">Send us a message</p>

              <a
                href="mailto:info@alliancesourcingbd.com"
                className="text-2xl underline underline-offset-4"
              >
                info@alliancesourcingbd.com
              </a>
            </div>

            <div>
              <Phone className="w-9 h-9 text-black mb-6" strokeWidth={1.8} />

              <h3 className="text-4xl font-medium mb-4">Phone</h3>

              <p className="text-2xl text-gray-800 mb-4">Call us directly</p>

              <a
                href="tel:+8801700000000"
                className="text-2xl underline underline-offset-4"
              >
                +880 1700 000000
              </a>
            </div>

            <div>
              <MapPin className="w-9 h-9 text-black mb-6" strokeWidth={1.8} />

              <h3 className="text-4xl font-medium mb-4">Office</h3>

              <p className="text-2xl text-gray-800 mb-6">Dhaka, Bangladesh</p>

              <button className="flex items-center gap-2 text-2xl font-semibold">
                Get directions
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          <div className="w-full h-full">
            <div className="overflow-hidden rounded-xl border border-gray-200">
              <img
                src="/map.png"
                alt="Office location map"
                className="w-full h-[520px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
