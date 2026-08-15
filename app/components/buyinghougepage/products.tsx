import WorkProcess from "../homepage/WorkProcess";

const publicImages = Object.entries(
  import.meta.glob("../../public/*.{png,jpg,jpeg,webp,gif,avif,svg,ico}", {
    eager: true,
    import: "default",
  })
)
  .map(([path, image]) => {
    const fileName = path.split("/").pop() ?? path;
    const title = fileName
      .replace(/\.[^.]+$/, "")
      .replace(/[-_]+/g, " ")
      .replace(/([a-z])([A-Z])/g, "$1 $2")
      .replace(/\s+/g, " ")
      .trim();

    return {
      image: image as string,
      title,
      fileName,
    };
  })
  .sort((a, b) => a.fileName.localeCompare(b.fileName));

const shuffleArray = <T,>(items: T[]) => {
  const shuffled = [...items];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
};

const pant = shuffleArray([
  { image: "/1.png", title: "Classic Pant" },
  { image: "/2.png", title: "Smart Fit Pant" },
  { image: "/3.png", title: "Cargo Pant" },
  { image: "/4.png", title: "Slim Pant" },
  { image: "/9.png", title: "Denim Pant" },
  { image: "/10.png", title: "Wide Leg Pant" },
]);

const denim = shuffleArray([
  { image: "/13.jpg", title: "Stretch Fit Denim" },
  { image: "/14.jpg", title: "High-Waist Denim" },
  { image: "/15.jpg", title: "Comfort Denim" },
  { image: "/16.jpg", title: "Premium Denim" },
  { image: "/5.png", title: "Denim Style" },
  { image: "/6.png", title: "Classic Denim" },
]);

const tShirt = shuffleArray([
  { image: "/k1.jpg", title: "Classic Cotton Crew T-Shirt" },
  { image: "/k2.png", title: "Premium Soft Touch V-Neck T-Shirt" },
  { image: "/k3.jpg", title: "Pique Polo Shirt" },
  { image: "/k4.jpg", title: "Urban Style Graphic T-Shirt" },
  { image: "/k5.jpg", title: "Classic Piqué Polo Shirt" },
  { image: "/k6.png", title: "Premium Soft Touch Tee" },
  { image: "/k7.jpg", title: "Sport Dry Polo Shirt" },
  { image: "/k8.jpg", title: "Modern Graphic Tee" },
]);

const hoodie = shuffleArray([
  { image: "/h1.jpg", title: "Classic Pullover Hoodie" },
  { image: "/h2.jpg", title: "Zipper Front Fleece Hoodie" },
  { image: "/11.jpg", title: "Premium Heavyweight Hoodie" },
  { image: "/12.jpg", title: "Streetwear Oversized Hoodie" },
  { image: "/7.jpg", title: "Cotton Hoodie" },
  { image: "/8.png", title: "Soft Fleece Hoodie" },
]);

const displayDresses = (name: string, dresses: { image: string; title: string }[]) => {
  return (
    <div className="w-full px-6 py-8">
      <div className="m-[16px]">
        <h2 className="text-[26px] font-[500] px-[8px]">{name}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-[8px] py-[16px]">
          {dresses.map((item, index) => (
            <div
              key={`${item.title}-${index}`}
              className="flex flex-col rounded-xl overflow-hidden"
            >
              <div className="w-full h-[320px] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-[#F8FAFC] py-4 px-3 text-center">
                <p className="text-[20px] font-medium text-[#1a2238] leading-snug">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function ProductsComponent() {
  return (
    <div>
      <div className="text-center mt-[10%]">
        <h1 className="text-[60px]">Product Expertise</h1>
        <p className="font-[20px]">
          We specialize in a wide array of textile categories, ensuring the
          right technical expertise for every product type.
        </p>
      </div>

      <div>
        <h1 className="text-center text-[60px] mt-[5%]">Woven</h1>
      </div>
      {displayDresses("Pant", pant)}
      {displayDresses("Denim", denim)}

      <div>
        <h1 className="text-center text-[60px] mt-[5%]">Knitwear</h1>
      </div>
      {displayDresses("T-Shirt", tShirt)}
      {displayDresses("Hoodie", hoodie)}

      <div className="w-full px-6 py-10">
        <div className="m-[16px]">
          <div className="text-center mb-8">
            <h2 className="text-[44px] font-[500]">Public Folder Gallery</h2>
            <p className="text-[18px]">
              Every image currently available in the public folder.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-[8px] py-[16px]">
            {publicImages.map((item) => (
              <div
                key={item.fileName}
                className="flex flex-col rounded-xl overflow-hidden border border-gray-200 bg-white"
              >
                <div className="w-full h-[320px] overflow-hidden bg-[#F8FAFC]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="bg-[#F8FAFC] py-4 px-3 text-center">
                  <p className="text-[18px] font-medium text-[#1a2238] leading-snug">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <WorkProcess />
    </div>
  );
}
