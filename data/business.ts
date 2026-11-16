export const BUSINESS_INFO = {
  // Official Business Identity for Meta Business Verification
  legalRegisteredName: "Cardilac",
  operatingBrandName: "Cardilac Garage",
  name: "CARDILAC GARAGE",
  displayName: "Cardilac Garage",
  domain: "cardilacgarage.com",
  websiteUrl: "https://cardilacgarage.com",
  tagline: "Professional Automotive Repair, Mechanical Maintenance & Premium Detailing Studio",
  locationShort: "Ambalapuzha, Alappuzha",

  // Official Legal Disclosure Statement
  officialDisclosure:
    "Cardilac Garage is operated under our registered business Cardilac.",
  metaVerificationNotice:
    "Cardilac Garage is operated under our registered business Cardilac.",

  // Physical Workshop / Business Address
  address: {
    line1: "Valappuzha / Valanjavazhy Junction, Ambalapuzha",
    line2: "Vandanam, Alappuzha, Kerala 688005, India",
    full: "Valappuzha / Valanjavazhy Junction, Ambalapuzha, Vandanam, Alappuzha, Kerala 688005, India",
    city: "Alappuzha",
    state: "Kerala",
    postalCode: "688005",
    country: "India",
  },

  // Contact Phone Numbers (Clearly visible in header & footer)
  phoneDisplay: "+91 74797 97965", // Phone 1
  phoneHref: "tel:+917479797965",
  secondaryPhoneDisplay: "+91 74797 79740", // Phone 2
  secondaryPhoneHref: "tel:+917479779740",

  phones: [
    {
      label: "Phone 1",
      display: "+91 74797 97965",
      href: "tel:+917479797965",
      whatsappUrl: "https://wa.me/917479797965",
    },
    {
      label: "Phone 2",
      display: "+91 74797 79740",
      href: "tel:+917479779740",
      whatsappUrl: "https://wa.me/917479779740",
    },
  ],

  email: "contact@cardilacgarage.com",

  whatsappNumber: "917479797965",
  whatsappBaseUrl: "https://wa.me/917479797965",
  secondaryWhatsappNumber: "917479779740",
  secondaryWhatsappBaseUrl: "https://wa.me/917479779740",

  googleMapsUrl: "https://maps.app.goo.gl/xXSGSYeyGc1pdo4p9?g_st=aw",
  googleMapsEmbedUrl:
    "https://www.google.com/maps?cid=7199993347327952350&output=embed",
  googleBusinessUrl: "https://www.google.com/search?kgmid=%2Fg%2F11wvrkhzqp",

  workingHours: "Monday – Sunday: 8:30 AM – 7:30 PM",

  logos: {
    emblem: "/logos/cardilac_logo.png",
    wordmarkLight: "/logos/light_name_text_logo.png",
    wordmarkDark: "/logos/dark_name_text_logo.png",
  },

  referenceMetrics: {
    instagramFollowers: "1,087+",
    instagramPosts: "100+",
    disclaimer: "Verified Workshop Profile",
  },

  seo: {
    title: "Cardilac Garage | Official Automotive Repair, Maintenance & Detailing Studio",
    description:
      "Cardilac Garage is operated under our registered business Cardilac. Professional automotive repair, mechanical maintenance, ceramic coating, PPF, and garage care at cardilacgarage.com in Alappuzha, Kerala.",
  },
} as const;

export interface WhatsAppEnquiryOptions {
  service?: string;
  vehicleModel?: string;
  vehicleSize?: string;
  preferredDate?: string;
  notes?: string;
  isPickupDelivery?: boolean;
}

export function buildWhatsAppUrl(options: WhatsAppEnquiryOptions = {}): string {
  const {
    service,
    vehicleModel,
    vehicleSize,
    preferredDate,
    notes,
    isPickupDelivery,
  } = options;

  const lines: string[] = ["Hello Cardilac Garage,", ""];

  if (isPickupDelivery) {
    lines.push(
      "I would like to enquire about your Vehicle Pickup & Delivery service."
    );
  } else {
    lines.push("I would like to enquire about your automotive repair and garage services.");
  }

  lines.push("");

  if (service) {
    lines.push(`Service: ${service}`);
  }
  if (vehicleModel) {
    lines.push(`Vehicle Model: ${vehicleModel}`);
  }
  if (vehicleSize) {
    lines.push(`Vehicle Size: ${vehicleSize}`);
  }
  if (preferredDate) {
    lines.push(`Preferred Date: ${preferredDate}`);
  }
  if (notes) {
    lines.push(`Details: ${notes}`);
  }

  if (service || vehicleModel || vehicleSize) {
    lines.push("");
  }

  lines.push("Please share the available appointment slots.");
  lines.push("");
  lines.push("Thank you.");

  const encoded = encodeURIComponent(lines.join("\n"));
  return `${BUSINESS_INFO.whatsappBaseUrl}?text=${encoded}`;
}
