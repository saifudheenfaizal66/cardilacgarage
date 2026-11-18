import React from "react";
import { ExternalLink, ShieldCheck, MapPin } from "lucide-react";
import { SectionHeading } from "@/components/common/SectionHeading";
import { BUSINESS_INFO } from "@/data/business";

export function ReviewsSection() {
  return (
    <section
      id="reviews"
      className="border-t border-[#292932] bg-[#09090D] py-16 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 rounded-2xl border border-[#292932] bg-[#111116] p-6 sm:p-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="Client Feedback"
              title="VERIFIED GOOGLE REVIEWS & STUDIO FEEDBACK."
              description="Read authentic customer reviews and ratings directly on our official Google Business profile, or share your own experience after visiting Cardilac."
            />
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-xl border border-[#292932] bg-[#17171F] p-6 shadow-lg">
              <div className="flex items-center gap-3.5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#E81CFF]/45 bg-[#111116] shadow-[0_0_15px_-4px_rgba(232,28,255,0.4)]">
                  <img
                    src={BUSINESS_INFO.logos.emblem}
                    alt="Cardilac logo"
                    className="h-8 w-8 object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-display text-base font-bold text-white">
                    Cardilac on Google
                  </h3>
                  <div className="flex items-center gap-1.5 mt-0.5 text-xs text-[#A1A1AA]">
                    <MapPin className="h-3 w-3 text-[#E81CFF] shrink-0" />
                    <span>Ambalapuzha, Alappuzha</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-2 rounded-lg border border-[#A020F0]/30 bg-[#A020F0]/10 px-3 py-2 text-xs font-semibold text-[#E81CFF]">
                <ShieldCheck className="h-4 w-4 shrink-0 text-[#E81CFF]" />
                <span>Verified Google Business Profile</span>
              </div>

              <div className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                <a
                  href={BUSINESS_INFO.googleBusinessUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg border border-[#A020F0]/60 bg-[#A020F0] px-4 py-2.5 text-xs font-bold tracking-wide text-white transition-all hover:bg-[#8E18D8] shadow-[0_0_20px_-4px_rgba(160,32,240,0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E81CFF]"
                >
                  <span>View reviews on Google</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>

                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg border border-[#292932] bg-[#111116] px-4 py-2.5 text-xs font-semibold tracking-wide text-[#D4D4D8] transition-colors hover:border-[#A020F0]/60 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E81CFF]"
                >
                  <span>Find on Google Maps</span>
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
