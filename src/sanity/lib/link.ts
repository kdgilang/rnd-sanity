import LinkModel from '@sanity/models/LinkModel'

export const contentPaths: any = {
  flexibleContent: '',
  articleContent: '/articles',
  categoryTaxonomy: '/categories'
}

export const linkBuilder = (link?: LinkModel, currentPathName: string = '') => {
  let res = { uri: '', isCurrentPage: false, target: '_self' }
  
  if (!link?.uri && !link?.ref) {
    return res;
  }

  if (link.isExternal) {
    res.uri = link.uri
    res.target = '_blank'
  } else {
    if (contentPaths[link?.ref?._type]) {
      res.uri = `${contentPaths[link.ref._type]}`
    }

    res.uri += `/${link?.ref?.slug?.current}`

    if (currentPathName === res.uri) {
      res.isCurrentPage = true
    }
  }

  return res
}

export const internalLinkBuilder = (slug: string, type: string): string => {
  if( !slug || !type) {
    return ''
  }

  return `${contentPaths[type]}/${slug}`
}
