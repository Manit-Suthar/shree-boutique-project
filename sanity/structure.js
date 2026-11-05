// sanity/structure.js

import { Settings, Home, Image, Users } from 'lucide-react'; 

export const structure = (S) =>
  S.list()
    .title('Content')
    .items([
      // 1. Homepage Settings
      S.listItem()
        .title('Homepage Settings')
        .icon(Settings)
        .child(
          S.documentTypeList('homepageSettings')
            .title('Homepage Settings')
        ),

      // 2. Document List (Boutique Gallery - List of items)
      S.listItem()
        .title('Boutique Gallery')
        .icon(Image)
        .child(S.documentTypeList('productGallery').title('Gallery Items')),

      // 3. Document List (Client Reviews - List of testimonials)
      S.listItem()
        .title('Client Reviews')
        .icon(Users)
        .child(S.documentTypeList('reviews').title('Testimonials List')),
      
      S.divider(),

      // Filter out the items we explicitly defined above
      ...S.documentTypeListItems().filter(
        (listItem) => !['homepageSettings', 'productGallery', 'reviews'].includes(listItem.getId())
      ),
    ]);