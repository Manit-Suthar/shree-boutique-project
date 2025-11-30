export const structure = (S) =>
  S.list()
    .title("Content")
    .items([
      S.documentTypeListItem("productGallery").title("Boutique Gallery"),
      S.documentTypeListItem("reviews").title("Client Reviews"),

      S.divider(),

      S.documentTypeListItem("storeInfo").title("Store Information"),
      S.documentTypeListItem("homepageSettings").title("Homepage Settings"),
    ]);
