import { formatDate } from '../helpers/format_date'
import type { Post } from '../types/post'

export const posts: Post[] = [
  {
    id: crypto.randomUUID(),
    author: {
      name: 'Kristina',
      avatar: 'https://cdn.simpleicons.org/reddit/FF4500',
    },
    createdAt: formatDate('2026-09-03T07:30:00.000Z'),
    editedAt: null,
    title: 'Classic Margherita Pizza',
    content: {
      type: 'text',
      data: 'Preheat the oven to 475°F (245°C).Roll out the pizza dough and spread tomato sauce evenly. Top with slices of fresh mozzarella and fresh basil leaves. Drizzle with olive oil and season with salt and pepper. Bake in the preheated oven for 12-15 minutes or until the crust is golden brown. Slice and serve hot.',
    },
  },
  {
    id: crypto.randomUUID(),
    author: {
      name: 'Alex',
      avatar: 'https://cdn.simpleicons.org/reddit/FF4500',
    },
    createdAt: formatDate('2025-09-02T15:20:00.000Z'),
    editedAt: formatDate('2026-09-02T16:10:00.000Z'),
    title: 'Interesting article',
    content: {
      type: 'link',
      data: 'https://dummyjson.com/recipes/search?q=Margherita',
    },
  },
  {
    id: crypto.randomUUID(),
    author: {
      name: 'John',
      avatar: 'https://cdn.jsdelivr.net/npm/simple-icons@v16/icons/reddit.svg',
    },
    createdAt: formatDate('2026-09-01T10:15:00.000Z'),
    editedAt: null,
    title: 'Pizza',
    content: {
      type: 'image',
      data: 'https://cdn.dummyjson.com/recipe-images/1.webp',
    },
  },
]
