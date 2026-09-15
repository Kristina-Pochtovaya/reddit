import clsx from 'clsx'
import styles from './input.module.scss'

export type InputProps = {
  value?: string
  name: string
  type?: string
  disabled?: boolean
  placeholder?: string
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  classNames?: {
    base?: string
    input?: string
  }
}

export function Input({
  value,
  name,
  type,
  disabled = false,
  placeholder,
  onChange,
  classNames,
}: InputProps) {
  return (
    <div className={clsx(styles.base, classNames?.base)}>
      <input
        value={value}
        onChange={onChange}
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
