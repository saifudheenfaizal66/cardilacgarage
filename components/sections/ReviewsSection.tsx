import React from "react";
import { ExternalLink, ShieldCheck } from "lucide-react";
import { SectionHeading } from "@/components/common/SectionHeading";
import { BUSINESS_INFO } from "@/data/business";

export function ReviewsSection() {
  return (
    <section
      id="reviews"
      className="border-t border-[#292932] bg-[#09090D] py-16 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 rounded-md border border-[#292932] bg-[#111116] p-6 sm:p-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="Client Feedback"
              title="VERIFIED GOOGLE REVIEWS & STUDIO FEEDBACK."
              description="We publish only genuine, client-verified customer reviews. Visit our Google Business profile to read verified customer experiences or share feedback after your service at Cardilac Garage."
            />
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-md border border-[#292932] bg-[#17171F] p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-md border border-[#E81CFF]/45 bg-[#111116]">
                  <img
                    src={BUSINESS_INFO.logos.emblem}
                    alt="Cardilac Garage logo"
                    className="h-7 w-7 object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-display text-base font-bold text-white">
                    Cardilac Garage on Google
                  </h3>
                  <p className="text-xs text-[#A1A1AA]">
                    Valanjavazhy Junction, Ambalapuzha, Alappuzha
                  </p>
                </div>
              </div>

              <p className="mt-4 flex items-start gap-2 text-xs leading-relaxed text-[#A1A1AA]">
                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#A020F0]" />
                <span>
                  Prepared to showcase verified client testimonials as supplied
                  by the business. Check live reviews directly on Google.
                </span>
              </p>

              <div className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                <a
                  href={BUSINESS_INFO.googleBusinessUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-[#A020F0]/60 bg-[#A020F0]/15 px-4 py-2.5 text-xs font-semibold tracking-wide text-white transition-colors hover:bg-[#A020F0]"
                >
                  <span>Google Profile</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-[#292932] bg-[#111116] px-4 py-2.5 text-xs font-semibold tracking-wide text-[#D4D4D8] transition-colors hover:border-[#A020F0]/60 hover:text-white"
                >
                  <span>Google Maps</span>
                  <ExternalLink className="h-3.5 w-3.5 text-[#A020F0]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

