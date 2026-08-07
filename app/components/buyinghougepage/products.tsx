import WorkProcess from "../homepage/WorkProcess";

const fivePocket = [
  {
    image: "/1.png",
    title: "Men’s Five Pocket TRS",
  },
  {
    image: "/2.png",
    title: "Men’s Five Pocket TRS",
  },
  {
    image: "/3.png",
    title: "Men’s Five Pocket TRS",
  },
  {
    image: "/4.png",
    title: "Men’s Five Pocket TRS",
  },
];

const ladiesDresses = [
  {
    image: "/5.png",
    title: "Ladies Dresses",
  },
  {
    image: "/6.png",
    title: "Ladies Dresses",
  },
  {
    image: "/7.jpg",
    title: "Ladies Dresses",
  },
  {
    image: "/8.png",
    title: "Ladies Dresses",
  },
];

const girlsDenim = [
  {
    image: "/9.png",
    title: "Girls Wide Leg Jegging",
  },
  {
    image: "/10.png",
    title: "Girls Wide Leg And Paper Bag ",
  },
  {
    image: "/11.jpg",
    title: "Premium Heavyweight Hoodie",
  },
  {
    image: "/12.jpg",
    title: "Streetwear Oversized Hoodie",
  },
];

const jeggings = [
  {
    image: "/13.jpg",
    title: "Stretch Fit Denim Jeggings",
  },
  {
    image: "/14.jpg",
    title: "High-Waist Slim Jeggings",
  },
  {
    image: "/15.jpg",
    title: "Comfort Flex Jeggings",
  },
  {
    image: "/16.jpg",
    title: "Streetwear Oversized Hoodie",
  },
];

const tShirt = [
  {
    image: "/k1.jpg",
    title: "Classic Cotton Crew T-Shirt",
  },
  {
    image: "/k2.png",
    title: "Premium Soft Touch V-Neck T-Shirt",
  },
  {
    image: "/k3.jpg",
    title: "Pique Polo Shirt",
  },
  {
    image: "/k4.jpg",
    title: "Urban Style Graphic T-Shirt",
  },
];

const polo = [
  {
    image: "/k5.jpg",
    title: "Classic Piqué Polo Shirt",
  },
  {
    image: "/k6.png",
    title: "Premium Soft Touch V-Neck T-Shirt",
  },
  {
    image: "/k7.jpg",
    title: "Sport Dry Polo Shirt",
  },
  {
    image: "/k8.jpg",
    title: "Urban Style Graphic T-Shirt",
  },
];

const hoodie = [
  {
    image: "/h1.jpg",
    title: "Classic Pullover Hoodie",
  },
  {
    image: "/h2.jpg",
    title: "Zipper Front Fleece Hoodie",
  },
  {
    image: "/11.jpg",
    title: "Premium Heavyweight Hoodie",
  },
  {
    image: "/12.jpg",
    title: "Streetwear Oversized Hoodie",
  },
];

const displayDresses = (name, dresses) => {
  return (
    <div className="w-full px-6 py-8">
      <div className="m-[16px]">
        <h2 className="text-[26px] font-[500] px-[8px]">{name}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-[8px] py-[16px]">
          {dresses.map((item, index) => (
            <div
              key={index}
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
        <h1 className="text-center text-[60px] mt-[5%]">Wooven</h1>
      </div>
      {displayDresses("Five pocket twill", fivePocket)};
      {displayDresses("Ladies Dress & Jackets", ladiesDresses)};
      {displayDresses("Girls Denim", girlsDenim)};
      {displayDresses("Jeggings", jeggings)};
      <div>
        <h1 className="text-center text-[60px] mt-[5%]">Knitwear</h1>
      </div>
      {displayDresses("T-Shirt", tShirt)};{displayDresses("Polo", polo)};
      {displayDresses("Hoodie", hoodie)};{displayDresses("Jeggings", jeggings)};
      <WorkProcess />
    </div>
  );
}
