export default function FactoryComponent() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center gap-6 h-[635px] w-[1440px]">
        <p className="text-[16px] font-[600]">Own Factory</p>
        <h1 className="text-[60px] w-[768px] text-center">
          The Ways to Keep Business Growing
        </h1>
        <p className="text-[20px] w-[768px]">
          Are you interested to know details about our factory, production
          system and company policy at a glance? Please have a look at the
          provided pdf file.
        </p>
        <div className="flex justify-center gap-[24px]">
          <button>
            <img src="/download.png" alt="" className="w-[174px] h-[67px]" />
          </button>
          <button className="w-[131px] h-[51px] rounded-[6px] px-[24px] py-[12px] bg-[#0C97D5] text-white">
            View PDF
          </button>
        </div>
      </div>
    </div>
  );
}
