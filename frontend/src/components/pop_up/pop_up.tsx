import clsx from 'clsx'
import styles from './pop_up.module.scss'
import { createPortal } from 'react-dom'

export type PopUpProps = {
  children: React.ReactNode
  onClose: () => void
  className?: string
}

export function PopUp({ children, onClose, className }: PopUpProps) {
  const popupRoot = document.getElementById('popup-root')

  if (!popupRoot) {
    return
  }

  function handleClick(event: React.MouseEvent<HTMLDivElement>) {
    if (event.target === event.currentTarget) {
      onClose()
    }
  }

  return createPortal(
    <div className={styles.overlay} onClick={handleClick}>
      <div className={clsx(styles.base, className)}>{children}</div>
    </div>,
    document.getElementById('popup-root')!,
  )
}
