export function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Mendy Klein - Life Coach & Somatic Practitioner",
    description:
      "Transform your life with certified life coaching, somatic therapy, breathwork, and transformational touch therapy. Serving Brooklyn, Rockland County, and worldwide via Zoom.",
    url: "https://mendyklein.com",
    telephone: "+1-347-977-6675",
    email: "Kleinscoaching@gmail.com",
    address: [
      {
        "@type": "PostalAddress",
        addressLocality: "Brooklyn",
        addressRegion: "NY",
        addressCountry: "US",
      },
      {
        "@type": "PostalAddress",
        addressLocality: "Rockland County",
        addressRegion: "NY",
        addressCountry: "US",
      },
    ],
    areaServed: [
      {
        "@type": "City",
        name: "Brooklyn",
      },
      {
        "@type": "AdministrativeArea",
        name: "Rockland County",
      },
      {
        "@type": "Place",
        name: "Worldwide (via Zoom)",
      },
    ],
    priceRange: "$$",
    openingHours: "Mo-Fr 09:00-18:00",
    sameAs: [
      "https://www.facebook.com/infinitelifelifecoaching",
      "https://www.linkedin.com/in/mendykleinlifecoach",
      "https://www.instagram.com/infinitelifecoach",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Life Coaching",
            description:
              "Personalized guidance to unlock your potential and create lasting positive change.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Somatic Therapy",
            description:
              "Release stored trauma and reconnect with your body through gentle, body-centered healing practices.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Breathwork",
            description:
              "Experience profound transformation through conscious breathing techniques.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Transformational Touch Therapy",
            description:
              "Heal through the power of therapeutic touch, releasing tension and restoring balance.",
          },
        },
      ],
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
