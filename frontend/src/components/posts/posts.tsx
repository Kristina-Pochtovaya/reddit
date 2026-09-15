import clsx from 'clsx'
import styles from './posts.module.scss'
import { Post } from '../post/post'
import type { Post as PostType } from '../../types/post'
import { Divider } from '../common/divider/divider'
import { getSearchString, selectPosts } from '../store/post_slice'
import { useSelector } from 'react-redux'
import { Fragment } from 'react/jsx-runtime'
import { useMemo } from 'react'

export type PostsProps = {
  classNames?: {
    base?: string
    container?: string
  }
}

function filterPost(searchString: string, posts: PostType[]) {
  return searchString
    ? posts.filter(
        (post) =>
          post.author.name.toLowerCase().includes(searchString) ||
          post.content.data.toLowerCase().includes(searchString) ||
          post.title.toLowerCase().includes(searchString),
      )
    : posts
}

export function Posts({ classNames }: PostsProps) {
  const posts = useSelector(selectPosts)
  const searchString = useSelector(getSearchString)
  const filteredPosts = useMemo(
    () => filterPost(searchString, posts),
    [posts, searchString],
  )

  return (
    <div className={clsx(styles.base, classNames?.base)}>
      <div className={clsx(styles.container, classNames?.container)}>
        {filteredPosts.map((post) => (
          <Fragment key={post.id}>
            <Post {...post} />
            <Divider />
          </Fragment>
        ))}
      </div>
    </div>
  )
}
