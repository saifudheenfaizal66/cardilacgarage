export type PricingCategoryId =
  | "all"
  | "car-wash"
  | "bike-wash"
  | "paint-protection"
  | "polishing"
  | "interior-care"
  | "accessories";

export interface PricingTier {
  size: string;
  price: number;
}

export interface PricingEntry {
  id: string;
  serviceId: string;
  title: string;
  subtitle?: string;
  category: Exclude<PricingCategoryId, "all">;
  description?: string;
  pricingType: "tiers" | "flat" | "range";
  tiers?: PricingTier[];
  flatPrice?: number;
  flatPriceLabel?: string;
  rangeMin?: number;
  rangeMax?: number;
  features: string[];
  warrantyBadge?: string;
  variablePricingNote?: string;
  clientConfirmationNote?: string;
}

export const PRICING_CATEGORIES: { id: PricingCategoryId; label: string }[] = [
  { id: "all", label: "All Services" },
  { id: "car-wash", label: "Car Wash" },
  { id: "paint-protection", label: "Paint Protection" },
  { id: "polishing", label: "Polishing & Protection" },
  { id: "interior-care", label: "Interior Care" },
  { id: "accessories", label: "Seat Covers & Film" },
  { id: "bike-wash", label: "Bike Wash" },
];

export function formatINR(amount: number): string {
  return `₹${amount.toLocaleString("en-IN")}`;
}

