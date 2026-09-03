import clsx from 'clsx'
import styles from './header.module.scss'

export type HeaderProps = {
  children: React.ReactNode
  classNames?: {
    base?: string
    container?: string
  }
}

export function Header({ children, classNames }: HeaderProps) {
  return (
    <div className={clsx(styles.base, classNames?.base)}>
      <div className={clsx(styles.container, classNames?.container)}>
        {children}
      </div>
    </div>
  )
}
