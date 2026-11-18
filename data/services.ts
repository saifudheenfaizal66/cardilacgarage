export type ServiceCategorySlug =
  | "paint-protection"
  | "car-wash-cleaning"
  | "polishing-protection"
  | "interior-accessories"
  | "two-wheeler-care";

export interface ServiceItem {
  id: string;
  title: string;
  category: ServiceCategorySlug;
  categoryLabel: string;
  shortDescription: string;
  startingPriceLabel?: string;
  image: string;
  imageAlt: string;
  pricingIds: string[];
  warrantyBadge?: string;
  highlights: string[];
  variableNote?: string;
  confirmationNote?: string;
}

export interface ServiceCategoryGroup {
  slug: ServiceCategorySlug;
  code: string;
  title: string;
  subtitle: string;
}

export const SERVICE_CATEGORIES: ServiceCategoryGroup[] = [
  {
    slug: "paint-protection",
    code: "01",
    title: "Paint Protection",
    subtitle:
      "Ceramic, Graphene, Borophene coatings, Garware PPF, and Antic Layer surface shields.",
  },
  {
    slug: "car-wash-cleaning",
    code: "02",
    title: "Car Wash & Cleaning",
    subtitle:
      "Structured foam washes, under chassis wash, and ceramic decontamination washes.",
  },
  {
    slug: "polishing-protection",
    code: "03",
    title: "Polishing & Protection",
    subtitle:
      "Single-step machine polishing, graphene waxing, 3M & Turtle Wax underbody protection, silencer coating, cooling film, headlight restoration, tail lamp tinting, and engine bay cleaning.",
  },
  {
    slug: "interior-accessories",
    code: "04",
    title: "Interior & Accessories",
    subtitle:
      "Custom Feno, Napa, and Porsche leather seat covers alongside interior deep cleaning.",
  },
  {
    slug: "two-wheeler-care",
    code: "05",
    title: "Two-Wheeler Care",
    subtitle:
      "Basic and detailed foam wash with tyre dressing and chain care for motorcycles and scooters.",
  },
];

