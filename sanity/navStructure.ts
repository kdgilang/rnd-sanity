// ./deskStructure.js

import { IoIosSettings, IoIosGitNetwork } from "react-icons/io";

export const navStructure = (S: any) =>
  S.list()
    .title('Base')
    .items([
      S.listItem()
        .title('Settings')
        .child(
          S.list()
            // Sets a title for our new list
            .title('Settings')
            // Add items to the array
            // Each will pull one of our new singletons
            .items([
              S.listItem()
                .title('Site Settings')
                .icon(IoIosSettings)
                .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
              S.listItem()
                .title('Social Media Settings')
                .icon(IoIosGitNetwork)
                .child(S.document().schemaType('socialMediaSettings').documentId('socialMediaSettings')),
            ])
        ),
      // We also need to remove the new singletons from the main list
      ...S.documentTypeListItems().filter(
        (listItem: any) => !['siteSettings', 'colors', 'navigation'].includes(listItem.getId())
      ),
    ])