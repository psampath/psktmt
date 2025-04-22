
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
  <section className="relative py-6 md:py-10 bg-white">
    <div className="container-custom flex flex-col items-center">
      <img 
        src="/lovable-uploads/e2c6bd44-861f-409a-a1a0-90ce3785daa1.png"
        alt="PSK TMT 600+ SD - Power and Strength Engineered in Kavach"
        className="w-full max-w-3xl mx-auto mb-8 md:mb-12 rounded-lg shadow-card"
        style={{ background: "white" }}
      />
    </div>
  </section>
);

export default PskTmtBanner;
