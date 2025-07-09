export const POSTS_QUERY = `
  *[_type=="article"]{
    _id, title, content
  }
`