export const SERVICES_DATA: ServiceItem[] = [
  // CATEGORY 1 – PAINT PROTECTION
  {
    id: "ceramic-coating",
    title: "Ceramic Coating",
    category: "paint-protection",
    categoryLabel: "Paint Protection",
    shortDescription:
      "Ceramic paint protection for enhanced gloss and easier washing.",
    image: "/images/ceramic-coating.jpg",
    imageAlt: "Ceramic coating water beading on car hood at Cardilac",
    pricingIds: ["ceramic-coating"],
    highlights: [
      "Enhanced paint gloss",
      "Easier maintenance & washing",
      "Durable protective layer",
    ],
  },
  {
    id: "graphene-coating",
    title: "Graphene Coating",
    category: "paint-protection",
    categoryLabel: "Paint Protection",
    shortDescription:
      "Russian brand graphene coating providing paint glow protection, anti-yellowing, and hydrophobic effect.",
    image: "/images/graphene-coating.jpg",
    imageAlt: "Graphene coating applied on vehicle bodywork at Cardilac",
    pricingIds: ["graphene-coating"],
    highlights: [
      "Russian brand",
      "Paint glow protection",
      "Anti-yellowing",
      "Hydrophobic effect",
      "Easy to maintain & wash",
    ],
  },
  {
    id: "borophene-coating",
    title: "Borophene Coating",
    category: "paint-protection",
    categoryLabel: "Paint Protection",
    shortDescription:
      "Self-healing coating that eliminates light scratches with heat above 60°, with hydrophobic effect and paint glow protection.",
    image: "/images/borophene-coating.jpg",
    imageAlt: "Borophene coating with thermal self-healing at Cardilac",
    pricingIds: ["borophene-coating"],
    highlights: [
      "Self healing",
      "Hydrophobic effect",
      "Paint glow protection",
      "Anti-yellowing",
      "Easy to maintain & wash",
      "Eliminates light scratches with heat above 60°",
    ],
  },
  {
    id: "ppf-wrapping",
    title: "PPF (Paint Protection Film)",
    category: "paint-protection",
    categoryLabel: "Paint Protection",
    shortDescription:
      "Garware premium quality paint protection film shielding against stone chips, scratches, UV rays, and environmental damage.",
    image: "/images/ppf-wrapping.jpg",
    imageAlt: "Garware Paint Protection Film installation at Cardilac",
    pricingIds: ["ppf-wrapping"],
    warrantyBadge: "5-Year Warranty",
    highlights: [
      "5-year warranty",
      "Garware (premium quality)",
      "Typically 175-195 microns",
      "Protects paint from stone chips, scratches, UV rays & environmental damage",
    ],
  },
  {
    id: "antic-layer",
    title: "Antic Layer",
    category: "paint-protection",
    categoryLabel: "Paint Protection",
    shortDescription:
      "Antic protective layer backed by a 5-year warranty.",
    image: "/images/anti-rust-layer.jpg",
    imageAlt: "Antic protective layer applied at Cardilac",
    pricingIds: ["antic-layer"],
    warrantyBadge: "5-Year Warranty",
    highlights: [
      "5-year warranty",
      "Rate depends on quality",
    ],
    variableNote: "Starting ₹3,500 to ₹15,000, rate depends on quality.",
    confirmationNote: "Spelling 'Antic Layer' flagged for client confirmation (replaces Anti-Rust Layer).",
  },

  // CATEGORY 2 – CAR WASH & CLEANING
  {
    id: "basic-car-wash",
    title: "Basic Wash",
    category: "car-wash-cleaning",
    categoryLabel: "Car Wash & Cleaning",
    shortDescription:
      "Body foam wash, alloy and wheel arch cleaning, mat washing, interior vacuum, and tyre polishing.",
    image: "/images/foam-wash.jpg",
    imageAlt: "Basic foam car wash at Cardilac",
    pricingIds: ["basic-car-wash"],
    highlights: [
      "Body foam wash",
      "Alloys-tyre-wheel arch cleaning",
      "Floor mat washing",
      "Interior vacuum",
      "Tyre polishing",
      "Paper floor mat (2 nos)",
      "Hanging perfume",
    ],
  },
  {
    id: "executive-car-wash",
    title: "Executive Wash",
    category: "car-wash-cleaning",
    categoryLabel: "Car Wash & Cleaning",
    shortDescription:
      "Enhanced foam wash with under chassis wash, glass cleaning, and dashboard dressing.",
    image: "/images/executive-wash.jpg",
    imageAlt: "Executive car wash with under-chassis cleaning at Cardilac",
    pricingIds: ["executive-car-wash"],
    highlights: [
      "Body foam wash",
      "Under chassis wash",
      "Floor mat washing",
      "Alloy-tyre-wheel arch cleaning",
      "Glass cleaning",
      "Interior vacuum",
      "Dashboard dressing",
      "Tyre polishing",
      "Paper floor mat (2 nos)",
      "Hanging perfume",
    ],
  },
  {
    id: "premium-ceramic-wash",
    title: "Premium / Ceramic Wash",
    category: "car-wash-cleaning",
    categoryLabel: "Car Wash & Cleaning",
    shortDescription:
      "Ceramic foam wash with under chassis wash, iron & tar removal, wax application, and A/C vent steaming.",
    image: "/images/ceramic-wash.jpg",
    imageAlt: "Premium ceramic car wash at Cardilac",
    pricingIds: ["premium-ceramic-wash"],
    highlights: [
      "Body foam wash",
      "Ceramic foam wash",
      "Under chassis wash",
      "Floor mat washing",
      "Alloy-tyre-wheel arch cleaning",
      "Glass cleaning",
      "Interior vacuum",
      "Iron removing",
      "Tar removing",
      "Wax application",
      "Dashboard dressing",
      "A/C vent steaming",
      "Tyre polishing",
      "Paper floor mat (4 nos)",
      "Hanging perfume",
    ],
  },

  // CATEGORY 3 – POLISHING & PROTECTION
  {
    id: "single-step-polishing",
    title: "Car Polishing (single step)",
    category: "polishing-protection",
    categoryLabel: "Polishing & Protection",
    shortDescription:
      "Single step machine polishing to restore paint depth and gloss.",
    image: "/images/single-step-polishing.jpg",
    imageAlt: "Single step car polishing at Cardilac",
    pricingIds: ["single-step-polishing"],
    highlights: [
      "Single step machine polishing",
      "Paint gloss enhancement",
    ],
  },
  {
    id: "ceramic-polishing",
    title: "Ceramic Polishing with Graphene Waxing",
    category: "polishing-protection",
    categoryLabel: "Polishing & Protection",
    shortDescription:
      "Ceramic polishing paired with graphene waxing backed by a 1-year warranty.",
    image: "/images/ceramic-polishing.jpg",
    imageAlt: "Ceramic polishing with graphene wax at Cardilac",
    pricingIds: ["ceramic-polishing-graphene"],
    warrantyBadge: "1-Year Warranty",
    highlights: [
      "Ceramic polishing",
      "Graphene waxing",
      "1-year warranty",
    ],
  },
  {
    id: "underbody-coating",
    title: "Underbody Coating",
    category: "polishing-protection",
    categoryLabel: "Polishing & Protection",
    shortDescription:
      "Anti-rust underbody coating available in 3M (1-year warranty) and Turtle Wax (4-year warranty).",
    image: "/images/underbody-coating.jpg",
    imageAlt: "Underbody rubber protective coating at Cardilac",
    pricingIds: ["underbody-3m", "underbody-turtle-wax"],
    warrantyBadge: "1–4 Yr Warranty",
    highlights: [
      "3M: 1-year warranty, rubber type material, anti-rust",
      "Turtle Wax: 4-year warranty, premium rubber coating, anti-rust, exceptional durability",
    ],
  },
  {
    id: "silencer-coating",
    title: "Silencer Coating (Turtle Wax)",
    category: "polishing-protection",
    categoryLabel: "Polishing & Protection",
    shortDescription:
      "Turtle Wax protective silencer coating with 1-year warranty for all cars.",
    image: "/images/silencer-coating.jpg",
    imageAlt: "Silencer protective coating at Cardilac",
    pricingIds: ["silencer-coating"],
    warrantyBadge: "1-Year Warranty",
    highlights: [
      "Turtle Wax material",
      "1-year warranty",
      "Flat rate for all cars",
    ],
  },
  {
    id: "cooling-film",
    title: "Cooling Film",
    category: "polishing-protection",
    categoryLabel: "Polishing & Protection",
    shortDescription:
      "Window cooling film in 50% or 35% darkness with a 1-year warranty.",
    image: "/images/cooling-film.jpg",
    imageAlt: "Cooling film installation on car windows at Cardilac",
    pricingIds: ["cooling-film"],
    warrantyBadge: "1-Year Warranty",
    highlights: [
      "Darkness 50% or 35%",
      "1-year warranty",
      "Available for Hatchback, Sedan & SUV",
    ],
  },
  {
    id: "headlight-restoration",
    title: "Headlight Restoration",
    category: "polishing-protection",
    categoryLabel: "Polishing & Protection",
    shortDescription:
      "Removes lens oxidation and haze to restore optical clarity.",
    image: "/images/headlight-restoration.jpg",
    imageAlt: "Headlight restoration at Cardilac",
    pricingIds: ["headlight-restoration"],
    highlights: [
      "Removes lens oxidation and haze",
      "Restores optical clarity",
    ],
  },
  {
    id: "tail-lamp-tinting",
    title: "Tail Lamp Tinting",
    category: "polishing-protection",
    categoryLabel: "Polishing & Protection",
    shortDescription:
      "Tail lamp tinting treatment. Price depends on vehicle model.",
    image: "/images/tail-lamp-smoking.jpg",
    imageAlt: "Tail lamp tinting at Cardilac",
    pricingIds: ["tail-lamp-tinting"],
    highlights: [
      "Normal tinting treatment",
      "Custom tail lamp styling",
    ],
    variableNote: "Normal ₹1,200 (depending on model).",
  },
  {
    id: "engine-bay-cleaning",
    title: "Engine Bay Deep Cleaning",
    category: "polishing-protection",
    categoryLabel: "Polishing & Protection",
    shortDescription:
      "Targeted engine compartment degreasing and cleaning.",
    image: "/images/engine-bay.jpg",
    imageAlt: "Engine bay deep cleaning at Cardilac",
    pricingIds: ["engine-bay-cleaning"],
    highlights: [
      "Engine bay degreasing",
      "Compartment cleaning",
    ],
    variableNote: "Rate not fixed, depends on condition.",
  },

  // CATEGORY 4 – INTERIOR & ACCESSORIES
  {
    id: "interior-deep-cleaning",
    title: "Interior Deep Cleaning",
    category: "interior-accessories",
    categoryLabel: "Interior & Accessories",
    shortDescription:
      "Intensive cabin interior deep cleaning for upholstery, carpets, and panels.",
    image: "/images/interior-cleaning.jpg",
    imageAlt: "Interior deep cleaning at Cardilac",
    pricingIds: ["interior-deep-cleaning"],
    highlights: [
      "Deep cabin interior cleaning",
      "Upholstery, carpets, and trim care",
    ],
    variableNote: "Rate not fixed, depends on the work.",
  },
  {
    id: "feno-leather-seat-covers",
    title: "Feno Leather Seat Covers",
    category: "interior-accessories",
    categoryLabel: "Interior & Accessories",
    shortDescription:
      "Custom fitted Feno leather seat covers.",
    image: "/images/seat-covers-feno.jpg",
    imageAlt: "Feno leather seat covers at Cardilac",
    pricingIds: ["seat-covers-feno"],
    highlights: [
      "Feno Leather",
      "Available for S, L, 7-seater & XL",
    ],
  },
  {
    id: "napa-leather-seat-covers",
    title: "Napa Leather Seat Covers",
    category: "interior-accessories",
    categoryLabel: "Interior & Accessories",
    shortDescription:
      "Custom fitted Napa leather seat covers using Napa material.",
    image: "/images/seat-covers-napa.jpg",
    imageAlt: "Napa leather seat covers at Cardilac",
    pricingIds: ["seat-covers-napa"],
    highlights: [
      "Napa Leather (Napa material)",
      "Available for S, L, 7-seater & XL",
    ],
  },
  {
    id: "porsche-leather-seat-covers",
    title: "Porsche Leather Seat Covers",
    category: "interior-accessories",
    categoryLabel: "Interior & Accessories",
    shortDescription:
      "Premium quality Porsche leather seat covers with optional armrest.",
    image: "/images/seat-covers-porsche.jpg",
    imageAlt: "Porsche leather seat covers at Cardilac",
    pricingIds: ["seat-covers-porsche"],
    highlights: [
      "Porsche Leather (premium quality)",
      "Arm rest: +₹600 extra",
      "Available for S, L, 7-seater & XL",
    ],
    confirmationNote:
      "7-seat and XL values (₹8,000 / ₹8,500) unconfirmed; kept as supplied and flagged for client confirmation.",
  },

  // CATEGORY 5 – TWO-WHEELER CARE
  {
    id: "basic-bike-wash",
    title: "Basic Bike Wash",
    category: "two-wheeler-care",
    categoryLabel: "Two-Wheeler Care",
    shortDescription:
      "Body foam wash and tyre dressing for two-wheelers.",
    image: "/images/bike-wash-snowfoam.jpg",
    imageAlt: "Basic bike foam wash at Cardilac",
    pricingIds: ["basic-bike-wash"],
    highlights: [
      "Body foam wash",
      "Tyre dressing",
    ],
  },
  {
    id: "detailed-bike-wash",
    title: "Detailed Bike Wash",
    category: "two-wheeler-care",
    categoryLabel: "Two-Wheeler Care",
    shortDescription:
      "Body foam wash, tyre dressing, chain cleaning, and spray wax application.",
    image: "/images/bike-wash-detailed.jpg",
    imageAlt: "Detailed bike wash at Cardilac",
    pricingIds: ["detailed-bike-wash"],
    highlights: [
      "Body foam wash",
      "Tyre dressing",
      "Chain cleaning",
      "Spray wax application",
    ],
  },
];
