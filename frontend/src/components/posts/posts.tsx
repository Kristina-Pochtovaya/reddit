import clsx from 'clsx'
import styles from './posts.module.scss'
import { useState } from 'react'

export type PostsProps = {
  children: React.ReactNode
  classNames?: {
    base?: string
  }
}

export function Posts({ children, classNames }: PostsProps) {
  const [] = useState([])

  return <div className={clsx(styles.base, classNames?.base)}>{children}</div>
}
