export default {
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
    ],
  };
  