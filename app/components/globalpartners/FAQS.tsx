import { Plus } from "lucide-react";

const faqs = [
  "What types of garments do you manufacture?",
  "What is your minimum order quantity (MOQ)?",
  "How long does production typically take?",
  "Do you offer sample production before bulk orders?",
  "What quality control measures do you have in place?",
  "Are your facilities certified for ethical and sustainable production?",
  "How do you handle shipping and logistics?",
  "What payment terms do you offer?",
];

export default function FAQS() {
  return (
    <>
      <section className="flex flex-col items-center px-16 py-20 bg-[#F2F2F2]">
        <div className="flex flex-col items-center gap-16 w-full">
          <div className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-5xl font-medium text-[#24201D]">
              Frequently Asked Questions
            </h2>

            <p className="text-xl text-[#54524F]">
              Everything you need to know about partnering with Alliance
              Sourcing BD
            </p>
          </div>

          <div className="flex flex-col gap-4 w-full max-w-[850px]">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="flex justify-between items-center px-6 h-20 bg-white border border-gray-200 rounded-[10px]"
              >
                <h3 className="text-[18px] font-bold text-[#24201D]">{faq}</h3>

                <div className="flex justify-center items-center w-8 h-8 rounded-full bg-[#0A66C2]">
                  <Plus className="w-5 h-5 text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
