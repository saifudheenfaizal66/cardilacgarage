export type GalleryCategory =
  | "All"
  | "Car Wash"
  | "Ceramic Coating"
  | "Graphene Coating"
  | "PPF Installation"
  | "Interior Detailing"
  | "Polishing"
  | "Before & After";

export interface GalleryItem {
  id: string;
  title: string;
  category: Exclude<GalleryCategory, "All">;
  caption: string;
  image: string;
  alt: string;
  isStudioReference: boolean;
}

export const GALLERY_CATEGORIES: GalleryCategory[] = [
  "All",
  "Car Wash",
  "Ceramic Coating",
  "Graphene Coating",
  "PPF Installation",
  "Interior Detailing",
  "Polishing",
  "Before & After",
];

/**
 * Studio showcase reference visuals.
 * Replace image paths with genuine Cardilac client vehicle photos in /public/images/
 * as project photography becomes available.
 */
export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-ceramic",
    title: "Hydrophobic Ceramic Beading",
    category: "Ceramic Coating",
    caption: "Showcase Reference — Tight water beading & deep mirror gloss finish",
    image: "/images/ceramic-coating.jpg",
    alt: "Showcase visual: Hydrophobic water beading on a ceramic-coated black hood",
    isStudioReference: true,
  },
  {
    id: "gal-graphene",
    title: "Graphene Mirror Clarity",
    category: "Graphene Coating",
    caption: "Showcase Reference — Anti-yellowing liquid depth across dark bodywork",
    image: "/images/graphene-coating.jpg",
    alt: "Showcase visual: Gunmetal coupe demonstrating graphene coating gloss",
    isStudioReference: true,
  },
  {
    id: "gal-ppf",
    title: "Precision PPF Application",
    category: "PPF Installation",
    caption: "Showcase Reference — 175–195 micron film alignment & squeegee finish",
    image: "/images/ppf-wrapping.jpg",
    alt: "Showcase visual: Clear Paint Protection Film installation on front fender",
    isStudioReference: true,
  },
  {
    id: "gal-wash-ceramic",
    title: "Ceramic Foam Wash Rinse",
    category: "Car Wash",
    caption: "Showcase Reference — High-gloss decontamination & hydrophobic water sheeting",
    image: "/images/ceramic-wash.jpg",
    alt: "Showcase visual: Luxury black sedan during ceramic foam wash rinse",
    isStudioReference: true,
  },
  {
    id: "gal-wash-wheel",
    title: "Alloy & Caliper Brush Detailing",
    category: "Car Wash",
    caption: "Showcase Reference — Gentle deep wheel barrel and brake caliper cleaning",
    image: "/images/executive-wash.jpg",
    alt: "Showcase visual: Soft detailing brush cleaning matte black alloy wheel",
    isStudioReference: true,
  },
  {
    id: "gal-interior",
    title: "Leather Seat Cleaning",
    category: "Interior Detailing",
    caption: "Showcase Reference — Gentle foam agitation & bespoke leather care",
    image: "/images/seat-cleaning-detail.jpg",
    alt: "Showcase visual: Professional technician cleaning luxury leather car seats",
    isStudioReference: true,
  },
  {
    id: "gal-polishing",
    title: "Hex-Light Paint Inspection",
    category: "Polishing",
    caption: "Showcase Reference — Paint surface inspection prior to machine polishing",
    image: "/images/about-bay.jpg",
    alt: "Showcase visual: Technician inspecting SUV paint under studio lighting",
    isStudioReference: true,
  },
  {
    id: "gal-before-after-lights",
    title: "Headlight Lens Clarity Restoration",
    category: "Before & After",
    caption: "Showcase Reference — Restored optical clarity replacing oxidized lens haze",
    image: "/images/headlight-restoration.jpg",
    alt: "Showcase visual: Restored crystal-clear LED matrix headlight assembly",
    isStudioReference: true,
  },
  {
    id: "gal-before-after-engine",
    title: "Engine Bay Degrease & Dressing",
    category: "Before & After",
    caption: "Showcase Reference — Satin OEM-look finish across hoses and engine cover",
    image: "/images/engine-bay.jpg",
    alt: "Showcase visual: Clean dressed luxury car engine bay",
    isStudioReference: true,
  },
];

