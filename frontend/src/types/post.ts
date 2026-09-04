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

export type Post = {
  authorName: string
  createdAt: string
  editedAt: string | null
  title: string
  content: PostContent
}
