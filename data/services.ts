export type ServiceCategorySlug =
  | "automotive-repair"
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
  startingPriceLabel: string;
  image: string;
  imageAlt: string;
  pricingIds: string[];
  warrantyBadge?: string;
  highlights: string[];
  variableNote?: string;
  confirmationNote?: string;
  isNeutralRepairCard?: boolean;
  repairIcon?: "wrench" | "cpu" | "disc" | "snowflake" | "cog" | "zap";
}

export interface ServiceCategoryGroup {
  slug: ServiceCategorySlug;
  code: string;
  title: string;
  subtitle: string;
}

export const SERVICE_CATEGORIES: ServiceCategoryGroup[] = [
  {
    slug: "automotive-repair",
    code: "01",
    title: "Automotive Repair & Maintenance",
    subtitle:
      "Certified automotive mechanical repair, computer diagnostics, oil & fluid servicing, brake & suspension overhauls, and general garage care.",
  },
  {
    slug: "paint-protection",
    code: "02",
    title: "Advanced Paint Protection",
    subtitle:
      "Multi-year ceramic, graphene, borophene, PPF, and anti-corrosion shields engineered for deep gloss and surface resilience.",
  },
  {
    slug: "car-wash-cleaning",
    code: "03",
    title: "Car Wash & Cleaning",
    subtitle:
      "Structured foam washes, ceramic decontamination, engine bay degreasing, interior sanitization, and lens treatments.",
  },
  {
    slug: "polishing-protection",
    code: "04",
    title: "Polishing & Protection",
    subtitle:
      "Paint correction, graphene wax finishes, 3M & Turtle Wax underbody protection, silencer coating, and solar cooling films.",
  },
  {
    slug: "interior-accessories",
    code: "05",
    title: "Interior & Accessories",
    subtitle:
      "Custom-tailored ventilated, Napa, and Porsche leather seat covers alongside precision interior detailing.",
  },
  {
    slug: "two-wheeler-care",
    code: "06",
    title: "Two-Wheeler Care",
    subtitle:
      "Dedicated snow foam wash, chain cleaning, and ceramic coating protection for Kerala motorcycles and scooters.",
  },
];

