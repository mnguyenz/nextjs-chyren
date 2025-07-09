export const POSTS_QUERY = `
  *[_type=="article"]{
    _id, 
    title, 
    "slug": slug.current, 
    content, 
    "thumbnailUrl": thumbnail.asset->url
  }
`