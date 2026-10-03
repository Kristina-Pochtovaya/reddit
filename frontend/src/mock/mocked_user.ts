import type { User } from '../types/user'

export const users: User[] = [
  {
    id: crypto.randomUUID(),
    name: 'Kristina',
    avatar: 'https://cdn.simpleicons.org/reddit/FF4500',
    password: '12345Kristina',
    email: 'kris@test.com',
  },
  {
    id: crypto.randomUUID(),
    name: 'Alex',
    avatar: 'https://cdn.simpleicons.org/reddit/FF4500',
    password: '12345Alex',
    email: 'alex@test.com',
  },
  {
    id: crypto.randomUUID(),
    name: 'John',
    avatar: 'https://cdn.jsdelivr.net/npm/simple-icons@v16/icons/reddit.svg',
    password: '12345John',
    email: 'john@test.com',
  },
  {
    id: crypto.randomUUID(),
    name: 'emilys',
    avatar: 'https://cdn.jsdelivr.net/npm/simple-icons@v16/icons/reddit.svg',
    password: 'emilyspass',
    email: 'emilys@test.com',
  },
]
