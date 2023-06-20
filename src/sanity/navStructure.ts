import { FaEnvelope } from "react-icons/fa";
import {
  ImEmbed,
  ImFontSize,
  ImImage,
  ImImages,
  ImMenu,
  ImNewspaper,
  ImPlay,
  ImStack
} from "react-icons/im";
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
      // Remove the new singletons from the main list
      ...S.documentTypeListItems().filter(
        (listItem: any) => ![
          'media.tag',
          'siteSetting',
          'routeSetting',
          'networkSetting',
          'categoryTaxonomy',
          'accordionComponent',
          'bannerComponent',
          'cardComponent',
          'carouselComponent',
          'collectionComponent',
          'embedComponent',
          'mediaTileComponent',
          'richTextComponent',
          'inquiryComponent',
        ].includes(listItem.getId())
      ),

      S.listItem()
        .title('Taxonomies')
        .icon(IoMdGitBranch)
        .child(
          S.list()
            .title('Taxonomies')
            .items([
              S.listItem()
                .title('Category')
                .icon(IoMdPricetags)
                .child(S.documentTypeList('categoryTaxonomy')),
            ])
        ),

      S.listItem()
        .title('Components')
        .child(
          S.list()
            .title('Components')
            .items([
              S.listItem()
                .title('Accordion')
                .icon(ImMenu)
                .child(S.documentTypeList('accordionComponent')),
              S.listItem()
                .title('Banner')
                .icon(ImImage)
                .child(S.documentTypeList('bannerComponent')),
              S.listItem()
                .title('Card')
                .icon(ImNewspaper)
                .child(S.documentTypeList('cardComponent')),
              S.listItem()
                .title('Carousel')
                .icon(ImImages)
                .child(S.documentTypeList('carouselComponent')),
              S.listItem()
                .title('Collection')
                .icon(ImStack)
                .child(S.documentTypeList('collectionComponent')),
              S.listItem()
                .title('Embed')
                .icon(ImEmbed)
                .child(S.documentTypeList('embedComponent')),
              S.listItem()
                .title('Media Tile')
                .icon(ImPlay)
                .child(S.documentTypeList('mediaTileComponent')),
              S.listItem()
                .title('Rich Text')
                .icon(ImFontSize)
                .child(S.documentTypeList('richTextComponent')),
              S.listItem()
                  .title('Inquiry Form')
                  .icon(FaEnvelope)
                  .child(S.documentTypeList('inquiryComponent')),
            ])
        ),

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
    ])


    // S.documentList('')
    // .title('Taxonomy')
    // .filter('_type == categoryTaxonomy')