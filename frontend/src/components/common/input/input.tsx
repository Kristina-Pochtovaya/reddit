import clsx from 'clsx'
import styles from './input.module.scss'

export type InputProps = {
  name: string
  type?: string
  disabled?: boolean
  placeholder?: string
  classNames?: {
    base?: string
    input?: string
  }
}

export function Input({
  name,
  type,
  disabled = false,
  placeholder,
  classNames,
}: InputProps) {
  return (
    <div className={clsx(styles.base, classNames?.base)}>
      <input
        id={name}
        name={name}
        type={type}
        disabled={disabled}
        placeholder={placeholder}
        className={clsx(styles.input, classNames?.input)}
      />
    </div>
  )
}
