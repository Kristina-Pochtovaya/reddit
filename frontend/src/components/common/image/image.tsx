import clsx from 'clsx'
import styles from './image.module.scss'

export type ImageProps = {
  src: string
  alt: string
  width?: string | number
  height?: string | number
  onClick?: () => void
  onHover?: () => void
  classNames?: {
    base?: string
    image?: string
  }
}

export function Image({
  src,
  alt,
  width,
  height,
  classNames,
  onClick,
  onHover,
}: ImageProps) {
  return (
    <div className={clsx(styles.base, classNames?.base)}>
      <img
        className={clsx(styles.image, classNames?.image)}
        src={src}
        alt={alt}
        width={width || '15px'}
        height={height || '15px'}
        onClick={onClick}
        onMouseEnter={onHover}
      />
    </div>
  )
}
