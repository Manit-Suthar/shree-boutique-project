const homepageSettings = {
    name: "homepageSettings",
    title: "Homepage Settings",
    type: "document",
    fields: [
      {
        name: "heroTitle",
        title: "Hero Title",
        type: "string",
        description: "Main headline of the hero section",
      },
      {
        name: "heroSubtitle",
        title: "Hero Subtitle",
        type: "text",
        rows: 2,
        description: "Short tagline for the hero section",
      },
      {
        name: "heroButtonText",
        title: "Hero Button Text",
        type: "string",
        initialValue: "Whatsapp Now",
      },
      {
        name: "heroBgStart",
        title: "Hero Background Gradient Start",
        type: "string",
        initialValue: "#fff5f9",
      },
      {
        name: "heroBgEnd",
        title: "Hero Background Gradient End",
        type: "string",
        initialValue: "#ffe5ef",
      },
      {
        name: "whatsappNumber",
        title: "WhatsApp Number",
        type: "string",
        description: "Phone number for WhatsApp contact button",
      },
      {
        name: "showTopBanner",
        title: "Show Top Flowing Announcement Banner?",
        type: "boolean",
        initialValue: true,
      },
      {
        name: "topBannerText",
        title: "Top Banner Announcement Text",
        type: "string",
        description: "Continuous flowing announcement line at the very top. Leave empty to hide.",
        initialValue: "✨ Bespoke Tailoring & Designer Studio • Bridal Blouses • Chaniya Cholis • Saree-to-Gown Redesign • Bodakdev, Ahmedabad",
      },
      {
        name: "topBannerLink",
        title: "Top Banner Link (optional)",
        type: "string",
        description: "e.g. tel:+919428919432 or WhatsApp link",
      },
      
    ],
  };

export default homepageSettings;
  