export default {
    name: "storeInfo",
    title: "Store Information",
    type: "document",
    groups: [
      { name: "contact", title: "Contact Details" },
      { name: "location", title: "Location" },
      { name: "social", title: "Social Links" },
    ],
    fields: [
      {
        name: "storeName",
        title: "Store Name",
        type: "string",
        group: "contact",
      },
      {
        name: "address",
        title: "Full Address",
        type: "text",
        rows: 3,
        group: "location",
      },
      {
        name: "googleMapUrl",
        title: "Google Maps Link",
        type: "url",
        group: "location",
      },
      {
        name: "phone",
        title: "Phone Number",
        type: "string",
        group: "contact",
      },
      {
        name: "whatsapp",
        title: "WhatsApp Number",
        type: "string",
        group: "contact",
      },
      {
        name: "instagram",
        title: "Instagram Link",
        type: "url",
        group: "social",
      },
      {
        name: "openingHours",
        title: "Opening Hours",
        type: "string",
        group: "contact",
      },
      {
        name: "storePhoto",
        title: "Store / Shop Photo",
        type: "image",
        options: { hotspot: true },
        group: "location",
      },
    ],
  };
  