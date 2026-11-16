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
  pricingType: "tiers" | "flat" | "range" | "consultation";
  tiers?: PricingTier[];
  flatPrice?: number;
  flatPriceLabel?: string;
  rangeMin?: number;
  rangeMax?: number;
  features: string[];
  warrantyBadge?: string;
  highlightBadge?: "Popular" | "Featured Premium";
  variablePricingNote?: string;
  clientConfirmationNote?: string;
}

export const PRICING_CATEGORIES: { id: PricingCategoryId; label: string }[] = [
  { id: "all", label: "All Services" },
  { id: "car-wash", label: "Car Wash" },
  { id: "bike-wash", label: "Bike Wash" },
  { id: "paint-protection", label: "Paint Protection" },
  { id: "polishing", label: "Polishing" },
  { id: "interior-care", label: "Interior Care" },
  { id: "accessories", label: "Accessories" },
];

export function formatINR(amount: number): string {
  return `₹${amount.toLocaleString("en-IN")}`;
}

export const PRICING_DATA: PricingEntry[] = [
  // 4.8 CAR WASH PACKAGES
  {
    id: "basic-car-wash",
    serviceId: "basic-car-wash",
    title: "Basic / Normal Wash",
    category: "car-wash",
    description:
      "Thorough exterior foam wash and interior vacuuming for everyday vehicle upkeep.",
    pricingType: "tiers",
    tiers: [
      { size: "S", price: 350 },
      { size: "M", price: 450 },
      { size: "L", price: 500 },
      { size: "XL", price: 550 },
      { size: "XXL", price: 600 },
    ],
    features: [
      "Body foam wash",
      "Alloy, tyre and wheel arch cleaning",
      "Floor mat washing",
      "Interior vacuum",
      "Tyre polishing",
      "Two paper floor mats",
      "Hanging perfume",
    ],
  },
  {
    id: "executive-car-wash",
    serviceId: "executive-car-wash",
    title: "Executive Wash",
    category: "car-wash",
    description:
      "Enhanced wash adding under-chassis rinsing, glass clarity, and dashboard conditioning.",
    pricingType: "tiers",
    highlightBadge: "Popular",
    tiers: [
      { size: "S", price: 450 },
      { size: "M", price: 500 },
      { size: "L", price: 550 },
      { size: "XL", price: 650 },
      { size: "XXL", price: 700 },
    ],
    features: [
      "Body foam wash",
      "Under-chassis wash",
      "Floor mat washing",
      "Alloy, tyre and wheel arch cleaning",
      "Glass cleaning",
      "Interior vacuum",
      "Dashboard dressing",
      "Tyre polishing",
      "Two paper floor mats",
      "Hanging perfume",
    ],
  },
  {
    id: "premium-ceramic-wash",
    serviceId: "premium-ceramic-wash",
    title: "Premium / Ceramic Wash",
    category: "car-wash",
    description:
      "Complete decontamination wash with ceramic foam, iron & tar removal, wax protection, and A/C vent steaming.",
    pricingType: "tiers",
    highlightBadge: "Featured Premium",
    tiers: [
      { size: "S", price: 900 },
      { size: "M", price: 1000 },
      { size: "L", price: 1200 },
      { size: "XL", price: 1400 },
      { size: "XXL", price: 1600 },
    ],
    features: [
      "Body foam wash",
      "Ceramic foam wash",
      "Under-chassis wash",
      "Floor mat washing",
      "Alloy, tyre and wheel arch cleaning",
      "Glass cleaning",
      "Interior vacuum",
      "Iron removal",
      "Tar removal",
      "Wax application",
      "Dashboard dressing",
      "A/C vent steaming",
      "Tyre polishing",
      "Four paper floor mats",
      "Hanging perfume",
    ],
  },
  // 4.7 ENGINE BAY DEEP CLEANING
  {
    id: "engine-bay-cleaning",
    serviceId: "engine-bay-cleaning",
    title: "Engine Bay Deep Cleaning",
    category: "car-wash",
    description:
      "Targeted degreasing and dressing for a clean, well-maintained engine compartment.",
    pricingType: "tiers",
    tiers: [
      { size: "S", price: 400 },
      { size: "M", price: 550 },
      { size: "L", price: 650 },
      { size: "XL", price: 650 },
      { size: "XXL", price: 750 },
    ],
    features: [
      "Safe engine bay degreasing",
      "Trim & plastic dressing",
    ],
    variablePricingNote:
      "Final price depends on the vehicle's condition. The rate is not fixed.",
  },
  // 4.15 HEADLIGHT RESTORATION
  {
    id: "headlight-restoration",
    serviceId: "headlight-restoration",
    title: "Headlight Restoration",
    category: "car-wash",
    description:
      "Restores clarity to oxidized and hazy headlamp lenses for improved night visibility.",
    pricingType: "tiers",
    tiers: [
      { size: "S", price: 600 },
      { size: "M", price: 600 },
      { size: "L", price: 600 },
      { size: "XL", price: 800 },
      { size: "XXL", price: 800 },
    ],
    features: [
      "Oxidation & haze removal",
      "Lens polishing for clarity",
    ],
  },
  // 4.4 TAIL LAMP SMOKING
  {
    id: "tail-lamp-smoking",
    serviceId: "tail-lamp-smoking",
    title: "Tail Lamp Smoking",
    category: "accessories",
    description: "Normal treatment for a sleek darkened rear light finish.",
    pricingType: "flat",
    flatPrice: 1200,
    flatPriceLabel: "Normal treatment: ₹1,200",
    features: ["Smoked finish styling", "Clean optical light output"],
    variablePricingNote: "Price depends on vehicle model.",
  },
  // 4.1 CERAMIC COATING
  {
    id: "ceramic-coating",
    serviceId: "ceramic-coating",
    title: "Ceramic Coating",
    category: "paint-protection",
    description:
      "Premium ceramic paint protection for enhanced gloss and easier maintenance.",
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
  // 4.2 GRAPHENE COATING
  {
    id: "graphene-coating",
    serviceId: "graphene-coating",
    title: "Graphene Coating",
    category: "paint-protection",
    description:
      "High-durability graphene protection with deep gloss and superior hydrophobic performance.",
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
      "Paint gloss protection",
      "Anti-yellowing",
      "Hydrophobic effect",
      "Easy to maintain and wash",
    ],
  },
  // 4.3 BOROPHENE COATING
  {
    id: "borophene-coating",
    serviceId: "borophene-coating",
    title: "Borophene Coating",
    category: "paint-protection",
    description:
      "Next-generation self-healing paint protection engineered for intense gloss and thermal scratch recovery.",
    pricingType: "tiers",
    tiers: [
      { size: "S", price: 27000 },
      { size: "M", price: 34000 },
      { size: "L", price: 40000 },
      { size: "XL", price: 50000 },
      { size: "XXL", price: 58000 },
    ],
    features: [
      "Self-healing",
      "Hydrophobic effect",
      "Paint gloss protection",
      "Anti-yellowing",
      "Easy maintenance and washing",
      "Helps eliminate light scratches at temperatures above 60°C",
    ],
  },
  // 4.5 PPF WRAPPING
  {
    id: "ppf-wrapping",
    serviceId: "ppf-wrapping",
    title: "PPF Wrapping",
    category: "paint-protection",
    description:
      "Heavy-duty clear Paint Protection Film shielding bodywork from stone chips, scratches, UV rays, and road debris.",
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
      "Gareware premium quality",
      "Typically 175–195 microns thickness",
      "Protects paint from stone chips, scratches, UV rays & environmental damage",
    ],
    clientConfirmationNote:
      "Film brand spelling (Gareware / Garware) flagged for client confirmation.",
  },
  // 4.17 ANTI-RUST / ANTI-CORROSION LAYER
  {
    id: "anti-rust-layer",
    serviceId: "anti-rust-layer",
    title: "Anti-Rust / Anti-Corrosion Layer",
    category: "paint-protection",
    description:
      "Protective corrosion barrier tailored to material grade and coastal driving conditions.",
    pricingType: "range",
    rangeMin: 3500,
    rangeMax: 15000,
    warrantyBadge: "5-Year Warranty",
    features: [
      "Price depends on material quality",
      "Five-year warranty",
    ],
    variablePricingNote: "Starting price ranges from ₹3,500 – ₹15,000 depending on material quality.",
    clientConfirmationNote:
      "Exact service name and product description flagged for client confirmation before publication.",
  },
  // 4.10 CAR POLISHING – SINGLE STEP
  {
    id: "single-step-polishing",
    serviceId: "single-step-polishing",
    title: "Single-Step Car Polishing",
    category: "polishing",
    description:
      "Machine polishing treatment to refresh paint clarity and reduce light surface dullness.",
    pricingType: "tiers",
    tiers: [
      { size: "S", price: 3500 },
      { size: "M", price: 4000 },
      { size: "L", price: 4500 },
      { size: "XL", price: 5000 },
      { size: "XXL", price: 5500 },
    ],
    features: [
      "Single-stage machine gloss enhancement",
      "Refreshes dulled clear coat",
    ],
  },
  // 4.11 CERAMIC POLISHING WITH GRAPHENE WAXING
  {
    id: "ceramic-polishing-graphene",
    serviceId: "ceramic-polishing-graphene",
    title: "Ceramic Polishing with Graphene Wax",
    category: "polishing",
    description:
      "Dual-action ceramic polish finished with graphene wax protection for enduring gloss.",
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
      "One-year warranty",
      "Ceramic gloss polishing",
      "Graphene wax protective layer",
    ],
  },
  // 4.12 UNDERBODY COATING – 3M
  {
    id: "underbody-3m",
    serviceId: "underbody-coating",
    title: "Underbody Coating — 3M Brand",
    subtitle: "Rubber-type anti-rust protection",
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
      "One-year warranty",
      "Rubber-type material",
      "Anti-rust protection",
    ],
  },
  // 4.12 UNDERBODY COATING – TURTLE WAX
  {
    id: "underbody-turtle-wax",
    serviceId: "underbody-coating",
    title: "Underbody Coating — Turtle Wax Brand",
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
      "Four-year warranty",
      "Premium rubber coating",
      "Anti-rust protection",
      "Exceptional durability",
    ],
  },
  // 4.13 SILENCER COATING
  {
    id: "silencer-coating",
    serviceId: "silencer-coating",
    title: "Silencer Coating",
    subtitle: "Material: Turtle Wax",
    category: "polishing",
    description:
      "Heat-resistant protective coating for the exhaust silencer assembly.",
    pricingType: "flat",
    flatPrice: 1200,
    flatPriceLabel: "₹1,200 for all cars",
    warrantyBadge: "1-Year Warranty",
    features: [
      "Material: Turtle Wax",
      "One-year warranty",
      "Flat rate for all cars",
    ],
  },
  // 4.16 COOLING FILM
  {
    id: "cooling-film",
    serviceId: "accessories",
    title: "Cooling Film",
    category: "accessories",
    description:
      "Solar heat-rejection window cooling film available in 50% and 35% darkness options.",
    pricingType: "tiers",
    warrantyBadge: "1-Year Warranty",
    tiers: [
      { size: "Hatchback", price: 3000 },
      { size: "Sedan", price: 3200 },
      { size: "SUV", price: 4200 },
    ],
    features: [
      "Darkness options: 50% and 35%",
      "One-year warranty",
    ],
  },
  // 4.14 INTERIOR DEEP CLEANING
  {
    id: "interior-deep-cleaning",
    serviceId: "interior-deep-cleaning",
    title: "Interior Deep Cleaning",
    category: "interior-care",
    description:
      "Comprehensive cabin sanitization, upholstery extraction, trim cleaning, and odour refresh.",
    pricingType: "tiers",
    tiers: [
      { size: "S", price: 2000 },
      { size: "M", price: 2500 },
      { size: "L", price: 3000 },
      { size: "XL", price: 3500 },
      { size: "XXL", price: 4000 },
    ],
    features: [
      "Deep upholstery & carpet cleaning",
      "Dashboard, door panel & console detailing",
    ],
    variablePricingNote:
      "Rate depends on the work required and vehicle condition. Price is not fixed.",
  },
  // 4.6 SEAT COVERS – FENO LEATHER
  {
    id: "seat-covers-feno",
    serviceId: "feno-leather-seat-covers",
    title: "Feno Leather Seat Covers",
    category: "interior-care",
    description: "Tailored Feno leather seat cover fitment for daily durability.",
    pricingType: "tiers",
    tiers: [
      { size: "S", price: 6000 },
      { size: "L", price: 6500 },
      { size: "7-Seater", price: 8000 },
      { size: "XL", price: 8500 },
    ],
    features: ["Custom-fitted Feno leather styling", "Clean cabin finish"],
  },
  // 4.6 SEAT COVERS – NAPA LEATHER
  {
    id: "seat-covers-napa",
    serviceId: "napa-leather-seat-covers",
    title: "Napa Leather Seat Covers",
    category: "interior-care",
    description: "Supple Napa material seat covers crafted for refined cabin comfort.",
    pricingType: "tiers",
    tiers: [
      { size: "S", price: 7000 },
      { size: "L", price: 8000 },
      { size: "7-Seater", price: 9000 },
      { size: "XL", price: 9500 },
    ],
    features: ["Napa material used", "Smooth, tailored upholstery fit"],
  },
  // 4.6 SEAT COVERS – PORSCHE LEATHER
  {
    id: "seat-covers-porsche",
    serviceId: "porsche-leather-seat-covers",
    title: "Porsche Leather Seat Covers",
    category: "interior-care",
    description: "Premium quality seat cover upgrade with optional matching armrest.",
    pricingType: "tiers",
    tiers: [
      { size: "S", price: 9500 },
      { size: "L", price: 10000 },
      { size: "7-Seater", price: 8000 },
      { size: "XL", price: 8500 },
    ],
    features: [
      "Premium quality",
      "Armrest available for an additional ₹600",
    ],
    clientConfirmationNote:
      "Note: 7-Seater (₹8,000) and XL (₹8,500) prices appear lower than S/L; preserved verbatim as supplied and flagged for client confirmation.",
  },
  // CAR ACCESSORIES (Category 4)
  {
    id: "car-accessories",
    serviceId: "car-accessories",
    title: "Car Accessories",
    category: "accessories",
    description:
      "Curated interior and exterior automotive accessories tailored to your vehicle model.",
    pricingType: "consultation",
    features: [
      "Model-specific fitment",
      "Quote provided on WhatsApp enquiry",
    ],
    variablePricingNote: "Pricing varies by accessory type and vehicle model.",
  },
  // 4.9 BIKE WASHING – BASIC
  {
    id: "basic-bike-wash",
    serviceId: "basic-bike-wash",
    title: "Basic Bike Wash",
    category: "bike-wash",
    description: "Quick snow-foam clean and tyre dressing for two-wheelers.",
    pricingType: "tiers",
    tiers: [
      { size: "Small", price: 200 },
      { size: "Medium", price: 250 },
      { size: "Large", price: 300 },
      { size: "XL", price: 350 },
    ],
    features: ["Body foam wash", "Tyre dressing"],
  },
  // 4.9 BIKE WASHING – DETAILED
  {
    id: "detailed-bike-wash",
    serviceId: "detailed-bike-wash",
    title: "Detailed Bike Wash",
    category: "bike-wash",
    description:
      "Complete two-wheeler detailing including chain cleaning and spray wax finish.",
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
  // TWO-WHEELER CERAMIC COATING & DETAILING
  {
    id: "bike-ceramic-pack",
    serviceId: "detailed-bike-wash",
    title: "Two-Wheeler Ceramic Coating & Detailing",
    category: "bike-wash",
    description: "Deep chemical decontamination, gloss polishing, and multi-surface 9H ceramic protective coat for motorcycles.",
    pricingType: "range",
    rangeMin: 2499,
    rangeMax: 6500,
    warrantyBadge: "1-Year Protection",
    features: [
      "De-ionized wash & paint claying",
      "Single-stage machine swirl removal",
      "9H Ceramic liquid glass coating on tank & fairings",
      "Exhaust, wheel rim & chrome seal",
      "Chain degreasing & Teflon chain lube",
    ],
    variablePricingNote: "Starting from ₹2,499 depending on engine displacement and body type.",
  },
  // AUTOMOTIVE REPAIR PACKAGES
  {
    id: "periodic-maintenance-pack",
    serviceId: "periodic-maintenance",
    title: "Periodic Maintenance & Oil Service",
    category: "car-wash",
    description: "Complete synthetic oil change, OEM filter replacement, and 40-point safety check.",
    pricingType: "range",
    rangeMin: 2499,
    rangeMax: 6500,
    warrantyBadge: "Service Guarantee",
    features: [
      "High-grade synthetic/semi-synthetic engine oil replacement",
      "OEM oil filter replacement",
      "Coolant, brake & washer fluid top-up",
      "Spark plug & air/cabin filter inspection",
      "40-point mechanical safety checklist",
    ],
    variablePricingNote: "Starting from ₹2,499 depending on oil viscosity and engine oil capacity.",
  },
  {
    id: "computerized-diagnostics-pack",
    serviceId: "computerized-diagnostics",
    title: "Computerized OBD-II Diagnostics",
    category: "car-wash",
    description: "Complete digital scan of vehicle control units, error code resolution, and live sensor inspection.",
    pricingType: "flat",
    flatPrice: 799,
    flatPriceLabel: "From ₹799 per scan",
    features: [
      "Full ECU error & trouble code scan",
      "Check engine warning light reset",
      "Real-time sensor & fuel telemetry check",
      "Technician consultation & diagnosis report",
    ],
  },
  {
    id: "brake-suspension-pack",
    serviceId: "brake-suspension-repair",
    title: "Brake & Suspension Calibration",
    category: "car-wash",
    description: "Brake pad replacement, disc rotor inspection, caliper servicing, and suspension overhaul.",
    pricingType: "range",
    rangeMin: 1200,
    rangeMax: 8500,
    features: [
      "Front and rear brake disc & pad inspection",
      "Brake fluid bleed & ABS diagnostics",
      "Shock absorber & strut health test",
      "Suspension bush & stabilizer link check",
    ],
    variablePricingNote: "Parts quoted separately based on OEM specifications.",
  },
  {
    id: "car-ac-pack",
    serviceId: "car-ac-service",
    title: "Car AC Service & Refrigerant Refill",
    category: "car-wash",
    description: "Cooling system leak detection, refrigerant R134a recharge, compressor health test, and cabin air misting.",
    pricingType: "range",
    rangeMin: 1500,
    rangeMax: 3500,
    features: [
      "AC cooling pressure test & vacuum leak detection",
      "Refrigerant gas top-up & compressor oil",
      "Condenser & cooling coil deep clean",
      "Cabin antibacterial sanitization mist",
    ],
  },
  {
    id: "clutch-gearbox-pack",
    serviceId: "clutch-gearbox-repair",
    title: "Clutch & Transmission Service",
    category: "car-wash",
    description: "Clutch plate overhaul, transmission fluid flush, flywheel inspection, and smooth shifting calibration.",
    pricingType: "consultation",
    features: [
      "Clutch disc, pressure plate & release bearing check",
      "Transmission fluid flush and refill",
      "Gear linkage alignment for smooth engagement",
      "Pedal free-play and hydraulic cylinder inspection",
    ],
    variablePricingNote: "Inspection & labour starting from ₹2,800. Replacement parts priced on vehicle model.",
  },
  {
    id: "electrical-battery-pack",
    serviceId: "electrical-battery-care",
    title: "Automotive Electrical & Battery Care",
    category: "car-wash",
    description: "Alternator rate test, battery conductance analysis, wiring harness check, and fuse troubleshooting.",
    pricingType: "range",
    rangeMin: 650,
    rangeMax: 2500,
    features: [
      "Digital battery load analysis & terminal anti-rust clean",
      "Alternator charging rate & starter motor diagnostics",
      "Lighting, horn & power window circuit inspection",
      "Fuse box & relay safety testing",
    ],
  },
];

