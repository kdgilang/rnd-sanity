// ./deskStructure.js

import {
  IoIosSettings,
  IoIosGitNetwork,
  IoMdGlobe,
  IoIosMenu,
  IoMdPricetags,
  IoMdGitBranch
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
            .title('Settings')
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
                .title('Networks')
                .icon(IoIosGitNetwork)
                .child(S.document().schemaType('networkSetting').documentId('networkSetting')),
            ])
        ),

      S.listItem()
        .title('Taxonomy')
        .icon(IoMdGitBranch)
        .child(
          S.list()
            .title('Taxonomy')
            .items([
              S.listItem()
                .title('Category')
                .icon(IoMdPricetags)
                .child(S.documentTypeList('categoryTaxonomy')),
            ])
        ),
      // Remove the new singletons from the main list
      ...S.documentTypeListItems().filter(
        (listItem: any) => ![
          'siteSetting',
          'routeSetting',
          'networkSetting',
          'categoryTaxonomy',
        ].includes(listItem.getId())
      ),
    ])


    // S.documentList('')
    // .title('Taxonomy')
    // .filter('_type == categoryTaxonomy')