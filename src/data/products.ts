import type { Product } from "@/types/product";

const baseProducts: Product[] = [
  {
    id: "MM4199",
    slug: "mm-ss-3pcs-elegant-auro-pot-combo-mm4199",
    name: "MM SS 3PCS Elegant Auro Pot Combo",
    shortName: "Elegant Auro Pot Combo",
    description:
      "Three-piece stainless steel Elegant Auro pot combo ideal for everyday cooking and festive occasions. Designed for even heat distribution and long-term durability.",
    metal: "steel",
    category: "Steel Products",
    subcategory: "Cook & Serve",
    materialGrade: "SS 304",
    finish: "hammered",
    capacityLitres: 6.5,
    sizeLabel: "Combo (S/M/L)",
    mrp: 3500,
    price: 1666,
    currency: "INR",
    inStock: true,
    tags: ["combo", "steel", "pot", "auro"],
    imageUrl: "/meenakshi-images/PR2404442409_image1_46.jpeg",
    sourceUrl:
      "https://www.meenakshiandmeenakshi.com/shop_list?product=MM4199",
  },
  {
    id: "MM4198",
    slug: "mm-ss-elegant-auro-pot-2-3l-mm4198",
    name: "MM SS Elegant Auro Pot 2.3L",
    shortName: "Elegant Auro Pot 2.3L",
    description:
      "Premium stainless steel Elegant Auro pot with 2.3L capacity — perfect for gravies, biriyani and rice. Heavy-gauge body with comfortable handles.",
    metal: "steel",
    category: "Steel Products",
    subcategory: "Handi",
    materialGrade: "SS 304",
    finish: "hammered",
    capacityLitres: 2.3,
    sizeLabel: "M",
    mrp: 1300,
    price: 649,
    currency: "INR",
    inStock: true,
    tags: ["steel", "handi", "auro"],
    imageUrl: "/meenakshi-images/PR3285526253_image1_84.jpeg",
    sourceUrl:
      "https://www.meenakshiandmeenakshi.com/shop_list?product=MM4198",
  },
  {
    id: "MM4197",
    slug: "mm-ss-elegant-auro-pot-2l-mm4197",
    name: "MM SS Elegant Auro Pot 2L",
    shortName: "Elegant Auro Pot 2L",
    description:
      "Stainless steel Elegant Auro pot with 2L capacity, ideal for daily curries and rice. Built to withstand heavy Indian cooking.",
    metal: "steel",
    category: "Steel Products",
    subcategory: "Handi",
    materialGrade: "SS 304",
    finish: "hammered",
    capacityLitres: 2,
    sizeLabel: "M",
    mrp: 1200,
    price: 599,
    currency: "INR",
    inStock: true,
    tags: ["steel", "pot", "daily-use"],
    imageUrl: "/meenakshi-images/PR4047297262_image1_85.jpeg",
    sourceUrl:
      "https://www.meenakshiandmeenakshi.com/shop_list?product=MM4197",
  },
  {
    id: "MM4196",
    slug: "mm-ss-elegant-auro-pot-1-5l-mm4196",
    name: "MM SS Elegant Auro Pot 1.5L",
    shortName: "Elegant Auro Pot 1.5L",
    description:
      "Compact 1.5L Elegant Auro stainless steel pot, perfect for small families, side dishes and reheating.",
    metal: "steel",
    category: "Steel Products",
    subcategory: "Handi",
    materialGrade: "SS 304",
    finish: "hammered",
    capacityLitres: 1.5,
    sizeLabel: "S",
    mrp: 1000,
    price: 499,
    currency: "INR",
    inStock: true,
    tags: ["steel", "pot", "small"],
    imageUrl: "/meenakshi-images/PR4597122821_image1_96.jpeg",
    sourceUrl:
      "https://www.meenakshiandmeenakshi.com/shop_list?product=MM4196",
  },
  {
    id: "MM4195",
    slug: "mm-ss-6pcs-sleek-full-set-sambadam-combo-mm4195",
    name: "MM SS 6PCS Sleek Full Set Sambadam Combo",
    shortName: "6PCS Sleek Sambadam Combo",
    description:
      "Complete 6-piece sleek stainless steel sambadam combo for bulk grain, rice and flour storage in traditional Indian kitchens.",
    metal: "steel",
    category: "Steel Products",
    subcategory: "Storage Container",
    materialGrade: "SS 202",
    finish: "glossy",
    capacityLitres: 25,
    sizeLabel: "Combo (XS–XL)",
    mrp: 6200,
    price: 2899,
    currency: "INR",
    inStock: true,
    tags: ["storage", "sambadam", "combo"],
    imageUrl: "/meenakshi-images/PR4625579996_image1_98.jpeg",
    sourceUrl:
      "https://www.meenakshiandmeenakshi.com/shop_list?product=MM4195",
  },
  {
    id: "MM4194",
    slug: "mm-ss-3pcs-sleek-big-sambadam-combo-mm4194",
    name: "MM SS 3PCS Sleek Big Sambadam Combo",
    shortName: "3PCS Big Sambadam Combo",
    description:
      "Set of 3 large sleek sambadam containers, ideal for storing rice, atta and lentils in bulk with a traditional stacked profile.",
    metal: "steel",
    category: "Steel Products",
    subcategory: "Storage Container",
    materialGrade: "SS 202",
    finish: "glossy",
    capacityLitres: 18,
    sizeLabel: "Combo (M/L/XL)",
    mrp: 3800,
    price: 1899,
    currency: "INR",
    inStock: true,
    tags: ["storage", "sambadam", "combo"],
    imageUrl: "/meenakshi-images/PR4725113632_image1_89.jpeg",
    sourceUrl:
      "https://www.meenakshiandmeenakshi.com/shop_list?product=MM4194",
  },
  {
    id: "MM4193",
    slug: "mm-ss-3pcs-sleek-medium-sambadam-combo-mm4193",
    name: "MM SS 3PCS Sleek Medium Sambadam Combo",
    shortName: "3PCS Medium Sambadam Combo",
    description:
      "Medium-sized sleek sambadam trio, perfect for pulses, millets and special flours, keeping your pantry organised.",
    metal: "steel",
    category: "Steel Products",
    subcategory: "Storage Container",
    materialGrade: "SS 202",
    finish: "glossy",
    capacityLitres: 12,
    sizeLabel: "Combo (S/M/L)",
    mrp: 2400,
    price: 1199,
    currency: "INR",
    inStock: true,
    tags: ["storage", "sambadam"],
    imageUrl: "/meenakshi-images/PR6757615777_image1_61.jpeg",
    sourceUrl:
      "https://www.meenakshiandmeenakshi.com/shop_list?product=MM4193",
  },
  {
    id: "MM4201",
    slug: "mm-water-bottle-glory-1000ml-with-jute-bag-combo-mm4201",
    name: "MM Water Bottle Glory 1000ml with Jute Bag Combo",
    shortName: "Glory Bottle 1000ml Combo",
    description:
      "Single-wall stainless steel water bottle (1000 ml) with eco-friendly jute bag for daily office, school and travel use.",
    metal: "steel",
    category: "Water Bottle",
    subcategory: "Stainless Steel",
    capacityMl: 1000,
    sizeLabel: "1L",
    mrp: 600,
    price: 299,
    currency: "INR",
    inStock: true,
    tags: ["bottle", "combo", "jute-bag"],
    imageUrl: "/meenakshi-images/PR6888473419_image1_62.jpeg",
    sourceUrl:
      "https://www.meenakshiandmeenakshi.com/shop_list?product=MM4201",
  },
  {
    id: "MM4200",
    slug: "mm-water-bottle-jute-bag-mm4200",
    name: "MM Water Bottle Jute Bag",
    shortName: "Jute Bottle Bag",
    description:
      "Durable jute bottle bag designed to carry a 1L steel bottle comfortably — ideal for school, office and travel.",
    metal: "steel",
    category: "Accessories",
    subcategory: "Bag",
    mrp: 150,
    price: 99,
    currency: "INR",
    inStock: true,
    tags: ["accessory", "bottle-bag"],
    imageUrl: "/meenakshi-images/PR7870757737_image1_68.jpeg",
    sourceUrl:
      "https://www.meenakshiandmeenakshi.com/shop_list?product=MM4200",
  },
  {
    id: "MM4192",
    slug: "mm-ss-4pcs-cd-line-maavu-dabba-mm4192",
    name: "MM SS 4PCS CD Line Maavu Dabba",
    shortName: "4PCS CD Line Maavu Dabba",
    description:
      "Four-piece CD line pattern maavu dabba set for storing idli batter, dosa batter and traditional flours neatly.",
    metal: "steel",
    category: "Steel Products",
    subcategory: "Maavu Dabba",
    materialGrade: "SS 202",
    finish: "glossy",
    capacityLitres: 8,
    sizeLabel: "Combo (S–L)",
    mrp: 3110,
    price: 1555,
    currency: "INR",
    inStock: true,
    tags: ["storage", "maavu-dabba"],
    imageUrl: "/meenakshi-images/PR9182885871_image1_25.jpeg",
    sourceUrl:
      "https://www.meenakshiandmeenakshi.com/shop_list?product=MM4192",
  },
  {
    id: "MM4191",
    slug: "mm-ss-4pcs-floral-maavu-dabba-mm4191",
    name: "MM SS 4PCS Floral Maavu Dabba",
    shortName: "4PCS Floral Maavu Dabba",
    description:
      "Floral-etched stainless steel maavu dabba set that keeps traditional batters and flours fresh and organised.",
    metal: "steel",
    category: "Steel Products",
    subcategory: "Maavu Dabba",
    materialGrade: "SS 202",
    finish: "glossy",
    capacityLitres: 8,
    sizeLabel: "Combo (S–L)",
    mrp: 3799,
    price: 1888,
    currency: "INR",
    inStock: true,
    tags: ["storage", "maavu-dabba"],
    imageUrl: "/meenakshi-images/PR9248144380_image1_60.jpeg",
    sourceUrl:
      "https://www.meenakshiandmeenakshi.com/shop_list?product=MM4191",
  },
  {
    id: "MM4190",
    slug: "mm-ss-rubber-finish-hot-and-cold-bottle-350ml-red-mm4190",
    name: "MM SS Rubber Finish Hot & Cold Bottle 350ml Red",
    shortName: "Rubber Finish Bottle 350ml",
    description:
      "Compact 350 ml stainless steel hot & cold bottle with red rubberised finish — perfect for kids and quick sips.",
    metal: "steel",
    category: "Water Bottle",
    subcategory: "Vacuum Bottle",
    capacityMl: 350,
    sizeLabel: "350ml",
    mrp: 800,
    price: 399,
    currency: "INR",
    inStock: true,
    tags: ["bottle", "vacuum", "kids"],
    imageUrl: "/meenakshi-images/PR9466319279_image1_78.jpeg",
    sourceUrl:
      "https://www.meenakshiandmeenakshi.com/shop_list?product=MM4190",
  },
];

