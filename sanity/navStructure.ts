// ./deskStructure.js

import {
  IoIosSettings,
  IoIosGitNetwork,
  IoMdGlobe,
  IoIosMenu,
} from "react-icons/io";

export const navStructure = (S: any) =>
  S.list()
    .title('Base')
    .items([
      S.listItem()
        .title('Settings')
        .icon(IoIosSettings)
        .child(
          S.list()
            // Sets a title for our new list
            .title('Settings')
            // Add items to the array
            // Each will pull one of our new singletons
            .items([
              S.listItem()
                .title('Site')
                .icon(IoMdGlobe)
                .child(S.document().schemaType('siteSetting').documentId('siteSetting')),
              S.listItem()
                .title('Route')
                .icon(IoIosMenu)
                .child(S.document().schemaType('routeSetting').documentId('routeSetting')),
              S.listItem()
                .title('Social Media')
                .icon(IoIosGitNetwork)
                .child(S.document().schemaType('socialMediaSetting').documentId('socialMediaSetting')),
            ])
        ),
      // We also need to remove the new singletons from the main list
      ...S.documentTypeListItems().filter(
        (listItem: any) => ![
          'siteSetting',
          'routeSetting',
          'socialMediaSetting',
        ].includes(listItem.getId())
      ),
    ])