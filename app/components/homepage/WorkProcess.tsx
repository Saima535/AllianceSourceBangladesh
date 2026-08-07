export default function Services() {
  return (
    <div className="bg-white min-h-screen font-sans flex items-center justify-center p-8 md:p-24 select-none">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-4 items-start">
        <div className="md:col-span-6 flex flex-col items-start justify-start pt-2">
          <span className="text-sm font-semibold tracking-wide text-gray-900 mb-4 block">
            Process
          </span>
          <h2 className="text-5xl md:text-[72px] font-normal tracking-tight text-gray-900 mb-10 leading-[1.1]">
            How we work
          </h2>
          <button className="px-7 py-2.5 border border-gray-300 rounded-xl text-sm font-medium text-gray-900 hover:bg-gray-50 transition-colors duration-200 shadow-sm">
            Discuss
          </button>
        </div>

        <div className="md:col-span-6 relative flex flex-col space-y-16 pl-4 md:pl-0 w-full max-w-xl md:justify-self-end">
          <div className="absolute left-[22px] top-6 bottom-6 w-[1px] bg-gray-200 z-0"></div>

          <div className="flex items-start space-x-8 relative z-10">
            <div className="flex-shrink-0 w-11 h-11 bg-white flex items-center justify-center rounded-full border border-gray-100 shadow-sm">
              <img src="/vector5.png" alt="" />
            </div>
            <div className="flex-1 pt-1">
              <h3 className="text-2xl font-normal text-gray-900 mb-2 tracking-tight">
                Consultation
              </h3>
              <p className="text-[15px] text-gray-600 leading-relaxed max-w-md font-normal opacity-90">
                We listen to your needs and understand your specifications
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-8 relative z-10">
            <div className="flex-shrink-0 w-11 h-11 bg-white flex items-center justify-center rounded-full border border-gray-100 shadow-sm">
              <img src="/vector6.1.png" alt="" />
            </div>
            <div className="flex-1 pt-1">
              <h3 className="text-2xl font-normal text-gray-900 mb-2 tracking-tight">
                Supplier match
              </h3>
              <p className="text-[15px] text-gray-600 leading-relaxed max-w-md font-normal opacity-90">
                We match you with manufacturers who meet your standards
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-8 relative z-10">
            <div className="flex-shrink-0 w-11 h-11 bg-white flex items-center justify-center rounded-full border border-gray-100 shadow-sm">
              <img src="/vector7.png" alt="" />
            </div>
            <div className="flex-1 pt-1">
              <h3 className="text-2xl font-normal text-gray-900 mb-2 tracking-tight">
                Order management
              </h3>
              <p className="text-[15px] text-gray-600 leading-relaxed max-w-md font-normal opacity-90">
                We negotiate terms and oversee production from start to finish
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-8 relative z-10">
            <div className="flex-shrink-0 w-11 h-11 bg-white flex items-center justify-center rounded-full border border-gray-100 shadow-sm">
              <img src="/vector8.png" alt="" />
            </div>
            <div className="flex-1 pt-1">
              <h3 className="text-2xl font-normal text-gray-900 mb-2 tracking-tight">
                Quality check
              </h3>
              <p className="text-[15px] text-gray-600 leading-relaxed max-w-md font-normal opacity-90">
                Every batch is tested against your specifications and standards
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
