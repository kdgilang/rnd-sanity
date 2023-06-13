import LinkModel from '@sanity/models/LinkModel'

export const contentPaths: any = {
  flexibleContent: '',
  articleContent: '/articles'
}

export const linkBuilder = (link: LinkModel, pathName: string = '') => {
  let uri = ''
  let isCurrentPage = false
  let target = '_self'
  if (link.isExternal) {
    uri = link.uri
    target = '_blank'
  } else {
    if (contentPaths[link?.ref?._type]) {
      uri = `${contentPaths[link.ref._type]}`
    }

    uri += `/${link.ref.slug.current}`

    if (pathName === uri) {
      isCurrentPage = true
    }
  }
  return {
    uri,
    target,
    isCurrentPage
  }
}
