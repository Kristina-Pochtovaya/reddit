import type { Post } from '../types/post'

export const posts: Post[] = [
  {
    authorName: 'Kristina',
    createdAt: '2026-09-03T07:30:00.000Z',
    editedAt: null,
    title: 'Some title',
    content: {
      type: 'text',
      text: 'Content',
    },
  },
  {
    authorName: 'Alex',
    createdAt: '2026-09-02T15:20:00.000Z',
    editedAt: '2026-09-02T16:10:00.000Z',
    title: 'Interesting article',
    content: {
      type: 'link',
      url: 'https://example.com/article',
    },
  },
  {
    authorName: 'John',
    createdAt: '2026-09-01T10:15:00.000Z',
    editedAt: null,
    title: 'My cat',
    content: {
      type: 'image',
      imageUrl: 'https://example.com/cat.jpg',
    },
  },
]
