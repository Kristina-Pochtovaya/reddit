export const contentTypes = {
  text: 'text',
  link: 'link',
  image: 'image',
} as const

export type PostContent = {
  type: keyof typeof contentTypes
  data: string
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
