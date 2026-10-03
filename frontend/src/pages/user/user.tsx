import { useSelector } from 'react-redux'
import styles from './user.module.scss'
import { selectUser } from '../../components/store/user_slice'
import clsx from 'clsx'
import { Divider } from '../../components/common/divider/divider'
import { Fragment } from 'react/jsx-runtime'
import { Post } from '../../components/post/post'
import { selectPosts } from '../../components/store/post_slice'
import { DEFAULT_DELAY, useDebounce } from '../../helpers/debounce'
import { useEffect } from 'react'
import { getPosts } from '../../components/store/thunks/posts'
import { useSearchParams } from 'react-router'
import { useAppDispatch } from '../../components/store/store'
import { Button } from '../../components/common/button/button'
import AddIcon from '@mui/icons-material/Add'

export type UserProps = {
  classNames?: {
    base?: string
    posts?: string
    actions?: string
  }
}

export function User({ classNames }: UserProps) {
  const user = useSelector(selectUser)
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
      <div className={clsx(styles.actions, classNames?.actions)}>
        <Button
          classNames={{ base: styles.buttonBase, button: styles.button }}
          onClick={() => console.log('Create Post')}
        >
          <AddIcon className={styles.icon} />
          Create Post
        </Button>
        <Button
          classNames={{ base: styles.buttonBase, button: styles.button }}
          onClick={() => console.log('Edit Profile')}
        >
          Edit Profile
        </Button>
      </div>
      <div className={clsx(styles.posts, classNames?.posts)}>
        {posts
          .filter((post) => post.author.name === user?.name)
          .map((post) => (
            <Fragment key={post.id}>
              <Post {...post} />
              <Divider />
            </Fragment>
          ))}
      </div>
    </div>
  )
}