export const PRICING_DATA: PricingEntry[] = [
  // CAR WASH PACKAGES
  {
    id: "basic-car-wash",
    serviceId: "basic-car-wash",
    title: "Basic Wash",
    category: "car-wash",
    description:
      "Body foam wash, alloy and wheel arch cleaning, mat washing, interior vacuum, and tyre polishing.",
    pricingType: "tiers",
    tiers: [
      { size: "Small", price: 350 },
      { size: "Medium", price: 450 },
      { size: "Large", price: 500 },
      { size: "X-Large", price: 550 },
      { size: "XX-Large", price: 600 },
    ],
    features: [
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
    serviceId: "executive-car-wash",
    title: "Executive Wash",
    category: "car-wash",
    description:
      "Enhanced wash adding under-chassis washing, glass clarity, and dashboard dressing.",
    pricingType: "tiers",
    tiers: [
      { size: "Small", price: 450 },
      { size: "Medium", price: 500 },
      { size: "Large", price: 550 },
      { size: "X-Large", price: 650 },
      { size: "XX-Large", price: 700 },
    ],
    features: [
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
    serviceId: "premium-ceramic-wash",
    title: "Premium / Ceramic Wash",
    category: "car-wash",
    description:
      "Ceramic foam wash with under chassis wash, iron & tar removal, wax application, and A/C vent steaming.",
    pricingType: "tiers",
    tiers: [
      { size: "Small", price: 900 },
      { size: "Medium", price: 1000 },
      { size: "Large", price: 1200 },
      { size: "X-Large", price: 1400 },
      { size: "XX-Large", price: 1600 },
    ],
    features: [
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

  // PAINT PROTECTION
  {
    id: "ceramic-coating",
    serviceId: "ceramic-coating",
    title: "Ceramic Coating",
    category: "paint-protection",
    description:
      "Ceramic paint protection for enhanced gloss and easier washing.",
    pricingType: "tiers",
    tiers: [
      { size: "S", price: 15500 },
      { size: "M", price: 18500 },
      { size: "L", price: 21500 },
      { size: "XL", price: 23500 },
      { size: "XXL", price: 25500 },
    ],
    features: [
      "Enhanced paint gloss",
      "Easier maintenance & washing",
      "Durable protective layer",
    ],
  },
  {
    id: "graphene-coating",
    serviceId: "graphene-coating",
    title: "Graphene Coating",
    category: "paint-protection",
    description:
      "Russian brand graphene coating providing paint glow protection, anti-yellowing, and hydrophobic effect.",
    pricingType: "tiers",
    tiers: [
      { size: "S", price: 22000 },
      { size: "M", price: 29000 },
      { size: "L", price: 35000 },
      { size: "XL", price: 45000 },
      { size: "XXL", price: 52000 },
    ],
    features: [
      "Russian brand",
      "Paint glow protection",
      "Anti-yellowing",
      "Hydrophobic effect",
      "Easy to maintain & wash",
    ],
  },
  {
    id: "borophene-coating",
    serviceId: "borophene-coating",
    title: "Borophene Coating",
    category: "paint-protection",
    description:
      "Self-healing coating that eliminates light scratches with heat above 60°, with hydrophobic effect and paint glow protection.",
    pricingType: "tiers",
    tiers: [
      { size: "S", price: 27000 },
      { size: "M", price: 34000 },
      { size: "L", price: 40000 },
      { size: "XL", price: 50000 },
      { size: "XXL", price: 58000 },
    ],
    features: [
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
    serviceId: "ppf-wrapping",
    title: "PPF (Paint Protection Film)",
    category: "paint-protection",
    description:
      "Garware premium quality paint protection film shielding factory paint.",
    pricingType: "tiers",
    warrantyBadge: "5-Year Warranty",
    tiers: [
      { size: "S", price: 75000 },
      { size: "M", price: 85000 },
      { size: "L", price: 95000 },
      { size: "XL", price: 105000 },
      { size: "XXL", price: 125000 },
    ],
    features: [
      "5-year warranty",
      "Garware (premium quality)",
      "Typically 175-195 microns",
      "Protects paint from stone chips, scratches, UV rays & environmental damage",
    ],
  },
  {
    id: "antic-layer",
    serviceId: "antic-layer",
    title: "Antic Layer",
    category: "paint-protection",
    description:
      "Antic protective layer backed by a 5-year warranty.",
    pricingType: "range",
    rangeMin: 3500,
    rangeMax: 15000,
    warrantyBadge: "5-Year Warranty",
    features: [
      "5-year warranty",
      "Rate depends on quality",
    ],
    variablePricingNote: "Starting ₹3,500 to ₹15,000, rate depends on quality.",
    clientConfirmationNote:
      "Spelling 'Antic Layer' flagged for client confirmation (replaces Anti-Rust Layer).",
  },

  // POLISHING & PROTECTIVE TREATMENTS
  {
    id: "single-step-polishing",
    serviceId: "single-step-polishing",
    title: "Car Polishing (single step)",
    category: "polishing",
    description:
      "Single step machine polishing to restore paint depth and gloss.",
    pricingType: "tiers",
    tiers: [
      { size: "S", price: 3500 },
      { size: "M", price: 4000 },
      { size: "L", price: 4500 },
      { size: "XL", price: 5000 },
      { size: "XXL", price: 5500 },
    ],
    features: [
      "Single step machine polishing",
      "Paint gloss enhancement",
    ],
  },
  {
    id: "ceramic-polishing-graphene",
    serviceId: "ceramic-polishing",
    title: "Ceramic Polishing with Graphene Waxing",
    category: "polishing",
    description:
      "Ceramic polishing paired with graphene waxing backed by a 1-year warranty.",
    pricingType: "tiers",
    warrantyBadge: "1-Year Warranty",
    tiers: [
      { size: "S", price: 8999 },
      { size: "M", price: 9500 },
      { size: "L", price: 9999 },
      { size: "XL", price: 10500 },
      { size: "XXL", price: 10999 },
    ],
    features: [
      "Ceramic polishing",
      "Graphene waxing",
      "1-year warranty",
    ],
  },
  {
    id: "underbody-3m",
    serviceId: "underbody-coating",
    title: "Underbody Coating — 3M",
    subtitle: "Rubber type material, anti-rust",
    category: "polishing",
    pricingType: "tiers",
    warrantyBadge: "1-Year Warranty",
    tiers: [
      { size: "S", price: 2800 },
      { size: "M", price: 3100 },
      { size: "L", price: 3400 },
      { size: "XL", price: 3700 },
      { size: "XXL", price: 3950 },
    ],
    features: [
      "1-year warranty",
      "Rubber type material",
      "Anti-rust",
    ],
  },
  {
    id: "underbody-turtle-wax",
    serviceId: "underbody-coating",
    title: "Underbody Coating — Turtle Wax",
    subtitle: "Premium rubber coating",
    category: "polishing",
    pricingType: "tiers",
    warrantyBadge: "4-Year Warranty",
    tiers: [
      { size: "S", price: 4000 },
      { size: "M", price: 4200 },
      { size: "L", price: 4700 },
      { size: "XL", price: 5500 },
      { size: "XXL", price: 6500 },
    ],
    features: [
      "4-year warranty",
      "Premium rubber coating",
      "Anti-rust",
      "Exceptional durability",
    ],
  },
  {
    id: "silencer-coating",
    serviceId: "silencer-coating",
    title: "Silencer Coating (Turtle Wax)",
    subtitle: "Material: Turtle Wax",
    category: "polishing",
    description:
      "Turtle Wax protective silencer coating with 1-year warranty for all cars.",
    pricingType: "flat",
    flatPrice: 1200,
    flatPriceLabel: "₹1,200 for all cars",
    warrantyBadge: "1-Year Warranty",
    features: [
      "Turtle Wax material",
      "1-year warranty",
      "Flat rate for all cars",
    ],
  },
  {
    id: "headlight-restoration",
    serviceId: "headlight-restoration",
    title: "Headlight Restoration",
    category: "polishing",
    description:
      "Restores optical clarity to oxidized and hazy headlamp lenses.",
    pricingType: "tiers",
    tiers: [
      { size: "S", price: 600 },
      { size: "M", price: 600 },
      { size: "L", price: 600 },
      { size: "XL", price: 800 },
      { size: "XXL", price: 800 },
    ],
    features: [
      "Removes lens oxidation and haze",
      "Restores optical clarity",
    ],
  },
  {
    id: "tail-lamp-tinting",
    serviceId: "tail-lamp-tinting",
    title: "Tail Lamp Tinting",
    category: "polishing",
    description: "Normal tinting treatment for tail lamps.",
    pricingType: "flat",
    flatPrice: 1200,
    flatPriceLabel: "Normal: ₹1,200 (depending on model)",
    features: [
      "Normal tinting treatment",
      "Price depends on vehicle model",
    ],
    variablePricingNote: "Price depends on model.",
  },
  {
    id: "engine-bay-cleaning",
    serviceId: "engine-bay-cleaning",
    title: "Engine Bay Deep Cleaning",
    category: "polishing",
    description:
      "Targeted engine compartment degreasing and cleaning.",
    pricingType: "tiers",
    tiers: [
      { size: "S", price: 400 },
      { size: "M", price: 550 },
      { size: "L", price: 650 },
      { size: "XL", price: 650 },
      { size: "XXL", price: 750 },
    ],
    features: [
      "Engine bay degreasing",
      "Compartment cleaning",
    ],
    variablePricingNote: "Rate not fixed, depends on condition.",
  },

  // INTERIOR CARE & SEAT COVERS
  {
    id: "interior-deep-cleaning",
    serviceId: "interior-deep-cleaning",
    title: "Interior Deep Cleaning",
    category: "interior-care",
    description:
      "Intensive cabin interior deep cleaning for upholstery, carpets, and panels.",
    pricingType: "tiers",
    tiers: [
      { size: "S", price: 2000 },
      { size: "M", price: 2500 },
      { size: "L", price: 3000 },
      { size: "XL", price: 3500 },
      { size: "XXL", price: 4000 },
    ],
    features: [
      "Deep cabin interior cleaning",
      "Upholstery, carpets, and trim care",
    ],
    variablePricingNote:
      "Rate not fixed, depends on the work.",
  },
  {
    id: "seat-covers-feno",
    serviceId: "feno-leather-seat-covers",
    title: "Feno Leather Seat Covers",
    category: "accessories",
    description: "Custom fitted Feno leather seat covers.",
    pricingType: "tiers",
    tiers: [
      { size: "S", price: 6000 },
      { size: "L", price: 6500 },
      { size: "7-Seater", price: 8000 },
      { size: "XL", price: 8500 },
    ],
    features: [
      "Feno Leather",
      "Available for S, L, 7-seater & XL",
    ],
  },
  {
    id: "seat-covers-napa",
    serviceId: "napa-leather-seat-covers",
    title: "Napa Leather Seat Covers",
    category: "accessories",
    description: "Custom fitted Napa leather seat covers using Napa material.",
    pricingType: "tiers",
    tiers: [
      { size: "S", price: 7000 },
      { size: "L", price: 8000 },
      { size: "7-Seater", price: 9000 },
      { size: "XL", price: 9500 },
    ],
    features: [
      "Napa Leather (Napa material)",
      "Available for S, L, 7-seater & XL",
    ],
  },
  {
    id: "seat-covers-porsche",
    serviceId: "porsche-leather-seat-covers",
    title: "Porsche Leather Seat Covers",
    category: "accessories",
    description: "Porsche leather seat covers in premium quality with optional armrest.",
    pricingType: "tiers",
    tiers: [
      { size: "S", price: 9500 },
      { size: "L", price: 10000 },
      { size: "7-Seater", price: 8000 },
      { size: "XL", price: 8500 },
    ],
    features: [
      "Porsche Leather (premium quality)",
      "Arm rest: +₹600 extra",
      "Available for S, L, 7-seater & XL",
    ],
    clientConfirmationNote:
      "Note: 7-Seater (₹8,000) and XL (₹8,500) values are unconfirmed; kept as supplied and flagged for client confirmation.",
  },
  {
    id: "cooling-film",
    serviceId: "cooling-film",
    title: "Cooling Film",
    category: "accessories",
    description:
      "Window cooling film available in 50% and 35% darkness options with a 1-year warranty.",
    pricingType: "tiers",
    warrantyBadge: "1-Year Warranty",
    tiers: [
      { size: "Hatchback", price: 3000 },
      { size: "Sedan", price: 3200 },
      { size: "SUV", price: 4200 },
    ],
    features: [
      "Darkness 50% or 35%",
      "1-year warranty",
    ],
  },

  // TWO-WHEELER SERVICES
  {
    id: "basic-bike-wash",
    serviceId: "basic-bike-wash",
    title: "Basic Bike Wash",
    category: "bike-wash",
    description: "Foam wash and tyre dressing for two-wheelers.",
    pricingType: "tiers",
    tiers: [
      { size: "Small", price: 200 },
      { size: "Medium", price: 250 },
      { size: "Large", price: 300 },
      { size: "XL", price: 350 },
    ],
    features: [
      "Body foam wash",
      "Tyre dressing",
    ],
  },
  {
    id: "detailed-bike-wash",
    serviceId: "detailed-bike-wash",
    title: "Detailed Bike Wash",
    category: "bike-wash",
    description:
      "Comprehensive two-wheeler wash with chain cleaning and spray wax application.",
    pricingType: "tiers",
    tiers: [
      { size: "Small", price: 300 },
      { size: "Medium", price: 350 },
      { size: "Large", price: 450 },
      { size: "XL", price: 500 },
    ],
    features: [
      "Body foam wash",
      "Tyre dressing",
      "Chain cleaning",
      "Spray wax application",
    ],
  },
];
