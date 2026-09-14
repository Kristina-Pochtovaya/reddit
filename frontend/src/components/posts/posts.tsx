import clsx from 'clsx'
import styles from './posts.module.scss'
import { posts as mockedPosts } from '../../mock/mocked_post'
import { useEffect, useState } from 'react'
import type { Post as PostType } from '../../types/post'
import { Post } from '../post/post'
import { Divider } from '../common/divider/divider'

export type PostsProps = {
  classNames?: {
    base?: string
    container?: string
  }
}

export function Posts({ classNames }: PostsProps) {
  const [posts, setPosts] = useState<PostType[]>([])

  useEffect(() => {
    setPosts(mockedPosts)
    console.log(mockedPosts)
  }, [])

  return (
    <div className={clsx(styles.base, classNames?.base)}>
      <div className={clsx(styles.container, classNames?.container)}>
        {posts.map((post) => (
          <>
            <Post key={post.id} {...post} />
            <Divider />
          </>
        ))}
      </div>
    </div>
  )
}
