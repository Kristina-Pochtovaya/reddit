export type PostContent =
  | {
      type: 'text'
      text: string
    }
  | {
      type: 'link'
      url: string
    }
  | {
      type: 'image'
      imageUrl: string
    }

export type Author = {
  name: string
  avatar: string
}

export type Post = {
  id: string
  author: Author
  createdAt: string
  editedAt: string | null
  title: string
  content: PostContent
}
