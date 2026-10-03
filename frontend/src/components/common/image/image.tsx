import clsx from 'clsx'
import styles from './image.module.scss'

export type ImageProps = {
  src: string
  alt: string
  width?: string | number
  height?: string | number
  fallbackSrc?: string
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
  fallbackSrc,
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
        width={width}
        height={height}
        onClick={onClick}
        onMouseEnter={onHover}
        onError={(event) => {
          if (fallbackSrc) {
            event.currentTarget.src = fallbackSrc
          }
        }}
      />
    </div>
  )
}
