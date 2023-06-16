import {DefaultDocumentNodeResolver} from 'sanity/desk'
import Iframe from 'sanity-plugin-iframe-pane'
import { baseUrl } from './env'
import { contentPaths } from './lib/link'

export const defaultDocumentNode: DefaultDocumentNodeResolver = (S, {schemaType}) => {
  if (contentPaths[schemaType] !== undefined) {
    return S.document().views([
      S.view.form(),
      S.view
        .component(Iframe)
        .options({
          url: (doc: any) => {
            const redirect = `${contentPaths[schemaType]}/${doc?.slug?.current}`
            return `${baseUrl}/api/preview?redirect=${redirect}`
          },
        })
        .title('Preview'),
    ])
  }

  return S.document().views([S.view.form()])
}