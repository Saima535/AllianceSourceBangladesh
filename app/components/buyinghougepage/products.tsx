import WorkProcess from "../homepage/WorkProcess";

type ProductCard = {
  title: string;
  image: string;
};

const buyingHouseImages = [
  "/denim.jpg",
  "/hoodie.jpg",
  "/k1.jpg",
  "/pant.jpg",
  "/tshirt.jpg",
];

const shuffleArray = <T,>(items: T[]) => {
  const shuffled = [...items];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
};

const assignImages = (titles: string[]): ProductCard[] => {
  const shuffledImages = shuffleArray(buyingHouseImages);

  return shuffleArray(
    titles.map((title, index) => ({
      title,
      image: shuffledImages[index % shuffledImages.length],
    }))
  );
};

const pant = assignImages([
  "Classic Pant",
  "Smart Fit Pant",
  "Cargo Pant",
  "Slim Pant",
  "Denim Pant",
  "Wide Leg Pant",
]);

const denim = assignImages([
  "Stretch Fit Denim",
  "High-Waist Denim",
  "Comfort Denim",
  "Premium Denim",
  "Denim Style",
  "Classic Denim",
]);

const tShirt = assignImages([
  "Classic Cotton Crew T-Shirt",
  "Premium Soft Touch V-Neck T-Shirt",
  "Pique Polo Shirt",
  "Urban Style Graphic T-Shirt",
  "Classic Pique Polo Shirt",
  "Premium Soft Touch Tee",
  "Sport Dry Polo Shirt",
  "Modern Graphic Tee",
]);

const hoodie = assignImages([
  "Classic Pullover Hoodie",
  "Zipper Front Fleece Hoodie",
  "Premium Heavyweight Hoodie",
  "Streetwear Oversized Hoodie",
  "Cotton Hoodie",
  "Soft Fleece Hoodie",
]);

const displayDresses = (name: string, dresses: ProductCard[]) => {
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
              <div className="w-full h-[320px] overflow-hidden bg-[#F8FAFC]">
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

      <WorkProcess />
    </div>
  );
}
