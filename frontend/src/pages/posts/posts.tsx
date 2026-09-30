import clsx from 'clsx'
import styles from './posts.module.scss'
import { Post } from '../../components/post/post'
import { Divider } from '../../components/common/divider/divider'
// import { getSearchString, selectPosts } from '../../components/store/post_slice'
import { selectPosts } from '../../components/store/post_slice'
import { useSelector } from 'react-redux'
import { Fragment } from 'react/jsx-runtime'
import { useEffect } from 'react'
import { useAppDispatch } from '../../components/store/store'
import { getPosts } from '../../components/store/thunks/posts'
import { DEFAULT_DELAY, useDebounce } from '../../helpers/debounce'
import { useSearchParams } from 'react-router'

export type PostsProps = {
  classNames?: {
    base?: string
    container?: string
  }
}

export function Posts({ classNames }: PostsProps) {
  const posts = useSelector(selectPosts)
  const [searchParams] = useSearchParams()
  const search = searchParams.get('search') ?? ''
  const dispatch = useAppDispatch()

  const debouncedSearch = useDebounce(search, DEFAULT_DELAY)

  useEffect(() => {
    dispatch(getPosts({ search: debouncedSearch }))
  }, [dispatch, debouncedSearch])

  return (
    <div className={clsx(styles.base, classNames?.base)}>
      <div className={clsx(styles.container, classNames?.container)}>
        {posts.map((post) => (
          <Fragment key={post.id}>
            <Post {...post} />
            <Divider />
          </Fragment>
        ))}
      </div>
    </div>
  )
}