export const SERVICES_DATA: ServiceItem[] = [
  // CATEGORY 01 – AUTOMOTIVE REPAIR & MAINTENANCE
  {
    id: "periodic-maintenance",
    title: "Periodic Maintenance & Oil Service",
    category: "automotive-repair",
    categoryLabel: "Automotive Repair & Maintenance",
    shortDescription:
      "Complete engine oil change, oil filter replacement, fluid top-ups, spark plugs check, and comprehensive 40-point safety inspection.",
    startingPriceLabel: "From ₹2,499",
    image: "/images/periodic-maintenance.jpg",
    imageAlt: "Technician performing periodic engine oil service and multi-point check at Cardilac Garage",
    pricingIds: ["periodic-maintenance-pack"],
    warrantyBadge: "Service Guarantee",
    highlights: [
      "High-grade synthetic/semi-synthetic engine oil & OEM filter replacement",
      "Comprehensive 40-point mechanical safety and performance check",
      "Coolant, brake fluid, steering fluid & windshield wash top-ups",
      "Spark plugs, air filter & cabin filter inspection and cleaning",
    ],
  },
  {
    id: "computerized-diagnostics",
    title: "Computerized Engine Diagnostics",
    category: "automotive-repair",
    categoryLabel: "Automotive Repair & Maintenance",
    shortDescription:
      "Advanced digital OBD-II scanning for check engine warnings, sensor errors, live ECU data analysis, and fault code resetting.",
    startingPriceLabel: "From ₹799",
    image: "/images/computerized-diagnostics.jpg",
    imageAlt: "Computerized OBD-II engine diagnostic scanning at Cardilac Garage",
    pricingIds: ["computerized-diagnostics-pack"],
    repairIcon: "cpu",
    highlights: [
      "Professional OBD-II digital diagnostics scanner for all car makes",
      "Real-time sensor telemetry, fuel trim & transmission scanning",
      "Immediate fault code diagnostics and clear inspection report",
      "Warning light reset and electrical circuit troubleshooting",
    ],
  },
  {
    id: "brake-suspension-repair",
    title: "Brake & Suspension Repairs",
    category: "automotive-repair",
    categoryLabel: "Automotive Repair & Maintenance",
    shortDescription:
      "Brake pad replacement, disc rotor inspection, caliper servicing, suspension bush overhaul, and shock absorber checks.",
    startingPriceLabel: "From ₹1,200",
    image: "/images/brake-suspension.jpg",
    imageAlt: "Brake disc and suspension overhaul at Cardilac Garage",
    pricingIds: ["brake-suspension-pack"],
    repairIcon: "disc",
    highlights: [
      "Front and rear brake disc pad inspection & replacement",
      "Brake fluid line bleeding & ABS diagnostic check",
      "Shock absorber, strut & suspension bushing overhaul",
      "Elimination of suspension noise, body roll, and steering vibrations",
    ],
  },
  {
    id: "car-ac-service",
    title: "Car Air Conditioning (AC) Service & Gas Refill",
    category: "automotive-repair",
    categoryLabel: "Automotive Repair & Maintenance",
    shortDescription:
      "Comprehensive car AC diagnostics, gas leakage testing, refrigerant R134a recharge, compressor test, and cabin antibacterial misting.",
    startingPriceLabel: "From ₹1,500",
    image: "/images/car-ac-service.jpg",
    imageAlt: "Car AC cooling service and gas recharge at Cardilac Garage",
    pricingIds: ["car-ac-pack"],
    repairIcon: "snowflake",
    highlights: [
      "AC cooling pressure test & vacuum leak detection",
      "Refrigerant R134a charging & compressor lubricant top-up",
      "Cooling coil & external condenser debris cleaning",
      "Cabin antibacterial misting for allergen removal",
    ],
  },
  {
    id: "clutch-gearbox-repair",
    title: "Clutch & Transmission Repair",
    category: "automotive-repair",
    categoryLabel: "Automotive Repair & Maintenance",
    shortDescription:
      "Clutch plate overhaul, pressure plate adjustment, gearbox oil flush, and transmission troubleshooting for smooth shifting.",
    startingPriceLabel: "From ₹2,800",
    image: "/images/clutch-gearbox.jpg",
    imageAlt: "Clutch and transmission repair bay at Cardilac Garage",
    pricingIds: ["clutch-gearbox-pack"],
    repairIcon: "cog",
    highlights: [
      "Clutch plate, release bearing & slave cylinder replacement",
      "Transmission fluid flush and gearbox calibration",
      "Flywheel inspection & gear shifter linkage adjustments",
      "Resolves hard gear shifting, slipping clutch, and pedal vibrations",
    ],
  },
  {
    id: "electrical-battery-care",
    title: "Automotive Electricals & Battery Care",
    category: "automotive-repair",
    categoryLabel: "Automotive Repair & Maintenance",
    shortDescription:
      "Alternator testing, battery health check, starter motor inspection, wiring harness repair, and fuse box troubleshooting.",
    startingPriceLabel: "From ₹650",
    image: "/images/electrical-battery.jpg",
    imageAlt: "Automotive electrical system and battery testing at Cardilac Garage",
    pricingIds: ["electrical-battery-pack"],
    repairIcon: "zap",
    highlights: [
      "Digital battery load analysis & terminal anti-corrosion treatment",
      "Alternator charging rate & starter motor diagnostic test",
      "Headlight wiring, horn, relays & power window repairs",
      "Complete electrical safety verification",
    ],
  },
  // CATEGORY 1 – ADVANCED PAINT PROTECTION
  {
    id: "ceramic-coating",
    title: "Ceramic Coating",
    category: "paint-protection",
    categoryLabel: "Advanced Paint Protection",
    shortDescription:
      "Premium ceramic paint protection for enhanced gloss and easier maintenance.",
    startingPriceLabel: "From ₹15,500",
    image: "/images/ceramic-coating.jpg",
    imageAlt: "Water beading on a freshly ceramic-coated dark luxury car hood",
    pricingIds: ["ceramic-coating"],
    highlights: [
      "Deep hydrophobic gloss finish",
      "Easier routine washing and maintenance",
      "Tailored pricing from S to XXL vehicles",
    ],
  },
  {
    id: "graphene-coating",
    title: "Graphene Coating",
    category: "paint-protection",
    categoryLabel: "Advanced Paint Protection",
    shortDescription:
      "Russian-brand graphene protection with anti-yellowing clarity and strong hydrophobic water beading.",
    startingPriceLabel: "From ₹22,000",
    image: "/images/graphene-coating.jpg",
    imageAlt: "High-gloss graphene-coated dark gunmetal coupe in studio lighting",
    pricingIds: ["graphene-coating"],
    highlights: [
      "Russian brand formulation",
      "Paint gloss protection & anti-yellowing",
      "Strong hydrophobic effect for effortless washing",
    ],
  },
  {
    id: "borophene-coating",
    title: "Borophene Coating",
    category: "paint-protection",
    categoryLabel: "Advanced Paint Protection",
    shortDescription:
      "Self-healing paint coating designed to help eliminate light scratches above 60°C with intense gloss.",
    startingPriceLabel: "From ₹27,000",
    image: "/images/borophene-coating.jpg",
    imageAlt: "Infrared curing lights over dark painted fender for borophene coating",
    pricingIds: ["borophene-coating"],
    highlights: [
      "Self-healing properties above 60°C for light scratches",
      "Anti-yellowing & hydrophobic protection",
      "Superior gloss depth and easy maintenance",
    ],
  },
  {
    id: "ppf-wrapping",
    title: "PPF Wrapping",
    category: "paint-protection",
    categoryLabel: "Advanced Paint Protection",
    shortDescription:
      "175–195 micron protective film shielding factory paint from stone chips, scratches, and UV damage.",
    startingPriceLabel: "From ₹75,000",
    image: "/images/ppf-wrapping.jpg",
    imageAlt: "Technician installing clear Paint Protection Film on a luxury car fender",
    pricingIds: ["ppf-wrapping"],
    warrantyBadge: "5-Year Warranty",
    highlights: [
      "5-year warranty",
      "Gareware premium quality (175–195 microns thickness)",
      "Guards against stone chips, scratches, UV rays & environmental fallout",
    ],
    confirmationNote: "Film brand spelling (Gareware / Garware) flagged for client confirmation.",
  },
  {
    id: "anti-rust-layer",
    title: "Anti-Rust Layer",
    category: "paint-protection",
    categoryLabel: "Advanced Paint Protection",
    shortDescription:
      "Long-term anti-corrosion protection backed by a 5-year warranty, tailored to material grade.",
    startingPriceLabel: "₹3,500 – ₹15,000",
    image: "/images/anti-rust-layer.jpg",
    imageAlt: "Vehicle chassis and suspension protected with matte black anti-rust layer",
    pricingIds: ["anti-rust-layer"],
    warrantyBadge: "5-Year Warranty",
    highlights: [
      "5-year warranty coverage",
      "Material grade selected to vehicle requirement",
      "Built for humid coastal Kerala driving",
    ],
    variableNote: "Starting price ₹3,500 – ₹15,000 depending on material quality.",
    confirmationNote: "Exact service name and product description flagged for client confirmation.",
  },

  // CATEGORY 2 – CAR WASH & CLEANING
  {
    id: "basic-car-wash",
    title: "Basic Car Wash",
    category: "car-wash-cleaning",
    categoryLabel: "Car Wash & Cleaning",
    shortDescription:
      "Essential body foam wash, alloy & wheel arch cleaning, mat washing, interior vacuum, and tyre polish.",
    startingPriceLabel: "From ₹350",
    image: "/images/foam-wash.jpg",
    imageAlt: "Snow foam car wash cleansing a dark luxury sedan bodywork",
    pricingIds: ["basic-car-wash"],
    highlights: [
      "Body foam wash & alloy/tyre/arch cleaning",
      "Floor mat washing & interior vacuum",
      "Tyre polishing, 2 paper mats & hanging perfume",
    ],
  },
  {
    id: "executive-car-wash",
    title: "Executive Car Wash",
    category: "car-wash-cleaning",
    categoryLabel: "Car Wash & Cleaning",
    shortDescription:
      "Adds under-chassis washing, interior glass clarity, and dashboard dressing to our core foam wash.",
    startingPriceLabel: "From ₹450",
    image: "/images/executive-wash.jpg",
    imageAlt: "Detailing brush cleaning alloy rim and brake caliper with foam",
    pricingIds: ["executive-car-wash"],
    highlights: [
      "Includes all Basic Wash care plus under-chassis wash",
      "Crystal glass cleaning & dashboard dressing",
      "Tyre polishing, 2 paper mats & hanging perfume",
    ],
  },
  {
    id: "premium-ceramic-wash",
    title: "Premium / Ceramic Wash",
    category: "car-wash-cleaning",
    categoryLabel: "Car Wash & Cleaning",
    shortDescription:
      "Our flagship wash with ceramic foam, iron & tar decontamination, wax application, and A/C vent steaming.",
    startingPriceLabel: "From ₹900",
    image: "/images/ceramic-wash.jpg",
    imageAlt: "Water sheeting off a black sedan after ceramic foam wash",
    pricingIds: ["premium-ceramic-wash"],
    highlights: [
      "Body & ceramic foam wash + under-chassis wash",
      "Iron removal, tar removal & protective wax application",
      "A/C vent steaming, dashboard dressing & 4 paper mats",
    ],
  },
  {
    id: "engine-bay-cleaning",
    title: "Engine Bay Deep Cleaning",
    category: "car-wash-cleaning",
    categoryLabel: "Car Wash & Cleaning",
    shortDescription:
      "Careful engine compartment degreasing and trim dressing for a spotless under-hood presentation.",
    startingPriceLabel: "From ₹400",
    image: "/images/engine-bay.jpg",
    imageAlt: "Spotless dressed luxury car engine bay under studio lights",
    pricingIds: ["engine-bay-cleaning"],
    highlights: [
      "Safe oil & grime degreasing",
      "Satin finish trim & hose dressing",
    ],
    variableNote: "Final price depends on the vehicle's condition. Rate is not fixed.",
  },
  {
    id: "interior-deep-cleaning",
    title: "Interior Deep Cleaning",
    category: "car-wash-cleaning",
    categoryLabel: "Car Wash & Cleaning",
    shortDescription:
      "Intensive cabin cleaning covering upholstery, carpets, panels, and touchpoints for a fresh interior.",
    startingPriceLabel: "From ₹2,000",
    image: "/images/interior-cleaning.jpg",
    imageAlt: "Detailing brush and steam treatment on perforated black leather seats",
    pricingIds: ["interior-deep-cleaning"],
    highlights: [
      "Upholstery, seat & carpet deep extraction",
      "Detailed trim, console & touchpoint sanitization",
    ],
    variableNote: "Rate depends on work required and vehicle condition. Price is not fixed.",
  },
  {
    id: "headlight-restoration",
    title: "Headlight Restoration",
    category: "car-wash-cleaning",
    categoryLabel: "Car Wash & Cleaning",
    shortDescription:
      "Removes lens yellowing and surface oxidation to restore crisp optical clarity and appearance.",
    startingPriceLabel: "From ₹600",
    image: "/images/headlight-restoration.jpg",
    imageAlt: "Crystal-clear restored LED matrix headlight on a dark metallic fender",
    pricingIds: ["headlight-restoration"],
    highlights: [
      "Clears cloudy, oxidized lenses",
      "Improves nighttime beam projection & front-end look",
    ],
  },
  {
    id: "tail-lamp-smoking",
    title: "Tail Lamp Smoking",
    category: "car-wash-cleaning",
    categoryLabel: "Car Wash & Cleaning",
    shortDescription:
      "Stealth dark-tinted tail lamp treatment delivering a sleek custom rear profile while preserving illumination.",
    startingPriceLabel: "₹1,200 (Normal)",
    image: "/images/tail-lamp-smoking.jpg",
    imageAlt: "Dark-smoked LED tail lamp on a black sports sedan",
    pricingIds: ["tail-lamp-smoking"],
    highlights: [
      "Normal treatment starting at ₹1,200",
      "Clean, uniform dark aesthetic",
    ],
    variableNote: "Price depends on vehicle model.",
  },

  // CATEGORY 3 – POLISHING & PROTECTION
  {
    id: "single-step-polishing",
    title: "Single-Step Car Polishing",
    category: "polishing-protection",
    categoryLabel: "Polishing & Protection",
    shortDescription:
      "Focused single-stage machine polishing to revive paint depth, clarity, and mirror shine.",
    startingPriceLabel: "From ₹3,500",
    image: "/images/single-step-polishing.jpg",
    imageAlt: "Detailing technician inspecting paint finish with LED light in studio",
    pricingIds: ["single-step-polishing"],
    highlights: [
      "Single-stage rotary/dual-action gloss boost",
      "Reduces light haze and oxidation",
    ],
  },
  {
    id: "ceramic-polishing",
    title: "Ceramic Polishing with Graphene Wax",
    category: "polishing-protection",
    categoryLabel: "Polishing & Protection",
    shortDescription:
      "Combines ceramic paint polishing with graphene waxing for long-lasting slickness and a 1-year warranty.",
    startingPriceLabel: "From ₹8,999",
    image: "/images/ceramic-polishing.jpg",
    imageAlt: "Mirror-gloss black hood reflecting studio hexagonal lights",
    pricingIds: ["ceramic-polishing-graphene"],
    warrantyBadge: "1-Year Warranty",
    highlights: [
      "1-year warranty included",
      "Ceramic polishing paired with graphene wax seal",
    ],
  },
  {
    id: "underbody-coating",
    title: "Underbody Coating",
    category: "polishing-protection",
    categoryLabel: "Polishing & Protection",
    shortDescription:
      "Rubberized anti-rust underbody protection available in 3M (1-yr warranty) and Turtle Wax (4-yr warranty).",
    startingPriceLabel: "From ₹2,800",
    image: "/images/underbody-coating.jpg",
    imageAlt: "Underbody protective rubber coating on vehicle wheel well and frame",
    pricingIds: ["underbody-3m", "underbody-turtle-wax"],
    warrantyBadge: "1–4 Yr Warranty",
    highlights: [
      "3M Brand (1-year warranty): Rubber-type anti-rust protection",
      "Turtle Wax Brand (4-year warranty): Premium rubber coating for exceptional durability",
    ],
  },
  {
    id: "silencer-coating",
    title: "Silencer Coating",
    category: "polishing-protection",
    categoryLabel: "Polishing & Protection",
    shortDescription:
      "Turtle Wax protective silencer coating to shield exhaust components against corrosion and heat wear.",
    startingPriceLabel: "₹1,200 (All Cars)",
    image: "/images/silencer-coating.jpg",
    imageAlt: "Protected underbody and exhaust assembly on hydraulic lift",
    pricingIds: ["silencer-coating"],
    warrantyBadge: "1-Year Warranty",
    highlights: [
      "Turtle Wax material",
      "Flat ₹1,200 pricing for all cars",
      "1-year warranty included",
    ],
  },
  {
    id: "cooling-film",
    title: "Cooling Film",
    category: "polishing-protection",
    categoryLabel: "Polishing & Protection",
    shortDescription:
      "Heat-rejection automotive window film available in 50% and 35% darkness options with a 1-year warranty.",
    startingPriceLabel: "From ₹3,000",
    image: "/images/cooling-film.jpg",
    imageAlt: "Sleek dark-tinted side windows on a luxury coupe",
    pricingIds: ["cooling-film"],
    warrantyBadge: "1-Year Warranty",
    highlights: [
      "50% and 35% darkness options",
      "1-year warranty included",
      "Sized for Hatchback, Sedan & SUV",
    ],
  },

  // CATEGORY 4 – INTERIOR & ACCESSORIES
  {
    id: "feno-leather-seat-covers",
    title: "Ventilated Leather Seat Covers (Feno)",
    category: "interior-accessories",
    categoryLabel: "Interior & Accessories",
    shortDescription:
      "Custom perforated and ventilated leather seat covers engineered for breathability, heat rejection, and tailored fitment.",
    startingPriceLabel: "From ₹6,000",
    image: "/images/seat-covers-feno.jpg",
    imageAlt: "Bespoke perforated ventilated Feno leather car seat in luxury studio lighting",
    pricingIds: ["seat-covers-feno"],
    highlights: [
      "Precision micro-perforated breathable leather",
      "Custom tailored for Hatchback, Sedan, 7-Seater & XL",
      "Ergonomic bolstering and easy-to-wipe durability",
    ],
  },
  {
    id: "napa-leather-seat-covers",
    title: "Custom Stitching Napa Seat Covers",
    category: "interior-accessories",
    categoryLabel: "Interior & Accessories",
    shortDescription:
      "Supple Napa leather seat covers featuring handcrafted diamond-quilt and contrast sports stitching for an elevated cabin feel.",
    startingPriceLabel: "From ₹7,000",
    image: "/images/seat-covers-napa.jpg",
    imageAlt: "Diamond-quilted black Napa leather seat with contrast precision sports stitching",
    pricingIds: ["seat-covers-napa"],
    highlights: [
      "Supple, ultra-comfortable Napa material",
      "Handcrafted contrast diamond sports stitching",
      "Available for Hatchback, Sedan, 7-Seater & XL",
    ],
  },
  {
    id: "porsche-leather-seat-covers",
    title: "Porsche Leather Covers & Deep Seat Detailing",
    category: "interior-accessories",
    categoryLabel: "Interior & Accessories",
    shortDescription:
      "Premium-grade luxury leather seat upholstery paired with meticulous deep leather foam sanitization and optional armrest styling.",
    startingPriceLabel: "From ₹8,000",
    image: "/images/seat-covers-porsche.jpg",
    imageAlt: "Professional detailing technician foaming and cleaning luxury Porsche leather seats",
    pricingIds: ["seat-covers-porsche"],
    highlights: [
      "Ultra-premium grade leather craftsmanship",
      "Deep leather conditioning and protection",
      "Optional matching armrest styling (+₹600)",
    ],
    confirmationNote:
      "Client-provided 7-Seater (₹8,000) and XL (₹8,500) prices flagged for confirmation before publishing.",
  },

  // CATEGORY 5 – TWO-WHEELER CARE
  {
    id: "basic-bike-wash",
    title: "Two-Wheeler Foam Wash & Care",
    category: "two-wheeler-care",
    categoryLabel: "Two-Wheeler Care",
    shortDescription:
      "High-pressure snow foam wash, degreasing, tyre dressing, and thorough rim cleaning for Kerala motorcycles and scooters.",
    startingPriceLabel: "From ₹200",
    image: "/images/bike-wash-snowfoam.jpg",
    imageAlt: "Classic twin motorcycle covered in thick snow foam in Cardilac wash bay",
    pricingIds: ["basic-bike-wash"],
    highlights: [
      "Thick pH-neutral snow foam wash",
      "Alloy wheel, tyre dressing & mudguard clean",
      "Tailored for scooters, roadsters & cruisers",
    ],
  },
  {
    id: "detailed-bike-wash",
    title: "Two-Wheeler Ceramic Coating & Detailing",
    category: "two-wheeler-care",
    categoryLabel: "Two-Wheeler Care",
    shortDescription:
      "Comprehensive detailing with chain degreasing & lube, deep polishing, spray wax, and multi-surface ceramic gloss protection.",
    startingPriceLabel: "From ₹300",
    image: "/images/bike-ceramic-detailing.jpg",
    imageAlt: "Gloss-black motorcycle with ceramic coating under hexagonal studio lights",
    pricingIds: ["detailed-bike-wash"],
    highlights: [
      "Ceramic spray wax & gloss paint protection",
      "Intensive chain cleaning, degreasing & lube",
      "Engine head, exhaust & chrome polish finish",
    ],
  },
];

