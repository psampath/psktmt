
import React from "react";

const features = [
  { label: "CONSISTENCE QUALITY ACROSS THE BAR" },
  { label: "BEST BONDING WITH CEMENT" },
  { label: "HIGHEST LEVEL OF PURITY" },
  { label: "HIGHER FATIGUE STRENGTH" },
  { label: "RECYCLABLE" },
  { label: "EARTHQUAKE RESISTANT" },
  { label: "ECO - FRIENDLY" },
  { label: "CORROSION FREE" },
  { label: "TRANSPARENT PRICING" }
];

// The icons are visually embedded in your supplied image, so this grid textually labels them for accessibility.
const PskTmtBanner = () => (
  <section className="relative py-12 md:py-20 bg-white">
    <div className="container-custom flex flex-col items-center">
      <img 
        src="/lovable-uploads/e2c6bd44-861f-409a-a1a0-90ce3785daa1.png"
        alt="PSK TMT 600+ SD - Power and Strength Engineered in Kavach"
        className="w-full max-w-3xl mx-auto mb-8 md:mb-12 rounded-lg shadow-card"
        style={{ background: "white" }}
      />

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-8 mt-4 w-full max-w-5xl">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center text-center"
          >
            {/* Placeholder for visual alignment with the icons in the image above */}
            <div className="w-16 h-16 mb-2 rounded-full bg-psktmt-100 flex items-center justify-center border-2 border-psktmt-500" />
            <span className="text-xs md:text-sm font-semibold text-psktmt-500 uppercase tracking-wide">{feature.label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PskTmtBanner;
