export const BUSINESS_INFO = {
  // Official Business Identity for Meta Business Verification
  legalRegisteredName: "Cardilac",
  operatingBrandName: "Cardilac",
  name: "CARDILAC",
  displayName: "Cardilac",
  domain: "cardilac.com",
  websiteUrl: "https://cardilac.com",
  tagline: "Professional Car Detailing, Coating & Protection Studio",
  locationShort: "Ambalapuzha, Alappuzha",

  // Official Legal Disclosure Statement
  officialDisclosure:
    "Cardilac is an officially registered professional car detailing, coating and protection studio.",
  metaVerificationNotice:
    "Cardilac operates as an officially registered professional car detailing, coating and protection studio.",

  // Physical Studio / Business Address
  address: {
    line1: "Valanjavazhy Junction, Ambalapuzha",
    line2: "Vandanam, Alappuzha, Kerala 688005, India",
    full: "Valanjavazhy Junction, Ambalapuzha, Vandanam, Alappuzha, Kerala 688005, India",
    city: "Alappuzha",
    state: "Kerala",
    postalCode: "688005",
    country: "India",
  },

  // Contact Phone Numbers (Clearly visible in header & footer)
  phoneDisplay: "+91 74797 97965", // Phone 1
  phoneHref: "tel:+917479797965",
  secondaryPhoneDisplay: "+91 74979 79740", // Phone 2
  secondaryPhoneHref: "tel:+917497979740",

  phones: [
    {
      label: "Phone 1",
      display: "+91 74797 97965",
      href: "tel:+917479797965",
      whatsappUrl: "https://wa.me/917479797965",
    },
    {
      label: "Phone 2",
      display: "+91 74979 79740",
      href: "tel:+917497979740",
      whatsappUrl: "https://wa.me/917497979740",
    },
  ],

  email: "cardilacsocial@gmail.com",
  emailHref: "mailto:cardilacsocial@gmail.com",

  whatsappNumber: "917479797965",
  whatsappBaseUrl: "https://wa.me/917479797965",
  secondaryWhatsappNumber: "917497979740",
  secondaryWhatsappBaseUrl: "https://wa.me/917497979740",

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
    disclaimer: "Verified Studio Profile",
  },

  seo: {
    title: "Cardilac | Car Detailing, Coating & Protection Studio",
    description:
      "Cardilac is an officially registered professional car detailing, coating and protection studio in Alappuzha, Kerala.",
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

  const lines: string[] = ["Hello Cardilac,", ""];

  if (isPickupDelivery) {
    lines.push(
      "I would like to enquire about your Vehicle Pickup & Delivery service."
    );
  } else {
    lines.push("I would like to enquire about your car detailing and protection services.");
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
