import clsx from 'clsx'
import styles from './divider.module.scss'

export type DividerProps = {
  classNames?: {
    base?: string
  }
}

export function Divider({ classNames }: DividerProps) {
  return <div className={clsx(styles.base, classNames?.base)} />
}