function expandProducts(products: Product[]): Product[] {
  const variants: Product[] = [];

  for (const p of products) {
    variants.push(p);

    // Steel variants in different sizes
    if (p.metal === "steel" && p.capacityLitres && p.capacityLitres >= 1.5) {
      variants.push({
        ...p,
        id: `${p.id}-S`,
        slug: `${p.slug}-small`,
        name: `${p.name} – Small`,
        sizeLabel: "S",
        capacityLitres: p.capacityLitres * 0.7,
        price: Math.round(p.price * 0.82),
        mrp: Math.round(p.mrp * 0.82),
      });

      variants.push({
        ...p,
        id: `${p.id}-L`,
        slug: `${p.slug}-large`,
        name: `${p.name} – Large`,
        sizeLabel: "L",
        capacityLitres: p.capacityLitres * 1.3,
        price: Math.round(p.price * 1.18),
        mrp: Math.round(p.mrp * 1.18),
      });
    }

    // Create heritage gift-set variants for some items
    if (
      p.category === "Steel Products" &&
      (p.subcategory === "Handi" || p.subcategory === "Maavu Dabba")
    ) {
      variants.push({
        ...p,
        id: `${p.id}-HERITAGE`,
        slug: `${p.slug}-heritage-gift-set`,
        name: `${p.name} – Heritage Gift Set`,
        isHeritage: true,
        category: "Heritage Collections",
        subcategory: "Bridal & Festival Sets",
        tags: [...(p.tags ?? []), "heritage", "gift"],
        price: Math.round(p.price * 1.25),
        mrp: Math.round(p.mrp * 1.35),
      });
    }
  }

  // Duplicate a few curated brass & copper heritage pooja items
  const extraHeritage: Product[] = Array.from({ length: 40 }).map((_, index) => {
    const n = index + 1;
    const isBrass = n % 2 === 0;
    return {
      id: `MG${1000 + n}`,
      slug: isBrass
        ? `brass-pooja-vilakku-heritage-set-${n}`
        : `copper-kalasam-heritage-set-${n}`,
      name: isBrass
        ? `Brass Pooja Vilakku Set ${n}`
        : `Copper Heritage Kalasam Set ${n}`,
      description: isBrass
        ? "Hand-polished brass vilakku set crafted for daily pooja and special festival days."
        : "Traditional copper kalasam set designed for auspicious rituals, homam and festival poojas.",
      metal: isBrass ? "brass" : "copper",
      category: "Heritage Collections",
      subcategory: isBrass ? "Lamps (Vilakku)" : "Pooja Kalasam",
      isHeritage: true,
      materialGrade: isBrass ? "Lead-free brass" : "Pure copper",
      finish: isBrass ? "glossy" : "matte",
      capacityLitres: isBrass ? 0.75 : 1,
      sizeLabel: n % 3 === 0 ? "L" : n % 3 === 1 ? "S" : "M",
      thicknessGauge: 18,
      weightGrams: isBrass ? 650 : 550,
      mrp: isBrass ? 2200 : 2600,
      price: isBrass ? 1499 : 1899,
      currency: "INR",
      inStock: true,
      tags: [
        "heritage",
        "pooja",
        isBrass ? "brass" : "copper",
        n % 2 === 0 ? "festival" : "bridal",
      ],
      imageUrl: isBrass
        ? "/meenakshi-images/PR2404442409_image1_46.jpeg"
        : "/meenakshi-images/PR3285526253_image1_84.jpeg",
      sourceUrl: "https://www.meenakshiandmeenakshi.com/shop_list",
    };
  });

  return [...variants, ...extraHeritage];
}

export const products: Product[] = expandProducts(baseProducts);

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByMetal(metal: Product["metal"]): Product[] {
  return products.filter((p) => p.metal === metal);
}

export function getHeritageProducts(): Product[] {
  return products.filter((p) => p.isHeritage);
}

export function getFeaturedProducts(): Product[] {
  return products.slice(0, 12);
}


