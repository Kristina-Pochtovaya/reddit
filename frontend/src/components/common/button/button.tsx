import clsx from 'clsx'
import styles from './button.module.scss'

export type ButtonProps = {
  children: React.ReactNode
  onClick: () => void
  onHover?: () => void
  disabled?: boolean
  classNames?: {
    base?: string
    button?: string
  }
}

export function Button({
  children,
  classNames,
  onClick,
  onHover,
  disabled = false,
}: ButtonProps) {
  return (
    <div
      className={clsx(
        styles.base,
        classNames?.base,
        disabled && styles.base__disabled,
      )}
    >
      <button
        className={clsx(styles.button, classNames?.button)}
        onClick={onClick}
        onMouseEnter={onHover}
      >
        {children}
      </button>
    </div>
  )
}
