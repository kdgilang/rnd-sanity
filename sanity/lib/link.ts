import LinkModel from '@sanity/models/LinkModel'

export const contentPaths: any = {
  flexibleContent: '',
  articleContent: '/articles'
}

export const linkBuilder = (link: LinkModel, pathName: string = '') => {
  let res = { uri: '', isCurrentPage: false, target: '_self' }
  
  if (!link) {
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

    if (pathName === res.uri) {
      res.isCurrentPage = true
    }
  }

  return res
}
