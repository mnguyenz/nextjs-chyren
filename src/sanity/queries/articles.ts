export const HOMEPAGE_QUERY = `
  *[_type == "article"]{
    _id, 
    title, 
    "slug": slug.current, 
    content, 
    "thumbnailUrl": thumbnail.asset->url
  }
`

export const SINGLE_ARTICLE_QUERY = `
  *[_type == "article" && _id == $id][0]{
    _id,
    title,
    "slug": slug.current, 
    content,
    "thumbnailUrl": thumbnail.asset->url
  }
`